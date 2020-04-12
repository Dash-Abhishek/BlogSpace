import styled from 'styled-components';
import React  from 'react';
import ToptTendTile from '../TrendPannel/TopTrendTile';
import TrendStatsPannel from './TrendStatsPannel';



const Pannel = styled.div`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
// background: blue;
`


const TrendPannel = () =>{


    return(
        <Pannel>

            <ToptTendTile></ToptTendTile>
            <TrendStatsPannel></TrendStatsPannel>

        </Pannel>
    );

}

export default TrendPannel;