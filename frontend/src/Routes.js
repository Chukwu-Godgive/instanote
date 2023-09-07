import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {DashBoard} from './pages/DashBoard';
import {LoginPage} from './pages/LoginPage';
import {NotePage} from './pages/NotePage';

export default function Route (){
    return (
        <Route>
            <Switch>
                <Route path= "/">
                    <DashBoard/>
                </Route>
                <Route path= "/LoginPage">
                <LoginPage/>
                </Route>
                <Route path= "/NotePage">
                <NotePage/>

                </Route>
            </Switch>
        </Route>
    )
}