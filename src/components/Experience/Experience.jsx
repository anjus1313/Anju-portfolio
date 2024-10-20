import React from "react";

import styles from './Experience.module.css';
import { getImageURL } from "../../utils";



export const Experience = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Experience</h1>
            <div className={styles.content}>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem}> 
                        <img className={styles.icon} src={getImageURL("affiliations/UMASS.jpeg")}/>
                        <div className={styles.experienceDescription}>
                            <h3 className={styles.experienceTitle}>Data Science Intern (May 2024 - Aug 2024)</h3>   
                            <h4 className={styles.company}>Center for Data Science, UMASS, Amherst</h4>
                            <ul className={styles.bullets}>
                                <li>
                                    Automated data entry process for the NGO, Doctors Without Borders using GPT-4o for OCR saving over $500K in operational costs.
                                </li>
                                <li>
                                Developed an interactive Streamlit application that enables users to upload images, verify, 
                                and correct AI-recognized text, and update the data to a server with a single click via API calls.
                                </li>
                            </ul>    
                        </div>
                    </li >
                    <li className={styles.menuItem}>
                        <img className={styles.icon} src={getImageURL("affiliations/ISRO.png")}/>
                        <div className={styles.Item}>
                            <h3 className={styles.experienceTitle}>Applied Scientist (Jan 2021 - July 2023) </h3>
                            <h4 className={styles.company}>Indian Space Research Organization</h4>
                            <ul className={styles.bullets}>
                            <li>As Applied Scientist, I led a team of 5 researchers in 200 hours of characterization 
                            testing of Stationary Plasma Thrusters, generating over 720,000 data points that significantly 
                            improved our understanding of thruster dynamics. I collaborated with clients in the space industry, 
                            overseeing the design of the requirements document, RFP and conducting meetings for the procurement of a 
                            Thrust Measurement System valued at $400k. I gained substantial experience in leadership, project and stakeholder 
                            management and was awarded ”Outstanding” ratings on 3 consecutive performance reviews.
                            </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.menuItem}>
                    <img className={styles.icon} src={getImageURL("affiliations/IIST.png")}/>
                    <div className={styles.Item}>
                        <h3 className={styles.experienceTitle}>Machine Learning Researcher (Jan 2020 - Aug 2020)</h3>
                        <h4 className={styles.company}>Indian Institute of Space Science and Technology, Trivandrum, India</h4>
                        <ul className={styles.bullets}>
                        <li>During the internship, I was responsible for developing and testing a model that addressed a critical challenge in robotics that required a robot to identify the pose of its own hand to grab objects in its field of view.
                            For this purpose, I created a realistic and diverse synthetic ’HAND’ dataset containing 2500 images using Python and Blender. I implemented transfer learning based training of NOCS ML model on HAND dataset, leading to a substantial 2-order reduction in training time and a decrease in the dataset required from 2̃75k to 0.9k images.
                            I was able to achieve an improved accuracy of 92% in the 6D pose prediction by appending an enterprise-scale pose estimation model with an edge attention module, to increase focus on edges in color maps. This demonstrated state-of-the-art results using transfer learning based training.
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};