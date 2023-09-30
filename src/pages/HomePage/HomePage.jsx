import React from "react";

//Assets
import "./HomePage.css";

// Components
import Landing from "./parts/Landing";
import CardsContainer from "./parts/CardsContainer";

const HomePage = () => {
    return (
        <>
            <Landing />
            <CardsContainer />
        </>
    );
};

export default HomePage;
