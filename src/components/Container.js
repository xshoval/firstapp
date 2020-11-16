import React from 'react';
import Contact from './Contact';

import Header from "./header";
import Nav from "./nav";
import AddContact from "./AddContacts"

class Container extends React.Component{
    render()
    {
        return(
            <div className = "container">
                <Header />
                <Nav />
                <Contact />
                <AddContact />
            </div>
        );
    }
}

export default Container;