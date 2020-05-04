import styles from 'styled-components'
import React from 'react';

const JPannel = styles.div`

display: flex;
flex-direction: column;
background: #343a90;
margin-top: 20px;
padding: 50px;
color: white;
border-radius: 5px;
box-shadow: 0 10px 6px -6px #777;
margin:30px 0px 10px 0px;

`
const JumbotronPannel = ({blog}) => {
    return (
        <JPannel>
            
              <h1>
                {blog.title}
                </h1>
                <h3>{blog.subTitle}</h3> 
                <br />
                <h5>{blog.author}</h5>   

        </JPannel>
    )

}

export default JumbotronPannel;