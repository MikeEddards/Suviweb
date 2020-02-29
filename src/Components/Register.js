import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'


import {connect} from 'react-redux'
import FbookLogin from './FbookLogin'
import logo from '../Assets/SuviLogo.png'

class Register extends Component {
    state = {
        email: '',
        password: ''
      }
      handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister = (e) =>{
      // const {email,password}
      // axios.post('/auth/register', {email,password})
    }


    render() {
        return (
             
        <div className='Loginpage' >
        <div className='logocontaner' >
          <img src={logo} className='logo' />
        </div>
        <div className='facebookbtn'>
          <FbookLogin />
        </div>
        <div className='line' ></div>
        <form onSubmit={this.handleRegister}>
          <input
            label='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            />
          
        
            <input 
            placeholder='Password'
            type="password" 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            />
            <button className='link' >Register</button>
        </form>
      </div>
        )
    }
}

function mapStateToProps(state){
    return state
}
export default withRouter(connect(mapStateToProps, {})(Register))