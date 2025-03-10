import React from "React";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}> 
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("./contact/emailIcon.png")} alt="Email Icon" />
                <a href="iamaniket884@gmail.com">iamaniket884@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("./contact/linkedinIcon.png")} alt="Linked Icon" />
                <a href="https://www.linkedin.com/in/aniket-patil07">https://www.linkedin.com/in/aniket-patil07</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("./contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/iamaniket77">https://github.com/iamaniket77</a>
            </li>
        </ul>
    </footer>
    );
};