import styled from 'styled-components';
import React  from 'react';

const Pannel = styled.div`
display:flex;
flex:1;
background: #343a40;
padding: 30px;
margin:5px;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
color: white;
min-width:20%;
`


const TrendStatsPannel = ({blog = {}}) =>{

    return (

        <Pannel>
            <h2>Trend stats</h2>
            <h3>{blog.title}</h3>
            <h3>{blog.title}</h3>
           

        </Pannel>
    )

}

export default TrendStatsPannel;
