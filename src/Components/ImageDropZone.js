import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import randomstring from 'randomstring'
import {GridLoader} from 'react-spinners'
import {MuiThemeProvider,TextField} from '@material-ui/core'


class ImageDropZone extends Component {
    state = {
        isUploading: false,
        image: ''
    }
    getSignedRequest = ([file]) => {
        this.setState({isUploading: true})
        
        const fileName = `${randomstring.generate()}-${file.name.replace(/\s/g, '-')}`
       
        axios.get('/s3/sign', {
            params: {
            'file-name': fileName,
            'file-type': file.type
            }
        }).then( (res) => {
            const { signedRequest, url } = res.data 
    
            this.uploadFile(file, signedRequest, url)
        }).catch( err => {
            console.log(err)
        })
        }
    
        uploadFile = ( file, signedRequest, url) => {
            const header = {
                headers: {
                    'Content-Type': file.type,
                    },
                };
            axios.put(signedRequest, file, header)
            .then((res) => {
                this.setState({
                    logo: url,
                    isUploading: false
                })
                
            })
        }

    render() {
        return (
            <MuiThemeProvider>
            <div className='uploadimage'>
            <Dropzone
            onDropAccepted={this.getSignedRequest}
            accept="image/*"
            multiple={false}>
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {this.state.isUploading ? 
                    <GridLoader
                    size={35}
                    color={'#34D1BF'} /> : this.state.image ? 
                    <div className='logoUploaded'>
                        <img src={this.state.image} />
                    </div> :
                    <div className='iconDiv'>
                      {/* <FontAwesomeIcon 
                      icon={faImage}
                      size='6x'
                    color='#34d1bf'/> */}
                    <p>ADD PHOTO</p>
                    </div> }
                </div>
            )}
             </Dropzone>
             <TextField  
                            type="text"
                            name='firstname'
                          
                            floatingLabelText='Firstname'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.firstname}
                            onChange={this.handleChange}/>
             </div>
             </MuiThemeProvider>

        )
    }
}
export default ImageDropZone