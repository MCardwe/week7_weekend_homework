import React, { useState } from 'react';
import DescriptionBox from '../components/DescriptionBox';
import MoreInfo from '../components/MoreInfo';

const FilmBox = ({film}) => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const filmDescription = film.description;

    const handleClick = () => {
        setButtonClicked(true);
    }

    return (
        <div className='film-box'>
        <DescriptionBox description={filmDescription}/>
        {buttonClicked == false ? <button onClick={handleClick}>More Info</button> : <MoreInfo film={film}/>}
        </div>
    )
}

export default FilmBox;