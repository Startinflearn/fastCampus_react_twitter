
import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "pages/home";
import PostListPage from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import Notification from "pages/notification";
import Search from 'pages/search';
import Login from "pages/users/login";
import Signup from "pages/users/signup";

interface RouterProps {
    isAuthenticated: boolean
}

const Router = ({isAuthenticated}: RouterProps) => {
    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/posts' element={<PostListPage/>}/>
                    <Route path='/posts/:id' element={<PostDetail/>}/>
                    <Route path='/posts/new' element={<PostNew/>}/>
                    <Route path='/posts/edit/:id' element={<PostEdit/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profile/edit' element={<ProfileEdit/>}/>
                    <Route path='/notification' element={<Notification/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='*' element={<Navigate replace to="/"/>}/>
                </>
            ) : (
                <>
                    <Route path='/users/login' element={<Login/>}/>
                    <Route path='/users/signup' element={<Signup/>}/>
                    <Route path='*' element={<Navigate replace to="/users/login"/>}/>
                </>
            )}
        </Routes>
    );
};

export default Router;