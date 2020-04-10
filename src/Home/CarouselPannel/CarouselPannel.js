import React from 'react';
import styles from 'styled-components'
import FeaturedTile from './FeaturedTile';


const Pannel = styles.div`

display: flex;
flex-wrap: wrap;
height: 300px;
min-width: 400px;
align-items: center;
justify-content: space-between;
`


const FeaturePannel = () =>{



    return(

        <Pannel>
            <FeaturedTile>
                    <h4>Blog 1</h4>
                    <br />
                    <h5>subtitle</h5>
                </FeaturedTile>
                <FeaturedTile>
                    <h4>Blog 2</h4>
                    <br />
                    <h5>subtitle</h5>
                </FeaturedTile>
                <FeaturedTile>
                    <h4>Blog 3</h4>
                    <br />
                    <h5>subtitle</h5>
                </FeaturedTile>

        </Pannel>
    )

}


export default FeaturePannel;