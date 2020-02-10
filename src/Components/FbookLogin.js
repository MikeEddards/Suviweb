import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {Link, withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateUserFb } from '../redux/reducer'
import axios from 'axios'


export class FbookLogin extends Component {
   state = {
       email: '',
       isRegistered: ''
   }

    handleFacebookRes = (fbres) => {
        this.setState({
            email: fbres.email
        })
        axios.post('/auth/fbregistered', {
            email: this.state.email
        }).then(res => {
            console.log(res.data)
            this.setState({
                isRegistered: res.data
            })
        }).then(_ => {
            if(this.setState.isRegistered){
                this.props.updateUserFb(fbres)
            }else{
                alert('Not registered')
            }
        })
 
    }      

    render() {
        console.log(this.props)
        return (
        <Link>   
            <div className='fbcontainer'>
                <FacebookLogin 
                    appId={process.env.REACT_APP_FACEBOOK_ID}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.handleFacebookRes}
                    onClick={this.handleError}
                    scope="public_profile,user_friends"
                    render={renderProps => (
                        
                        <div onClick={renderProps.onClick}
                        className='Fbook'
                        >
                       <FontAwesomeIcon
                           className='icon'  
                           icon={faFacebookF}
                           color={'#ffffff'}
                           size='1x'
                           />
                           {this.props.history.location.pathname == '/register'? <h1>Register with Facebook</h1> : <h1>Login with Facebook</h1> }
                           
                        </div>

                    )}
                />
            </div>
        </Link>    
        )
    }
}
function mapStateToProps(state){
    return state
}
export default withRouter(connect(mapStateToProps, {updateUserFb})(FbookLogin))