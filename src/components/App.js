import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from './AboutPage';
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from './HomePage';
import PageNotFound from "./PageNotFound";

function App() {

    return < div className="Container-fluid" >
        <Header />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about" component={AboutPage} />
            <Redirect from="/about-page" to="/about" />
            <Route component={PageNotFound} />
        </Switch>
    </div >;
}

export default App;