import axios from 'axios';
import React from 'react';
import {deleteUser, fetchUsers} from './actions';
import { conect } from 'react-redux';

class Users extends React.Component{
async componentDidMount() {
  this.props.fetchUsers();
};

deleteBtn = (props) => {
  this.props.deleteUser (props)
}


render(){
    return (
      <div>
        <table className = "heading">
          <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>phone number</th>
              <th>action</th>
          </tr>
          {this.props.users.map((employee) => {
          return (
            <div key = {employee.id}>
                        <tr key = {employee.id} >
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.username}</td>
                            <td>{employee.phone}</td>
                            <td>
                              <button onClick = {this.deleteBtn.bind(this,employee.id)}>Delete</button>
                            </td>
                        </tr>
            </div>
        )})}
        </table>
      </div>
    )
  }
}

const mapStatetoProps = (state)=>{
    return {users : state.users}
}

export default connect(
    mapStatetoProps,{
        deleteUser,
        fetchUsers
    }
)(Users);

