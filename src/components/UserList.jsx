import React from 'react';

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
    
    RenderList = () => <ul className="userList">{this.state.users.map(e => <li>{e.id}: {e.name}</li>)}</ul>;

    LoadUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(result => this.setState({
                users: result
            }))
            .catch(e => console.warn("whops\nError:", e))
    }           
}