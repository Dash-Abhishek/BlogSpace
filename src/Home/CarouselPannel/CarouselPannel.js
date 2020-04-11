import React from 'react';
import styles from 'styled-components'
import Card from './CarouselCards';


const Pannel = styles.div`

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`


const CarouselPannel = () => {

    return (

        <Pannel>
            <Card>
                <h4>Blog 1</h4>
                <br />
                <h5>subtitle</h5>
            </Card>
            <Card>
                <h4>Blog 2</h4>
                <br />
                <h5>subtitle</h5>
            </Card>
            <Card>
                <h4>Blog 3</h4>
                <br />
                <h5>subtitle</h5>
            </Card>

        </Pannel>
    )

}


export default CarouselPannel;