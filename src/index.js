import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const restEndpoint = "http://localhost:5000/api/users";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  let rows = [];
  let i = 0;
  for(let u of apiResponse) {
    rows.push(<li key={'l'+i}>{ u.id } </li>);
    i++;
  };
  console.log(rows);

  return(
      <div>
          <h1>React App</h1>
          <ul>
            { rows }
          </ul>
      </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <RenderResult/>
);
