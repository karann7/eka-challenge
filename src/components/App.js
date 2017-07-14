import React, { Component } from 'react';
import Nav from 'Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from 'Banner';
import RegisterForm from 'RegisterForm';
import Home from 'Home';

export default class App extends Component {
  render() {
    return (
      <div className={'main'}>
        <BrowserRouter>
				<div>
				<Banner />
				<div className="navcont">
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/register' component={RegisterForm} />
						<Route render={function(){
							return <p>Not Found</p>
						}}/>
					</Switch>
				</div>
				</div>
			</BrowserRouter>
      </div>
    );
  }
}
