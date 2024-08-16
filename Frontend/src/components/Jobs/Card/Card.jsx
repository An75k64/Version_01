import React from 'react'
import styles from './Card.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.imgc}>
                <img className={styles.img} src='https://i.postimg.cc/P5Bwd7d1/logo-01.png'></img>
                <button className={styles.jdes}>Job description</button>
            </div>
            <h2 className={styles.head}>{props.title}</h2>
            <div className={styles.dec}>
                <div className={styles.location}>
                    <FaLocationDot className={styles.cardlogo} /><p className={styles.p}>{props.location}</p>
                </div>
                <div className={styles.location}>
                    <CiDollar className={styles.cardlogo} /> <p className={styles.p}>{props.salary}</p>
                </div>
                <div className={styles.location}>
                    <PiBagFill className={styles.cardlogo} /> <p className={styles.p}>{props.experience}</p>
                </div>
                <div className={styles.btncon}>
                    <Link to='/jobs/opening-form'>
                    <button className={styles.abtn}> Apply</button>
                    </Link>
              
                <a href='https://wa.me/917044326560'>
                    <button className={styles.btn}>
                        <FaWhatsapp className={styles.wht} />
                        Chat Now</button>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Card