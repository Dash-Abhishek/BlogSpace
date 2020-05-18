import React, { useEffect } from 'react';
// import { Router, Route } from 'react-router-dom';
import styles from 'styled-components';
import JumbotronPannel from './JumbotronPannel/JumbotronPannel'
import CarouselPannel from './CarouselPannel/CarouselPannel'
import TrendPannel from './TrendPannel/TrendPannel';

import Modal, {
    Header,
    Body,
    Footer
} from '../Popovers/Modal/index';

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
            <Modal onClose={() => {console.log("Close")}} open={ true } >
                <Header title="Sample title" subtitle="Some lkind of subtitle" />
                <Body>
                    <p>
                        This a paragraph inside body
                    </p>
                </Body>
                <Footer buttons={[{
                    text: 'OK',
                    onClick: e => {
                        console.log("Button clicked: ", e);
                    },
                    primary: true,
                    btnType: 'primary'
                }, {
                    text: 'Cancel',
                    onClick: e => {
                        console.log("Cancel Button clicked: ", e);
                    },
                    secondary: true,
                    btnType: 'secondary'
                }]} />
            </Modal>
            <JumbotronPannel blog={landingPageContent.promotionalBlog}/>
            <CarouselPannel blogs={ landingPageContent.trendingBlogs } />
            <TrendPannel blogs={landingPageContent}/>
        </Canvas>

    )

}


export default Home;