import React from 'react';

const SelectFilm = ({films, handleSelected}) => {

    const handleChange = (event) => {
        const film = films[event.target.value]
        handleSelected(film);
    }

    const filmNodes = films.map((film, index) => {
        return (
            <option key={film.id} value={index}> {film.title} </option>
        )
    });

    return (
        <div className='dropdown'>
            <select defaultValue="" onChange={handleChange}>
                <option value="" disabled>Choose a Film</option>
                {filmNodes}
            </select>
        </div>
    );
}

export default SelectFilm;