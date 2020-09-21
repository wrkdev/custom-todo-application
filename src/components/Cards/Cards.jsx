import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.css';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            tasks: null,
            cardArray: [
                { 'id': 1, 'src': 'images/wrkdev.jpg', 'text': 'Wrkdev Portfolio', 'label': 'Portfolio', 'path': '/about' },
                { 'id': 2, 'src': 'images/code3.jpg', 'text': 'Projects List', 'label': 'Projects', 'path': '/projects' },
                { 'id': 3, 'src': 'images/code2.png', 'text': 'Designs List', 'label': 'Designs', 'path': '/designs' },
                { 'id': 4, 'src': 'images/code.jpg', 'text': 'Misc Article', 'label': 'Misc', 'path': '/' }
            ] 
        };
    }

    async componentDidMount() {
        const taskArray = [];
        const response = await fetch(`http://localhost:5000/api/tasks`);
        const json = await response.json();
        json.forEach(jsonItem => {
            taskArray.push({
                'id': jsonItem._id,
                'text': jsonItem.summary,
                'src': `/images/${jsonItem.createdBy}.jpg`,
                'label': jsonItem.createdBy,
                'path': `/projects/${jsonItem._id}`
            });
        });
        this.setState({ tasks: taskArray });
    }

    render() {
        return (
            <div className='cards'>
                <h1>Check out these projects and designs</h1>
                <div className='cards-container'>
                    <div className='cards-wrapper'>
                        <ul className='cards-items'>
                            <CardItem
                                src='images/wrkdev.jpg'
                                text='sss'
                                label='sss'
                                path='/st'
                            />
                            <CardItem
                                src='images/wrkdev.jpg'
                                text='sss'
                                label='sss'
                                path='/st'
                            />
                        </ul>
                        <ul className='cards-items'>
                            {
                                this.state.tasks ? this.state.tasks.map(cardItem => (
                                    <CardItem
                                        key={cardItem.id}
                                        src={cardItem.src}
                                        text={cardItem.text}
                                        label={cardItem.label}
                                        path={cardItem.path}
                                    />
                                )) : ''
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;