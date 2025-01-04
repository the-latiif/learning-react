import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

//JSX
const heading = <h1 className="">Hi this is heading tag</h1>
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

export default app
