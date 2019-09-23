import React, { Component } from 'react'
import Search from './SearchBar'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                <Search/>
            </div>
        )
    }
}

//Agar bisa di gunakan di file lain, maka kita harus export
export default App
