import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {Link, withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'
import { updateUserFb } from '../redux/reducer'


export class FbookLogin extends Component {
   

    handleFacebookRes = (res) => {
        this.props.updateUserFb(res)
 
    }      

    render() {
        return (
            <div className='fbcontainer'>
               <Link>   
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
                           <h1>Login with Facebook</h1>
                        </div>

                    )}
                />
                </Link>    
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {updateUserFb})(FbookLogin)