import React from 'react';
import { Router, Route } from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import JumbotronPannel from '../Home/JumbotronPannel/JumbotronPannel'
import CarouselPannel from '../Home/CarouselPannel/CarouselPannel'
import TrendPannel from './TrendPannel/TrendPannel';


const Canvas = styles.div`

display: flex;
flex:2;
flex-wrap: wrap;
flex-direction: column;
// background: aliceblue;
width:85%;
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
                
            <TrendPannel/>
        </Canvas>

    )

}


export default Home;