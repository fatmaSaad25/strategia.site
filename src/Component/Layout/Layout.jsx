import React, { Component } from 'react';
import Head from '../Head/Head';
import Foot from '../Foot/Foot';
import { Outlet } from 'react-router-dom';
class Layout extends Component {
    render() {
        return (
            <div>
                <Head/>
                <Outlet/>
                <Foot/>
            </div>
        );
    }
}

export default Layout;

