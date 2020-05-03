import React from 'react';
import './card.css';

const Card = (props) => {

    const { data } = props;
    return (
        <section className="container">
            <ul className="celeb-card-wrapper">
            { data.map((item) => {
                    return (
                        <li key={item.id} className="celeb-card-item">
                            <img src={item.imgUrl} alt={item.title} className="celeb-card-image" />
                            <p className="celeb-card-name">{item.title}</p>
                        </li>
                    );
                })
            }
            </ul>
        </section>
    );
}

export default Card;
