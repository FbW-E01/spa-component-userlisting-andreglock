import React from 'react';
import './userList.css';

export default class UserList extends React.Component {
    constructor () {
        super (),
        this.state = {
            message: "",
            users: []
        }
    }

    render() {
        return <>
            <button onClick={this.LoadUser}>Click Me</button>
            {this.RenderList()}
        </>
    }
    
    RenderList = () => <ul className="userList">{this.state.users.map(e => <li>
            {e.id}: {e.name} - Email: {e.email}<br></br>
            Phone Number: {e.phone} <br></br>
            Street: {e.address.street}/ Suite: {e.address.suite} <br></br>
            City: {e.address.city}/ Zip Code: {e.address.zipcode}
        </li>)}</ul>;

    LoadUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ users: result })
                console.log(result)
            })
            .catch(e => console.warn("whops\nError:", e))
    }           
}