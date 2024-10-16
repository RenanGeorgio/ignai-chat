import React, { FC } from 'react';

type GridProps = {
    columns: number;
    children: React.ReactNode; 
};

const Grid: FC<GridProps> = ({ children, columns }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridGap: 10,
                maxWidth: '500px',
                margin: '10px auto',
                overflowY: 'auto',
                padding: 10,
            }}
        >
            {children}
        </div>
    );
};

export default Grid;
