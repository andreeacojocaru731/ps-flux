import React from 'react';
import AboutPage from './AboutPage';
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import PageNotFound from "./PageNotFound";

function App() {

    return < div className="Container-fluid" >
        <Header />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={PageNotFound} />
        </Switch>
    </div >;
}

export default App;