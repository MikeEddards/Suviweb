import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import randomstring from 'randomstring'
import {GridLoader} from 'react-spinners'
import {connect} from 'react-redux'




class ImageDropZone extends Component {
    state = {
        isUploading: false,
        image: '',
        name: ''
    }
    getSignedRequest = ([file]) => {
        this.setState({isUploading: true})
        
        const fileName = `${randomstring.generate()}-${file.name.replace(/\s/g, '-')}`
        console.log(fileName)
        axios.get('/sign-s3', {
            params: {
            'file-name': fileName,
            'file-type': file.type
            }
        }).then( (res) => {
            console.log(res.data)
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
                console.log(res.data)
                this.setState({
                    image: url,
                    isUploading: false
                })
                
            })
        }
    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }


    render() {

        return (
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
                    color={'#ffffff'} /> : this.state.image ? 
                    <div className='imageDiv'>
                        <img src={this.state.image} />
                    </div> :
                    <div className='iconDiv'>
                    <p>ADD PHOTO</p>
                    </div> }
                </div>
            )}
             </Dropzone>
             <input
                    className='input'
                    placeholder='Type your name...'
                    label='Name'
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}/>
             </div>
           

        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {})(ImageDropZone)