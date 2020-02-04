import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import {MuiThemeProvider, TextField} from '@material-ui/core'

import {connect} from 'react-redux'
import FbookLogin from './FbookLogin'
import { updateUser } from '../redux/reducer'
import logo from '../Assets/SuviLogo.png'


class Login extends Component {
    state = {
      email: '',
      password: ''
    }
    handleChange = (e) =>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className='Loginpage' >
          <div className='logocontaner' >
            <img src={logo} className='logo' />
          </div>
          <div className='facebookbtn'>
            <FbookLogin />
          </div>
          <div className='line' ></div>
                  <form>
          <input
            label='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            />
          
        
            <TextField 
            placeholder='Password'
            type="password" 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            />
            <button className='link' >Login</button>
          </form>
        </div>

      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default withRouter(connect(mapStateToProps, {updateUser})(Login))
