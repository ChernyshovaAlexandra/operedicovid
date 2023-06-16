import React from "react";


const Inner = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default Inner;