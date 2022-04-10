import React from 'react';


const MoreInfo = ({film}) => {



    return (
        <div>
            <h2>{film.title}</h2>
            <img src={film.image} />
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Producer:</strong> {film.producer}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p><strong>Run-time: </strong>{film.running_time}</p>
            <p><strong>RT Score: </strong>{film.rt_score}</p>
        </div>
    );
}

export default MoreInfo;