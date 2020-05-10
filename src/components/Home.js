import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
class Home extends Component{
    state = {
        users: []
    }
    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                console.log(response);
            
                this.setState({
                    users: response.data.slice(0, 10)
                });
            
            });

            
    }
render(){
    const { users } = this.state;
    const usersList = users.length ? (
        users.map(user => {
            return (
                <div className = "post card" key = {user.id}>
                    <img src = {Pokeball} alt = "a pokeball"/>
                        <p> Name : {user.name} </p>
                        <Link to = {'/' + user.id}><p> Email : {user.email} </p></Link>
                </div>
            )
        })
    ) : (
        <div>
            Users aren't available yet.
        </div>
    );
    return(
        <div className = "container home">
            <h3>Home</h3>
            {usersList}
        </div>
    );
}
}

export default Home;