import React from 'react'
import styled from 'styled-components'


const PannelLayout = styled.div`

    display:flex
    flex-direction: column;
    
`

const MailInputFiled = styled.input.attrs({
    type: "email",
    placeholder: "blabla@gmail.com"
})`
    border-radius: 5px;
    width:50%

`




const SubscriptionForm = () => {

    return (
        <PannelLayout>
            <h3>Please provide your mailID </h3>
            <MailInputFiled></MailInputFiled>
            <div className="btn btn-primary">Submit</div>

        </PannelLayout>

    )


}

export default SubscriptionForm;
