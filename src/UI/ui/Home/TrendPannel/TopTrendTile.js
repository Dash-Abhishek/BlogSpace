import styled from 'styled-components';
import React  from 'react';

const Tile = styled.div`
display:flex;
flex:1;
background: #343a40;
padding: 30px;
margin: 5px;
color: white;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
min-width:60%;
`


const ToptTendTile = ({blog})=>{


    return(
            <Tile>

                <h3>{blog.title}</h3>
                <h4>{blog.subTitle}</h4>
                <br/>
                <h5>{blog.author}</h5>    

            </Tile>

    )

}



export default ToptTendTile;