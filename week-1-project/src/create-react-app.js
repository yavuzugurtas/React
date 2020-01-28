import React from 'react';

const optionalChaining = (object) => {
    return object?.bar?.buzz;
};

export { optionalChaining };