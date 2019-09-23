import React, { Component } from 'react'

class ImageResults extends Component {
    
    imageList = ()=>{
        let hasil = this.props.abc.map((item) => {
            return(
                <img 
                    className="card" 
                    src={item.urls.regular}
                    key={item.id}
                    alt={item.alt_description}
                />
            ) 
        })
        return hasil
    }
    
    render() {
        return (
            <div>
                <h1>Result</h1>
                {this.imageList()}
            </div>
        )
    }
}

export default ImageResults
