import styles from 'styled-components'
import React from 'react';
import { HighLighter} from '../CarouselPannel/CarouselCards';
import { Link } from 'react-router-dom';

const JPannel = styles(Link)`
display: flex;
background: #343a90;
margin-top: 20px;
color: white;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
margin:30px 0px 10px 0px;

&:hover{
    text-decoration:none;
    color:white;
    box-shadow: 0px 10px 6px -6px #111;
    }

`
const BlogTextSection = styles.div`

display:flex;
flex-direction:column;

padding :50px;

`

const ImageSection = styles.div`
display:flex;
background: white;
flex-basis:70%
bacbackground-size: cover;
`


const JumbotronPannel = ({blog}) => {
    return (
        <JPannel>
              <BlogTextSection>
              <h1>
                {blog.title}
                </h1>
                <HighLighter/>
                <br/>
                <h3>{blog.subTitle}</h3> 
                
                {/* <br />
                <h5>{blog.author}</h5>    */}
            </BlogTextSection>
            <ImageSection>
                <img className = "rounded img-fluid" src ="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"></img>
            </ImageSection>
        </JPannel>
    )

}

export default JumbotronPannel;