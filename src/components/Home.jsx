import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { LoginContext } from "../Helper/Context";
import { SignupContext } from "../Helper/Context";
import { HomeContext } from "../Helper/Context";
import {Link} from 'react-router-dom';

function Home() {
  const [input, setInput] = useState("");
  const [failflag, setFailFlag] = useState(false);

  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { signUp, setSignUp } = useContext(SignupContext);
  const { Homee, setHome } = useContext(HomeContext);

  const loading = (
    <h1 style={{ color: "red" }}>Your Search did not match with any results</h1>
  );

  const [movies, setMovies] = useState([]);

  function inputSetter(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    if (e.keyCode == 13) {
      console.log("enter clicked");
      fetch("https://www.omdbapi.com?s=" + input + "&apikey=thewdb")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMovies([]);
          setFailFlag(false);

          function addMovie(id) {
            setMovies((movies) => [
              ...movies,
              {
                Poster: data.Search[id].Poster,
                Title: data.Search[id].Title,
                Type: data.Search[id].Type,
                Year: data.Search[id].Year,
                id: data.Search[0].imdbID,
              },
            ]);

            console.log(movies, data.Search[id].Title);
          }

          for (let i = 0; i < data.Search.length; i++) {
            addMovie(i);
          }
        })
        .catch((error) => {
          console.log(error);
          setFailFlag(true);
        });
    }
  }

  return (
    <div className="flexh">
      <Link to='/'>
      <button
        onClick={() => {
          setHome(false);

          setLoggedIn(true);

          setSignUp(false);
        }}
        style={{
          color: "green",
          cursor: "pointer",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "30px",
          backgroundColor: "black",
          border: "none",
        }}
      >
        LOG OUT
      </button>
      </Link>

      <h1 style={{ color: "white", textAlign: "center" }}>
        Enter movie name here
        <i className="fa fa-hand-o-down" aria-hidden="true"></i>
      </h1>
      <input
        onChange={inputSetter}
        onKeyUp={handleSubmit}
        style={{ width: "50%", height: "30px", fontSize: "20px" }}
        type="text"
      />

      {failflag ? loading : ""}

      <div className="flexr">
        <>
          {movies.map((movie) => (
            <div className="movie-item">
              <img
                style={{ color: "white" }}
                className="movie-image"
                key={movie.id}
                src={movie.Poster}
                alt="No Image"
              />

              <h2 style={{ color: "white", textAlign: "center" }}>
                {movie.Title}
              </h2>
              <h3 style={{ color: "blue" }}>{movie.Type}</h3>
              <h3 style={{ color: "white" }}>Released in {movie.Year}</h3>
              <a
                style={{ color: "blue" }}
                href={`https://www.imdb.com/title/` + movie.id + "/"}
                alt=""
              >
                See More
              </a>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Home;
