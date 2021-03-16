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



const RouterApp = () => {
    console.log('Soy routerApp')
    return (
        <Router basename='/lol'>
            <div style={{ backgroundColor: '#f3f3f34f'}}>

                <Nav 
                logo='https://static.developer.riotgames.com/img/logo.png'
                title='LEAGUE OF LEGENDS'
                />

                <Switch>
                    <Route exact path='/lol' component={ AllChampions }></Route>

                    <Redirect to='/lol' />

                </Switch>

            </div>
        </Router>

    );
}

export default RouterApp
