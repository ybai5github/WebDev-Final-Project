import React from 'react';

const Preformatted = ({obj}) => {
    return (
        <pre>
            {JSON.stringify(obj, null, 2)}
        </pre>
    );
};

export default Preformatted;