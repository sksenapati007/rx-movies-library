import React from 'react';

import Pagination from "../components/pagination";
import { Paginate } from "../utils/paginateLogic";
import TableBody from "./TableBody";
import TableHeader from './TableHeader';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

const MoviesTable = (props) => {
    const { pageSize, currentPage, movies: allMovies, selectedGener, handlePageChange, handleLike, handleDelete, onSort, sortColumn, searchQuery, handleSearch } = props;

    const { length: count } = props.movies;

    if (count === 0) return "There is no movies in database!";

    let getPagedData = () => {

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGener && selectedGener._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGener._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = Paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    // const filtered = selectedGener && selectedGener._id ? allMovies.filter(m => m.genre._id === selectedGener._id) : allMovies

    // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    // const movies = Paginate(sorted, currentPage, pageSize);


    let getBadgeClass = () => {
        let classes = "badge m-1 badge-";
        classes += count === 0 ? "primary" : "warning";
        return classes;
    }
    let formatCount = () => {
        return count === 0 ? "Zero" : count;
    }
    let columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rental Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];
    const { totalCount, data: movies } = getPagedData();
    return (
        <div className="row">
            <div className="col-md text-light tableList">
                <div className="row">
                    <div className="col-md-5 pt-3">
                        <span className={getBadgeClass()}>{formatCount()}</span>
                        Movies in Database
                    </div>
                    <div className="col-md-5">
                        <span className="h2 text-center text-warning">Movies List</span>
                    </div>
                    <div className="col-md-2">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 pl-5 pt-3">
                        <Link to="/movies/new"
                            className="btn btn-success"
                        >
                            Add Movie
                        </Link>
                    </div>
                    <div className="col-md-9">
                        <SearchBox value={searchQuery} onChange={handleSearch} />
                    </div>
                </div>
                <div className="row">
                    <table className="table bg-info text-light text-center listMovies ">
                        <TableHeader
                            onSort={onSort}
                            sortColumn={sortColumn}
                            columns={columns}
                        />
                        <TableBody
                            movies={movies}
                            handleLike={handleLike}
                            handleDelete={handleDelete}
                        />
                    </table>
                </div>
            </div>
        </div >
    );
}

export default MoviesTable;