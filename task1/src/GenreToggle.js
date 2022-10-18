import React from "react";

export function GenreToggle() {
    return (
     <div>
        <ul className='genre-list'>
            <li className='selected'>All</li>
            <li>Documentary</li>
            <li>Comedy</li>
            <li>Horror</li>
            <li>Crime</li>
        </ul>
        <div className='content'>All genres</div>
    </div>
    );
}