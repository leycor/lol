import React, { Fragment } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Molecules
import Nav from '../molecules/Nav';
import AllChampions from '../pages/AllChampions';



const RouterApp = () => {
    return (
        <Router basename='lol'>
            <Fragment>

                <Nav 
                logo='https://static.developer.riotgames.com/img/logo.png'
                title='LEAGUE OF LEGENDS'
                />

                <Switch>
                    <Route exact path='/' component={ AllChampions }></Route>

                    <Redirect to='/' />

                </Switch>

            </Fragment>
        </Router>

    );
}

export default RouterApp
