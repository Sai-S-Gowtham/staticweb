import { Component } from "react";
import "../navbar/navbar.css";

class Navbar extends Component{
    render(){
        return(
        <div className="navcontainer">
            <button className="homebtn">Home</button>
            <button className="aboutbtn">About</button>
            <button className="contactbtn">Contact</button>
            <button className="enquirybtn">Enquiry Form</button>
        </div>
        )

    }
}

export default Navbar;