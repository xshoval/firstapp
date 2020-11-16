import React from 'react';

class AddContacts extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <div>
                        <h1>Contact Info</h1>
                    </div>
                    <p>
                        <label>First Name</label>
                        <input type = "text" id = "fName" />
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type = "text" id = "lName" />
                    </p>
                    <p>
                        <label>Phone</label>
                        <input type = "text" id = "phone" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type = "text" id = "email" />
                    </p>
                    <p>
                        <input type="button" id="send" value = "add" />
                    </p>
                </div>
            </form>
        );
    }
}

export default AddContacts;