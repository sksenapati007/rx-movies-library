import React from 'react';
import Like from '../common/likeComponent';
import { Link } from 'react-router-dom';
const TableBody = (props) => {
    const { movies, handleLike, handleDelete } = props;
    return (
        <>
            <tbody className="col">
                {movies.map((movie) => {
                    // console.log(movie)
                    return (
                        <tr className="row ml-0 mr-0" key={movie._id}>
                            <td className="col-2"> <Link to={`/movies/${movie._id}`}> {movie.title}</Link></td>
                            <td className="col-2">{movie.genre.name}</td>
                            <td className="col-2">{movie.numberInStock}</td>
                            <td className="col-2">{movie.dailyRentalRate}</td>
                            <td className="col-2">
                                <Like
                                    liked={movie.liked}
                                    onClick={() => handleLike(movie)}
                                />
                            </td>
                            <td className="col-2">
                                <button
                                    className="fa fa-trash btn btn-danger"
                                    onClick={() => handleDelete(movie)}
                                >
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
export default TableBody;