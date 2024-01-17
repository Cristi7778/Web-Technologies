import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setConferences } from "../reducers/conferences-reducer.js";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToConferences = () => {
        navigate('/conferences');
    }

    useEffect(() => {
        axios.get("http://localhost:3000/conferences")
            .then(res => res.data)
            .then(data => dispatch(setConferences(data.records)));
    }, [])

    return (
        <div>
            <h1>Explore Conferences</h1>
            <button className="custom-button" onClick={navigateToConferences}>Start now</button>
            <button className="custom-button" onClick={() => navigate("/series")}>Series here</button>
        </div>
    )
};

export { Home };