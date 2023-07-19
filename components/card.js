import React from 'react';

function Card({title, desc, imgUrl}){
    return (
        <React.Fragment>
            <div className='card'>
                <img src={imgUrl} alt={title} className='img-responsive'/>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-text'>{desc}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;