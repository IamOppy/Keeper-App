import React from "react"

const currentYear = new Date()

function Footer(){
    return (
    <footer>
            <p>copyright {currentYear.getFullYear()} </p>
    </footer>)
}

export default Footer;