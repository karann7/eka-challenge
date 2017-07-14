import React, { Component } from 'react';
import Nav from 'Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from 'Banner';

export default class App extends Component {
  render() {
    return (
      <div className={'main'}>
				<Banner />
        <BrowserRouter>
				<div className="navcont">
					<Nav />
					{/* <Switch>
						<Route exact path='/' component={App} />
						<Route exact path='/battle' component={Battle} />
						<Route exact path='/popular' component={Popular} />
						<Route path='/battle/results' component={Results} />
						<Route render={function(){
							return <p>Not Found</p>
						}}/>
					</Switch> */}
				</div>
			</BrowserRouter>
      </div>
    );
  }
}
