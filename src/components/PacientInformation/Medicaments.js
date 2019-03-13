import React from 'react';

const Medicaments = ({ medicaments }) => {
    return medicaments.map(
        (value) => <p className={'PinkUnderline'} key={value}>{value}</p>
    );
};

export default Medicaments;
