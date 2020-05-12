import styles from 'styled-components'
import { Link } from 'react-router-dom';

const Card = styles(Link)`
display:flex;
flex:1;
flex-direction:column; 
background :white;
border-radius: 5px;
padding 15px;
color: black;
box-shadow: 0 10px 6px -6px #777;
margin:5px;
min-width:20%;

&:hover{
    text-decoration:none;
    box-shadow: 0px 10px 6px -6px #111;
    }
`


const CardTitle = styles.h5`
    margin-top:10px;
    color: black;
`

const HighLighter = styles.div`
    height: 5px;
    background: #5ad67d;
    width: 35px;
    border-radius: 3px;
`

const CardSubTitle = styles.h6`
    margin-top:10px;
    color: gray;
`

const CardFooter = styles.div`
    display:flex;
    justify-content: space-between;
`

const Metadata = styles.p`
    color: gray
` 

export { Card, CardTitle, CardSubTitle, HighLighter, CardFooter, Metadata};