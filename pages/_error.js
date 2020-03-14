import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>WRONG</h1>
        <p>Try <Link href='/'><a>Go back</a></Link>.</p>
    </div>
);

export default errorPage;
