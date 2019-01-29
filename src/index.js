import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './heroes';
import HeroDetail from './hero_detail.js';
import Dashboard from './dashboard.js';

import './app.css';
import './dashboard.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

//import {Router,Route,Link } from 'react-router';
//import { browserHistory } from 'react-router-dom';




class App extends React.Component {
    
    render(){
        const title = "Tour of Heroes";

        return(
            <div className="my-app">
                <h1>{title}</h1>
                <nav>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/heroes">Heroes</a>
                </nav>
            </div>
        );
    }
}


// ========================================


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/heroes" component={Hero}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/heroDetail" component={HeroDetail}/>
        </div>
    </Router>,
    document.getElementById('root')
);

/*
if (module.hot) {
    module.hot.accept('./heroes', () => {
        ReactDOM.render(
            <Hero />,
            document.getElementById('root')
        );
    })
}
*/