import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

function App() {
    return(
    <Routes>
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/posts' element={<h1>PostList page</h1>}/>
        <Route path='/posts/:id' element={<h1>Post Detail page</h1>}/>
        <Route path='/posts/new' element={<h1>Post new page</h1>}/>
        <Route path='/posts/edit/:id' element={<h1>Post Edit page</h1>}/>
        <Route path='/profile' element={<h1>Profile page</h1>}/>
        <Route path='/profile/edit' element={<h1>Profile Edit page</h1>}/>
        <Route path='/notification' element={<h1>Notification page</h1>}/>
        <Route path='/search' element={<h1>Search page</h1>}/>
        <Route path='/users/login' element={<h1>Login page</h1>}/>
        <Route path='/users/signup' element={<h1>Signup page</h1>}/>
        <Route path='*' element={<Navigate replace to="/"/>}/>
    </Routes>
    )
}

export default App;
