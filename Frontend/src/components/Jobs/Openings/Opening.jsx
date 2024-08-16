import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Opening.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Card from '../Card/Card.jsx'

function Opening() {
    const [cards, setCards] = useState([]);
    const [titleQuery, setTitleQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get('http://localhost:5000/api/cards')
            .then(response => {
                setCards(response.data);
                setFilteredCards(response.data); // Initially display all cards
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleSearch = () => {
        const filtered = cards.filter(card =>
            card.title.toLowerCase().includes(titleQuery.toLowerCase()) &&
            card.location.toLowerCase().includes(locationQuery.toLowerCase())
        );
        setFilteredCards(filtered);
    };
    return (

        <div id="current-opening">
            <div className={styles.h}>
                <h2 className={styles.h}>Current Openings</h2>
                <img className={styles.ht} src="data:image/png;base64,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" alt="Job opening at TalentConnect" />
            </div>
            <div className={styles.search}>
                <FaSearch className={styles.logo} />
                <input className={styles.input}
                    placeholder='Search job name'
                    type='text'
                    value={titleQuery}
                    onChange={event => setTitleQuery(event.target.value)} />
                <FaLocationDot className={styles.logo} />
                <input className={styles.input} placeholder='Location' type='text'
                    value={locationQuery}
                    onChange={event => setLocationQuery(event.target.value)} />
                <button className={styles.bn} onClick={handleSearch}>Search</button>
            </div>
            <h2 className={styles.headr}>Recommendation</h2>
            {/* <hr className={styles.hr}></hr> */}
            <div className={styles.cardcontainer}>
                {filteredCards.map(card => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        location={card.location}
                        salary={card.salary}
                        experience={card.experience}
                    />
                ))}

            {/* <h2> More openings are comming soon .....</h2> */}
            </div>
        </div>
    )
}

export default Opening