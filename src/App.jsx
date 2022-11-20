import React, { useState, useEffect } from 'react';

const App = () => {

    const api = "http://localhost:5000/api/users";

    const apiCall = async () => {
        const res = await fetch(api);
        console.log("res:", res);
        const jsonRes = await res.json();
        console.log(jsonRes);
        return JSON.stringify(jsonRes);
    }

    const RenderResult = () => {
        const [ apiRes, setApiRes ] = useState("Loading ...");

        useEffect(() => {
            apiCall().then (
                result => setApiRes(result)
            )
        }, []);
        return (
            <div>
                <h3>React app</h3>
                <p>{ apiRes }</p>
            </div>
        );
    }

}

export default App;