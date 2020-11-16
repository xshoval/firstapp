import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <button>+</button>
                <input type= "text" placeholder="Search.."></input>
                <button >search</button>
            </div>
        );
    }
}

export default Nav;