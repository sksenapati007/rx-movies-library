import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    // console.log("cp " + currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize);

    // if (pagesCount === 1) return null
    const pages = _.range(1, pagesCount + 1)
    // console.log("pages : " + pages);
    // console.log("itemsCount : "+itemsCount);
    // console.log("pageCount1 :"+pagesCount);
    // console.log("pageCount2 :"+pagesCount);
    // console.log("pageCount3 :"+Math.floor(pagesCount));
    // console.log("pageSize :"+pageSize);

    return (
        // <nav className="container-fluid " aria-label="Page navigation example">
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-11">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pages.map((page) => {
                            return (<li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>)
                        })}
                        <li className="page-item">
                            <a className="page-link"  href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        // </nav >
    );
}

export default Pagination;




