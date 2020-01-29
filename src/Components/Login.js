import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
// import TextField from 'material-ui/TextField'

export default class Login extends Component {

    state = {
      isLoggedIn: '',
      userID: '',
      name: '',
      email: '',
      picture: '',
      id: ''
}
componentDidMount(){
  axios.get('/fblogin').then(res => {
    this.setState({
      id: res.data,
      picture: ''
    })
  })
}
    
      responseFacebook = response => {
        console.log(response);
    
        this.setState({
          isLoggedIn: true,
          userID: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url
        });
      };
    
      componentClicked = () => console.log("clicked");
    
      render() {
        let fbContent;
    
        if (this.state.isLoggedIn) {
          fbContent = (
            <div
              style={{
                width: "400px",
                margin: "auto",
                background: "#f4f4f4",
                padding: "20px",
                borderRadius: '16px'
              }}
            >
              <img src={this.state.picture} alt={this.state.name} />
              <h2>Welcome {this.state.name}</h2>
              Email: {this.state.email}
            </div>
          );
        } else if(this.state.id) {
          fbContent = (
            <FacebookLogin
              appId={this.state.id}
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
              // cssClass="my-facebook-button-class"
              icon="fa-facebook"
            />
          );
        }
    
        return <div>{fbContent}</div>;
      }
    }
 
    





 
