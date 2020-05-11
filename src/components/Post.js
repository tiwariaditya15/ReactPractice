import React, {Component} from 'react';
import axios from 'axios';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
import { deleteAction } from '../actions/deleteAction';
class Post extends Component{
    handleDelete = () => {
        this.props.deleteUser(this.props.user.id);
        this.props.history.push("/");
    }
    render(){
        console.log(this.props);
        const userShow = this.props.user ? (
            <div className = "card">
                
                <div className = "center">
                    <img src = {Pokeball} alt = "a pokeball"/>
                    <p className = "title">User Id:{this.props.user.id}</p>
                    <p>User Name:{this.props.user.name}</p>
                    <p>User Email:{this.props.user.email}</p>
                </div>
                <div className = "center"> 
                    <button className = "btn red" onClick = {this.handleDelete}> Delete User </button>
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


const mapStateToProps = (state, ownProps) => {
        let id = ownProps.match.params.pathId;
        return{
            user: state.users.find(user => user.id == id)
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => { dispatch(deleteAction(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);