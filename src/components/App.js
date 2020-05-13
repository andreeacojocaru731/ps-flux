import React from 'react';
import HOmePage from './HomePage';
import AboutPage from './AboutPage';
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";


function App() {
    function getPage() {
        const route = window.location.pathname;
        if (route === "/courses") return <CoursesPage />
        if (route === "/about") return <AboutPage />
        return <HOmePage />
    }
    return < div className="Container-fluid" >
        <Header />
        {getPage()}
    </div >;
}

export default App;