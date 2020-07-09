import React, { Component } from 'react';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import { getSources } from '../../Fetch/News';
import Modal from '../../Components/UI/Modal/Modal';
import ContactUs from '../../Components/ContactUs/ContactUs';
class NavLayout extends Component {
    state = {
        showSideDrawer: false,
        showModal: false,
        navItems: [{
            name: "Home",
            path: "/home"
        }]
    }

    componentDidMount() {
        getSources().then(({ sources }) => {
            let newItems = sources.slice(0, 4).map(item => {
                item.path = `/sources/${item.id}`
                return item;
            })
            newItems = this.state.navItems.concat(newItems);

            this.setState({ navItems: newItems })
        })
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    contactUsHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: false,
                showModal: !prevState.showModal
            };
        });
    }

    render() {
        return (
            <div style={{ padding: "60px 20px" }}>
                <Toolbar
                    opened={this.sideDrawerToggleHandler}
                    contactUsHandler={this.contactUsHandler}
                    navItems={this.state.navItems} />
                <SideDrawer
                    navItems={this.state.navItems}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    contactUsHandler={this.contactUsHandler} />
                <Modal
                    show={this.state.showModal}
                    clicked={this.contactUsHandler}>
                    <ContactUs />
                </Modal>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default NavLayout;