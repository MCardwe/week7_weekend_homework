import React, {useState, useEffect} from 'react';
import SelectFilm from '../components/SelectFlm';
import FilmBox from './FilmInfoBox';

const FilmPage = () => {

    const [films, setfilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        getFilms()
    }, [])
    

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => setfilms(data));
    }

    const handleSelected = (film) => {
        setSelectedFilm(film);
    }

    const handleClick = () => {
        setSelectedFilm(null);
    }


    return (
        <div className='FilmPage'>
            <h2>Studio Ghibli Movie Hub!</h2>
            <SelectFilm films={films} handleSelected={handleSelected}/>
            {selectedFilm ? <FilmBox film={selectedFilm} /> : null}
            {selectedFilm ? <button onClick={handleClick}>Reset</button> : null}
        </div>
    );
}


export default FilmPage;