import React from 'react';
import styles from 'styled-components'
import Card from './CarouselCards';


const Pannel = styles.div`

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
// background:green;
`


const CarouselPannel = ({
    blogs
}) => {

    return (

        <Pannel>
            {
                blogs.map(b => <Card key={ b.id }>
                        <h4>{ b.title }</h4>
                        
                        <h5>{ b.subTitle }</h5>
                    </Card>)
            }
        </Pannel>
    )

}


export default CarouselPannel;