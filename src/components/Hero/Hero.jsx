import React from "React";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>  
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Aniket</h1>
                    <p className={styles.description}>
                        I am a full Stack Developer with the experience of 3 months using .NET and React. 
                        Reach out if you'd like to learn more!
                    </p>
                    <a href="mailto:iamaniket8@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
                <div className={styles.heroWrapper}>
                    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
                </div>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
