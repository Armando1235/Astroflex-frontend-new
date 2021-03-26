import React from 'react';

const Card = (props) => {
    return(
        <div className={ `card ${props.className}` }>
            <img src={props.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;