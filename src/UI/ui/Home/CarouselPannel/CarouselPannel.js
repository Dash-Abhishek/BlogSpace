import React from 'react';
import styles from 'styled-components'
import Card from './CarouselCards';


const Pannel = styles.div`

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
// background:green;
margin:20px 0px 10px 0px;
`


const CarouselPannel = ({
    blogs
}) => {

    return (

        <Pannel>
            {
                blogs.map((blog, index) => <Card key={blog.id = index}>
                    <img className = "rounded img-fluid" src={blog.img}></img>
                    <h4>{blog.title}</h4>
                    <h5>{blog.subTitle}</h5>
                    <br/>
                    <h6>{blog.author}</h6>
                </Card>)
            }
        </Pannel>
    )

}


export default CarouselPannel;