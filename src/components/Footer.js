import React from "react";

const Footer=()=>{
    let footerDesign ={
        position:"relative",
        top:"87vh",
        width:"100%",

    }
    return(
        <div className="bg-dark text-light py-3" style={footerDesign}>
            <p className="text-center">Copyright &copy; Todo'sList.com</p>
        </div>
    );
}

export default Footer;