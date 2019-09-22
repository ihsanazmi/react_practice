import React from 'react'
import ReactDOM from 'react-dom'
// App adalah komponen induk dari semua komponen yang ada
// Komponen yang dibutuhkan akan berkumpul di App.js
// Di import dari alamat file App berada, ini hanya memungkinkan jika file App sudah melakukan proses export
import App from './components/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)