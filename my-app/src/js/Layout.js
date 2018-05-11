import React from 'react';
import {Redirect, Route, Switch} from "react-router";
// import {Redirect, Route, Switch} from "react-router-dom";
import {About, Contact, Header, Home, Skills} from '../js/components';

const prefix = "/react-portfolio";
// const prefix = "";

//todo browserHistory
let Layout = () => (
	<div>
		<Header/>
		<Redirect from={""} to={prefix + ""}/>
		<Route path={prefix}>
			<Switch>
				<Redirect from={prefix + "/index.html"} to={prefix + "/"}/>
				<Route exact path={prefix + "/"} component={Home}/>
				<Route exact path={prefix + "/about"} component={About}/>
				<Route exact path={prefix + "/skills"} component={Skills}/>
				{/*<Route exact path={prefix + "/works"} component={Works}/>*/}
				<Route exact path={prefix + "/contact"} component={Contact}/>
			</Switch>
		</Route>
	</div>
);

export default Layout;