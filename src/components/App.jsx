import React, { Component } from 'react'
import axios from'axios'
import Search from './SearchBar'

class App extends Component {
    
    state ={
        pictures: ''
    }
    
    // Term adalah inputan dari user di komponen Search Bar
    onSearchSubmit = (term) =>{
        // Request gambar ke unsplash
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID 8355bd8a904b7652760bb639aafee9ab41f40e782c4cbe7cd89777e404129c19'
                },
                params: {
                    query: term
                }
            }
        ).then((res)=>{
            // then akan di jalankan ketika proses request berhasil
            // console.log(res.data.results)
            this.setState({pictures: res.data.results})
        })
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center mt-3 mb-5'>Image Search Engine</h1>
                {/* 'asdf'  */}
                <Search asdf={this.onSearchSubmit}/>
            </div>
        )
    }
}

//Agar bisa di gunakan di file lain, maka kita harus export
export default App
