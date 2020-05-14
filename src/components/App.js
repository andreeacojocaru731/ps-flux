import React from 'react';
import AboutPage from './AboutPage';
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";
import HomePage from './HomePage';

function App() {

    return < div className="Container-fluid" >
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
    </div >;
}

export default App;