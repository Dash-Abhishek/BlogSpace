import React from 'react';
import styles from 'styled-components'
import {Card, CardTitle, CardSubTitle, HighLighter, Metadata, CardFooter} from './CarouselCards';


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
                    <CardTitle>{blog.title}</CardTitle>
                    <HighLighter/>
                    <CardSubTitle>{blog.subTitle}</CardSubTitle>
                    <br/>
                    
                    <CardFooter>
                    <Metadata>By {blog.author}</Metadata>
                        <Metadata>6</Metadata>
                    </CardFooter>
                </Card>)
            }
        </Pannel>
    )

}


export default CarouselPannel;