import { useState} from "react"
import React from 'react';
import Router from 'component/Router';
import Layout from "component/Layout";
import {getAuth} from "firebase/auth"
import {app} from "firebaseApp"

function App() {
    const auth = getAuth(app)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser)
    console.log(auth)
    console.log(isAuthenticated)
    return<>
        <Layout>
            <Router isAuthenticated={isAuthenticated}/>
        </Layout>
        </>
}

export default App;
