import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardItem extends Component {
    render() {
        const { path, label, src, text } = this.props;
        return (
            <>
                <li className='cards-item'>
                    <Link className='cards-item-link' to={path}>
                        <figure className='cards-item-pic-wrap' data-category={label}>
                            <img
                                src={src}
                                className='cards-item-img'
                                alt='test'
                            />
                        </figure>
                        <div className='cards-item-info'>
                            <h5 className='cards-item-text'>{text}</h5>
                        </div>
                    </Link>    
                </li> 
            </>
        );
    }
}

export default CardItem;