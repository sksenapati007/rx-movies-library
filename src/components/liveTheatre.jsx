import React from 'react';
import Movies from './MoviesFC';
// import Movies from './Movies';
import MovieSlider from './movieSlider';

const LiveTheatre = () => {
    return (
        <>
            <div className="row mt-3 p-3">
                    {/* <MovieSlider /> */}
                </div>
            <div className="row mt-2 p-2">
                <div className="col">
                    <Movies />
                </div>
            </div>
        </>
    );
}

export default LiveTheatre;