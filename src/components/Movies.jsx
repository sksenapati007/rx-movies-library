import React, { Component } from 'react';
import ListGroup from "../common/listGroupComponent";
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';

import MoviesTable from "./moviesTable";

class Movies extends Component {
    //TODO: useState()
    state = {
        movies: [],
        geners: [],
        liked: 0,
        pageSize: 4,
        currentPage: 1,
        selectedGenre: null,
        genreCount: 0,
        sortColumn: { path: "title", order: 'asc' },
        searchQuery: ''

    }
    componentDidMount() {
        const geners = [{ _id: "", name: "All Movies" }, ...getGenres()];
        this.setState({
            movies: getMovies(),
            geners
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies,
        });
    };

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleGenerSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            searchQuery: "",
            currentPage: 1
        })
    }
    handleSort = (sortColumn) => {
        // console.log(path)
        this.setState({
            sortColumn
        })
    }
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }
    render() {
        let { pageSize, currentPage, movies: allMovies, geners, selectedGenre, genreCount } = this.state;
        return (
            <>
                <div className="row">
                    <div className="col-md-2 filter">
                        <ListGroup
                            items={geners}
                            selectedItem={selectedGenre}
                            onItemSelected={this.handleGenerSelect}
                            showAllmovies={this.onAllMovies}
                            onBadge={this.getBadgeClass}
                            onformat={this.formatCount}
                            itemsCount={genreCount} />
                    </div>
                    <div className="col-md-10">
                        <MoviesTable
                            pageSize={pageSize}
                            currentPage={currentPage}
                            movies={allMovies}
                            selectedGener={selectedGenre}
                            handlePageChange={this.handlePageChange}
                            handleLike={this.handleLike}
                            handleDelete={this.handleDelete}
                            onSort={this.handleSort}
                            sortColumn={this.state.sortColumn}
                            searchQuery={this.state.searchQuery}
                            handleSearch={this.handleSearch}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;