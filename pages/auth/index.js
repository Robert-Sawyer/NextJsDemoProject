import React from 'react';
import User from '../../components/User';


const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page of {props.appName}</h1>
        <User name="Sawyer" age={28}/>
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App'});
        }, 2000);
    });
    return promise;
};

export default authIndexPage;