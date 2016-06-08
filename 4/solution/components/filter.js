import React from 'react';

const filters = [
    {
        value: 'all',
        name: 'All',
    },
    {
        value: 'pending',
        name: 'Pending',
    },
    {
        value: 'done',
        name: 'Done',
    },
];

const containerStyle = {
    display: 'flex',
    height: 40,
    flexShrink: 0,
};

const filterStyle = {
    flex: 1,
};

const currentFilterStyle = {
    ...filterStyle,
    fontWeight: 'bold',
};

const Filter = ({filterValue, onSelectFilter}) => (
    <div style={containerStyle}>
        {filters.map(({value, name}) => (
            <button
                key={`filter-${value}`}
                onClick={() => onSelectFilter(value)}
                style={filterValue === value ? currentFilterStyle : filterStyle}
            >
                {name}
            </button>
        ))}
    </div>
);

export default Filter;
