import React from "react";
import Style from './ContactForm.module.scss';

function ContactForm() {
    return (
        <React.Fragment>
            <h2 className={Style.title}>Contact me</h2>
            <form className={Style.form} method="post" data-netlify="true" >
                <input type="hidden" name="form-name" value="contact" />

                <label className={Style.labels} htmlFor="name">Name:</label><br />
                <input className={Style.nameAndemail} type="text" id="name" name="name" placeholder="John Doe" required /><br />

                <label className={Style.labels} htmlFor="email">Email :</label><br />
                <input className={Style.nameAndemail} type="email" id="email" name="email" placeholder="john.doe@awesomemail.com" required /><br />

                <label className={Style.labels} htmlFor="message">Message :</label><br />
                <textarea className={Style.message} id="message" name="message" rows="5" maxLength="1000" placeholder="Hi Lucas, ..." required></textarea><br /><br />

                <input className={Style.button} type="submit" value="Send" />
            </form>
        </React.Fragment>
    );
}

export default ContactForm;