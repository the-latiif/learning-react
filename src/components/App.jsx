import React from "react";
import User from "./user";
import Student from "./Student";
import Employee from "./Employee";
import app from "..";

function App() {
    const userName ="Raza";
    const student ="Aman";
    const chuser ="Saif";

    const employee = {
        name: "Raza",
        city: "Bokaro",
        mobile: "876665522"
    };

    return (
        <div className="">
            <h1>hii...</h1>
            <p>i am para</p>
            <User user={userName} />
            <Student student={student}/>
            <Employee data={employee}/>
        </div>
    )
}
export default App;