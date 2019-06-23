import React from 'react';
import './pagination.css';

const Pagination = (props) => {
    const { currentPage, totalPages } = props;
    
    const renderPages = () => {
        let pages = [];

        for (let index = 1; index <= totalPages; index++) {
            let activeClass = currentPage === index ? 'active' : '';
            pages.push(<li onClick={ props.paginate.bind(null, index) } className={`page-item ${activeClass}`} key={index}><a className="page-link" href>{ index }</a></li>);
        }

        return pages;
    };

    return (
        <nav>
            <ul className="pagination">
                { renderPages() }
            </ul>
        </nav>
    );
}

export default Pagination;