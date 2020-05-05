import styled from 'styled-components';
import React  from 'react';
import ToptTendTile from './TopTrendTile';
import TrendStatsPannel from './TrendStatsPannel';



const Pannel = styled.div`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
// background: blue;
`


const TrendPannel = ({blogs}) =>{


    return(
        <Pannel>

            <ToptTendTile blog={blogs.topViewedBlog}/>
            <TrendStatsPannel blog={blogs.topViewedBlog}/>

        </Pannel>
    );

}

export default TrendPannel;