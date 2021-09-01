import React, { Component } from "react";
import { Button } from 'reactstrap';

class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            dogUrl: "https://dog.ceo/api/breeds/image/random",
            dogImage: ""
        }
        this.fetchImage = this.fetchImage.bind(this)
    }

    componentDidMount() {
        this.fetchImage();
    }

    async fetchImage() {
        try {
            let res = await fetch(this.state.dogUrl);
            let json = await res.json();
    
            this.setState({
                dogImage: json.message
            })
        } catch (err) {
            console.log(err);
        }
    }

    render(){
        return(
            <div>
                <Button id="button" onClick={this.fetchImage}>I want another dog!</Button>
                <br />
                <br />
                <img src={this.state.dogImage} style={{width:'25em', paddingBottom:'1em'}} />
            </div>
        )
    }
}

export default DogIndex;