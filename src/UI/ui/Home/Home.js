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
    margin-top: 40px;
`;

const Home = ({
    getlandingPageContent,
    landingPageContent
}) => {

    useEffect(() => {

        if(landingPageContent.trendingBlogs.length === 0)
            getlandingPageContent(); 
        
    }, []);

    return (
        <Canvas>
            <JumbotronPannel blog={landingPageContent.promotionalBlog}/>
            <CarouselPannel blogs={ landingPageContent.trendingBlogs } />
            <TrendPannel blogs={landingPageContent}/>
        </Canvas>

    )

}


export default Home;