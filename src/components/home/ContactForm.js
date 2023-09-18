import React from "react";
import Style from './ContactForm.module.scss';

function ContactForm() {
    return (
        <React.Fragment>
            <h2 className={Style.title}>Contact me</h2>
            <form className={Style.form} action="traitement.php" method="POST">
                <label className={Style.labels} for="name">Name:</label><br />
                <input className={Style.nameAndemail} type="text" id="name" name="name" placeholder="John Doe" required /><br />

                <label className={Style.labels} for="email">Email :</label><br />
                <input className={Style.nameAndemail} type="email" id="email" name="email" placeholder="john.doe@awesomemail.com" required /><br />

                <label className={Style.labels} for="message">Message :</label><br />
                <textarea className={Style.message} id="message" name="message" rows="5" maxlength="1000" placeholder="Hi Lucas, ..." required></textarea><br /><br />

                <input className={Style.button} type="submit" value="Send" />
            </form>
        </React.Fragment>
    );
}

export default ContactForm;