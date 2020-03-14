import React from 'react';

const user = (props) => (
    <div>
        <p>{props.name}</p>
        <p>Age: {props.age}</p>
        
        {/*Tak tworzy się ostylowanie w next.js*/}
        <style jsx>{`
        div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
        `}</style>
    </div>
);

export default user;