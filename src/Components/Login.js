import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'


import {connect} from 'react-redux'
import FbookLogin from './FbookLogin'
// import { updateUser } from '../redux/reducer'
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
  handleLogin = (e) =>{
    // const {email,password}
    // axios.post('/auth/login', {email,password})
  }
  render() {
    // pushes to dashboard if loged on with facebook
    // if(this.props.gotRes == true){
    //   this.props.history.push('/dashboard')
    // } 
    return (
 
        <div className='Loginpage' >
          <div className='logocontaner' >
            <img src={logo} className='logo' />
          </div>
          <div className='facebookbtn'>
            <FbookLogin />
          </div>
          <div className='line' ></div>
          <form onSubmit={this.handleLogin}>
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
              <button className='link' >Login</button>
          </form>
          <div className='linkctn'>
            <h1 className='title'>Don't have an account?</h1>
            <div>
            <Link to='register' 
            ><h1 className='links' >Sign up here!</h1></Link>
            </div>
          </div>
          <div className='forgot'>
            <Link>
            <h1>Forgot Password?</h1>
            </Link>
          </div>
        </div>

    )
  }
}

function mapStateToProps(state){
  return state
}

export default withRouter(connect(mapStateToProps, {})(Login))
