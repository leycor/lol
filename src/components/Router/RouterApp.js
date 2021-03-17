import React  from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Molecules
import Nav from '../molecules/Nav';
import AllChampions from '../pages/AllChampions';
import Champion from '../pages/Champion';



const RouterApp = () => {
    return (
        <Router basename='lol'>
            <div style={{ backgroundColor: '#f3f3f34f'}}>

                <Nav 
                logo='https://static.developer.riotgames.com/img/logo.png'
                title='LEAGUE OF LEGENDS'
                />

                <Switch>
                    <Route exact path='/' component={ AllChampions }></Route>
                    <Route exact path='/:champion' component={ Champion }></Route>

                    <Redirect to='/' />

                </Switch>

            </div>
        </Router>

    );
}

export default RouterApp
