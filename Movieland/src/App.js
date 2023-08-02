import React, { useState, useEffect } from 'react';

 import MovieCard from "./MovieCard";
import "./App.css";
 import SearchIcon from "./search.svg";

// 9a75b410

const API_URL = 'http://www.omdbapi.com?apikey=9a75b410';


const App = () => {

    const [movies, setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
    };

    useEffect(() => {
        searchMovies('Star Wars');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>No movies found</h2>
                    </div>
                )}

            
        </div>
    );
}

export default App;