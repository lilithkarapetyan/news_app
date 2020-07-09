import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ContactUsButton from '../../UI/Button/Default';
import Searchbar from '../../UI/Searchbar/Searchbar';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle show={!props.open} clicked={props.opened} />
        <nav className={classes.DisplayOnly}>
            <NavigationItems navItems={props.navItems}></NavigationItems>
        </nav>
        <Searchbar onSearch={props.onSearch}/>
        <ContactUsButton className={classes.DisplayOnly} clicked={props.contactUsHandler} >Contact Us</ContactUsButton>
    </header>
);

export default Toolbar;