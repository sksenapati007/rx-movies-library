import React from 'react';

const MovieSlider = () => {
    return (
        <div className="container-fluid">
            <div className="card">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="poster " src="https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg" alt="image1" />
                            <img className="poster " src="https://icdn3.digitaltrends.com/image/deadpool-2-thanksgiving-poster-1294x2048.jpg" alt="image2" />
                            <img className="poster" src="https://netdna.webdesignerdepot.com/uploads/2011/02/inception.jpg" alt="image3" />
                            <img className="poster" src="https://mikeantjones.files.wordpress.com/2012/04/thor-film-poster.jpg" alt="image4" />
                            <img className="poster" src="http://www.gmhslasso.org/wp-content/uploads/2018/01/Stegenga_BestMoviesof2017_Photo2.jpg" alt="image5" />
                            <img className="poster" src="https://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg" alt="image6" />
                            <img className="poster" src="https://images-na.ssl-images-amazon.com/images/I/91H06HPhX%2BL._SY717_.jpg" alt="image7" />
                            <img className="poster" src="https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg" alt="image8" />
                            <img className="poster" src="https://i.pinimg.com/564x/a3/a7/b0/a3a7b0f62b3996d8a6e12657083ee95b.jpg" alt="image8" />
                        </div>
                        <div className="carousel-item">
                            <img className="poster " src="https://i.pinimg.com/736x/a4/23/f8/a423f86593029b7d2a6d9f1e1fd1e406---movies-movies-to-watch-online.jpg" alt="image1" />
                            <img className="poster " src="https://icdn3.digitaltrends.com/image/deadpool-2-thanksgiving-poster-1294x2048.jpg" alt="image2" />
                            <img className="poster" src="https://netdna.webdesignerdepot.com/uploads/2011/02/inception.jpg" alt="image3" />
                            <img className="poster" src="https://mikeantjones.files.wordpress.com/2012/04/thor-film-poster.jpg" alt="image4" />
                            <img className="poster" src="http://www.gmhslasso.org/wp-content/uploads/2018/01/Stegenga_BestMoviesof2017_Photo2.jpg" alt="image5" />
                            <img className="poster" src="https://www.thebrandage.com/assets/image/uploads/haberler/Bright_TUR.jpg" alt="image6" />
                            <img className="poster" src="https://images-na.ssl-images-amazon.com/images/I/91H06HPhX%2BL._SY717_.jpg" alt="image7" />
                            <img className="poster" src="https://i.pinimg.com/736x/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02--classic-poster-classic-movies-posters.jpg" alt="image8" />
                            <img className="poster" src="https://i.pinimg.com/564x/a3/a7/b0/a3a7b0f62b3996d8a6e12657083ee95b.jpg" alt="image8" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default MovieSlider;