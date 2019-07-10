import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> <h4>I am {props.name} and my age is {props.age}</h4> </p>
            <p> <h5>{props.children}</h5> </p>
        </div>
    )
};

export default person;