import React from "react";

import styles from './Summary.module.css';
import { getImageURL } from "../../utils";

export const Summary = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi! I'm Anju</h1> 
            <p className={styles.description}>
                I'm currently a Master's in Computer Science student 
                at the University of Massachusetts, Amherst. I specialize in Machine Learning, Computer Vision, 
                and NLP, with a passion for applying these technologies to solve real-world problems. 
                I also enjoy developing clean and intuitive web applications with robust, efficient backend that ensure smooth performance.

                Feel free to look through my experience below and contact me if you would like to collaborate!
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