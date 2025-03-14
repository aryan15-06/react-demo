import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

// components import
import MovieCard from "../components/MovieCard/MovieCard";
import './Home.css';
import useMovieList from "../hooks/useMovieList";

function Home(){

    const {movieList} = useMovieList('harry', 'avengers', 'batman');

    return (
        <div className="movie-card-wrapper">
            {movieList.length > 0 && movieList.map(movie => <MovieCard
            key={movie.imdbID}
            {...movie}
            />)}
        </div>
    )
}

export default Home;