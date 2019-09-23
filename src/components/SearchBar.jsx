import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    }

    onSubmitForm = (event) =>{
        // Function yang akan men-cancel halaman dari refresh
        event.preventDefault()

        this.props.asdf(this.state.term)

    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmitForm } className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={(event)=>{this.setState({term: event.target.value})}}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar

// even.target.value berisi string yang diinput / diketik oleh user
// Event handler, bertugas men-handle ketika suatu event terjadi
    //event: onClick, onSubmit, onChange
// onChange memungkinkan kita untuk memanggil function ketika ada perubahan di text input
// onSubmit memungkinkan kita untuk memanggil function ketika kita tap 'enter'