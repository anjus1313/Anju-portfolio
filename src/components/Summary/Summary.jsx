import React from "react";

import styles from './Summary.module.css';
import { getImageURL } from "../../utils";

export const Summary = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anju</h1> 
            <p className={styles.description}>
                II'm a Master's student in Computer Science at UMass Amherst, 
                studying Machine Learning, Computer Vision, NLP and software engineering.
                I’m dedicated to making a positive difference in the world by developing innovative solutions 
                that enhance people's lives and bring joy to their everyday experiences.<br/><br/>

                If you’re looking for a passionate software engineer with a strong background in machine learning to join your team, 
                or if you share my enthusiasm and passion to make a real difference in life around you, feel free to contact me!
            </p>  
            <a href="mailto:asanthoshkum@umass.edu" className={styles.contactBtn}>Contact Me</a>
        </div>  
        <img 
            src={getImageURL("hero/heroImage.png")} 
            alt="My-photo"
            className={styles.photo}    
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        
    </section>
    );
};