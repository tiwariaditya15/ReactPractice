import React, {Component} from 'react';
import axios from 'axios';
import Pokeball from '../pokeball.png';
class Post extends Component{
    state = {
        user: null
    }
    componentDidMount(){
        let id = this.props.match.params.pathId;
        axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
        .then(res => {
            this.setState({
                user: res.data
            });
        });
        
    }
    render(){
        const userShow = this.state.user ? (
            <div className = "card">
                
                <div className = "center">
                    <img src = {Pokeball} alt = "a pokeball"/>
                    <p className = "title">User Id:{this.state.user.postId}</p>
                    <p>User Name:{this.state.user.name}</p>
                    <p>User Email:{this.state.user.email}</p>
                </div>
            </div>
        ) : (
            <div className = "center"> Loading User ...</div>
        );
        return(
            <div className = "container post">
                {userShow}
            </div>
        );
    }
}
export default Post;