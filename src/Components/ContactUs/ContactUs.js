import React from 'react';
import classes from './ContactUs.module.css';

const ContactUs = (props) => (
    <div className={classes.ContactUs}>
        <span>Tel: <a href="tel:+37400000000">+37400000000</a></span>
        <span>Address: Yerevan, Armenia</span>
    </div>
);

export default ContactUs;