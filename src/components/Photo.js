import React from 'react';

// Photo component returns image element with url passed down via props.
const Photo = (props) => {
    return (
        <li>
             <img src={props.url} alt="" />
        </li>
    );
}

export default Photo;