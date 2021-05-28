import React, { useState } from 'react';
import { useEffect } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from "../common/listGroupComponent";
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [geners, setGenres] = useState([]);
    const [liked, setLike] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genreCount, setGenreCount] = useState(0);
    const [sortColumn, setSortColumn] = useState({ path: "title", order: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        const geners = [{ _id: "", name: "All Movies" }, ...getGenres()];
        setMovies(getMovies());
        setGenres(geners);
    },[]);

    const handleDelete = (movie) => {
        const mov = movies.filter((m) => m._id !== movie._id);
        setMovies(mov);
    };

    const handleLike = (movie) => {
        const mov = [...movies];
        const index = mov.indexOf(movie);
        mov[index] = { ...movies[index] };
        mov[index].liked = !mov[index].liked;
        setMovies(mov);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleGenerSelect = (genre) => {
        setSelectedGenre(genre);
        setSearchQuery("");
        setCurrentPage(1);
    }
    const handleSort = (sortColumn) => {
        console.log(sortColumn.path)
        setSortColumn({path:sortColumn.path, order:sortColumn.order });
    }
    const handleSearch = query => {
        setSearchQuery(query);
        setSelectedGenre(null);
        setCurrentPage(1);
    }


    return (
        <>
            <div className="row">
                <div className="col-md-2 filter">
                    <ListGroup
                        items={geners}
                        selectedItem={selectedGenre}
                        onItemSelected={handleGenerSelect}
                        // showAllmovies={this.onAllMovies}
                        // onBadge={this.getBadgeClass}
                        // onformat={this.formatCount}
                        itemsCount={genreCount} />
                </div>
                <div className="col-md-10">
                    <MoviesTable
                        pageSize={pageSize}
                        currentPage={currentPage}
                        movies={movies}
                        selectedGener={selectedGenre}
                        handlePageChange={handlePageChange}
                        handleLike={handleLike}
                        handleDelete={handleDelete}
                        onSort={handleSort}
                        sortColumn={sortColumn}
                        searchQuery={searchQuery}
                        handleSearch={handleSearch}
                    />
                </div>
            </div>
        </>
    );
}

export default Movies;