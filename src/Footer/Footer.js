
import React from 'react'
import styles from 'styled-components';


const Footer = () => {


    const FooterBar = styles.div`
    display:flex;
    flex:1;
    width:100%;
    background: black;
    border-radius:5px;
    min-height:30vh;
    `

    const Section1 = styles.div`
    display:flex;
    flex:1;
    margin: 10px;
    // background: aliceblue;
    color:white;
    `
    const Section2 = styles.div`
    display:flex;
    flex:2;
    margin: 10px;
    // background: aliceblue;
    color:white;
    ` 

    const Devider = styles.div`
    background: gold;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 3px;

    `


    return (

       
        <FooterBar>
            <Section1>Footer section1</Section1>
            <Devider/>
            <Section2>Footer section2</Section2>
        </FooterBar>

    )

}


export default Footer;