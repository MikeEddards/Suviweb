import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'



export class FbookLogin extends Component {
   
    
    
    handleFacebookRes = (res) => {
        console.log(res)
    }      

    render() {
    
    
        return (
            <div>
                      
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
            </div>
        )
    }
}
export default FbookLogin