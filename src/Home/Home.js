import React from 'react';
import { Router, Route } from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import JumbotronPannel from '../Home/JumbotronPannel/JumbotronPannel'
import CarouselPannel from '../Home/CarouselPannel/CarouselPannel'


const Canvas = styles.div`

display: flex;
flex:2;
flex-wrap: wrap;
flex-direction: column;
// background: aliceblue;
width:80%;
`


const GlimpsPannel = styled.div`

display:flex;
flex-wrap: wrap;
max-height: 280px;
align-items: center;
justify-content: space-between;

`

const TopBlogTile = styled.div`
display:flex;
flex:1;
background: #343a40;
padding: 30px;
margin: 5px;
color: white;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
height: 250px;
min-width:60%;
`

const StatsPannel = styled.div`
display:flex;
flex:1;
background: #343a40;
padding: 30px;
margin:5px;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
height:250px;
min-width:20%;
`


const Home = () => {

    return (
        <Canvas>
            <JumbotronPannel>
                <h1>
                    Title of a longer featured blog post
                </h1>
                <br />
                <h3>Multiple lines of text that form the lede,
                informing new readers quickly and efficiently about
                what's most interesting in this post's contents.
                    </h3>
                    
            </JumbotronPannel>
            
            <CarouselPannel/>
                
            <GlimpsPannel>
                <TopBlogTile>
                </TopBlogTile>
                <StatsPannel />
            </GlimpsPannel>
        </Canvas>

    )

}


export default Home;