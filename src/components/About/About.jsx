import React from "React";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.titles}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage1.png")} 
                alt="Holding a Trophy" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}> 
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in  building 
                            and optimiized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon (1).png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimized back-end 
                        systems and APIs 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple pages and have created design systems
                            as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};