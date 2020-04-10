import React from 'react';
import { Router, Route } from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import JumbotronPannel from '../Home/JumbotronPannel/JumbotronPannel'
import FeaturePannel from '../Home/FeaturePannel/FeaturePannel'


const Canvas = styles.div`

display: flex;
flex:2;
flex-direction: column;
// background: aliceblue;
max-width:1200px;
`


const GlimpsPannel = styled.div`

display:flex;
flex-wrap: wrap;
max-height: 280px;
min-width: 400px;
align-items: center;

justify-content: space-between;
flex-basis: 30%;

`

const TopBlogTile = styled.div`
display:flex;
flex:2;
background: #343a40;
padding: 30px;
margin-right: 5px;
color: white;
border-radius: 10px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
height: 250px;
`

const StatsPannel = styled.div`
display:flex;
flex:1;
background: #343a40;
padding: 30px;
margin-left: 10px;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
flex-direction: column;
height:250px;
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
            
            <FeaturePannel/>
                
            <GlimpsPannel>
                <TopBlogTile>
                {/* <h1>
                    Title of a longer featured blog post
                    </h1> */}

                    
                    
                </TopBlogTile>
                <StatsPannel >
                {/* <h3>Multiple lines of text that form the lede,
                informing new readers quickly and efficiently about
                    </h3> */}
                </StatsPannel>
            </GlimpsPannel>

        </Canvas>

    )

}


export default Home;