import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>{event.preventDefault()}} className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={(event)=>{console.log(event.target.value)}}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar

// Event handler, bertugas men-handle ketika suatu event terjadi
    //event: onClick, onSubmit, onChange
// onChange memungkinkan kita untuk memanggil function ketika ada perubahan di text input
// onSubmit memungkinkan kita untuk memanggil function ketika kita tap 'enter'