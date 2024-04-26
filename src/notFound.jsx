import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound(){
    return(
        <div>
            <h2>404 Page not found!</h2>
            <img src='error-404.png' alt='' className='error'></img>

            <p>Vuelve a <Link to= "../home">Home</Link></p>
        </div>
    )
}