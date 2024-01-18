import React from "react";
import {useSelector} from 'react-redux';

const NotFound = () => {
    const conferences = useSelector((state) => state.confereces);
    return (
        <div>
            <h1>Page not found.</h1>
        </div>
    )
};

export {NotFound};