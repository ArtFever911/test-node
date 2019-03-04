
import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    const createPageNav = () => {
        let nav = [];
        const maxPage = props.employees && props.employees.maxPage;
        for (let i = 1; i <= maxPage; i++) {
            nav.push(<li><Link to={`/${i}/`} key={i}>{i}</Link></li>)
        }
        return nav
    }
    return (
        <div className="page-nav">
            <ul>
                <li><a href="">To start</a></li>
                <li><a href="">Prev</a></li>
                {createPageNav()}
                <li><a href="">Next</a></li>
                <li><a href="">To end</a></li>
            </ul>
        </div>
    )
}