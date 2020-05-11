import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component{
render(){
    console.log(this.props);
    const { users } = this.props;
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

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}
export default connect(mapStateToProps)(Home);