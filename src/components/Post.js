import React, {Component} from 'react';
import axios from 'axios';

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
                    <p className = "title">{this.state.user.postId}</p>
                    {this.state.user.name}
                    {this.state.user.email}
                </div>
            </div>
        ) : (
            <div className = "center"> Loading User ...</div>
        );
        return(
            <div className = "container">
                {userShow}
            </div>
        );
    }
}
export default Post;