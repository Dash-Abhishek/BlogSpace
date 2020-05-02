import React, { useEffect } from 'react';
// import { Router, Route } from 'react-router-dom';
import styles from 'styled-components';
import JumbotronPannel from './JumbotronPannel/JumbotronPannel'
import CarouselPannel from './CarouselPannel/CarouselPannel'
import TrendPannel from './TrendPannel/TrendPannel';


const Canvas = styles.div`
    display: flex;
    flex:2;
    flex-wrap: wrap;
    flex-direction: column;
    // background: aliceblue;
    width:85%;
    margin-left: auto;
    margin-right: auto;
`;

const Home = ({
    getTrendingBlogs,
    trendingBlogs
}) => {

    useEffect(() => {
        if(!trendingBlogs || (trendingBlogs.length === 0)) {
            getTrendingBlogs(); 
        }
    }, []);

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
            <CarouselPannel blogs={ trendingBlogs } />
            <TrendPannel/>
        </Canvas>

    )

}


export default Home;