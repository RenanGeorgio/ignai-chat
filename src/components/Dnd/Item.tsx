import React, { forwardRef, HTMLAttributes, CSSProperties } from "react";

import "./Item.css";

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
  date?: string;
  platform?: string | JSX.Element;
};

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, date, platform, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
      opacity: withOpacity ? '0.5' : '1',
      transformOrigin: '50% 50%',
      height: '140px',
      width: '140px',
      borderRadius: '10px',
      cursor: isDragging ? 'grabbing' : 'grab',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: isDragging
        ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px'
        : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
      transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      flexDirection: 'column',
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyles} {...props}>
        <div className="card-header">{platform}</div>
        <div className="card-footer">
          <time>{date}</time>
          <br />
          <span className="card-id">{id.slice(0, 16)}</span>
        </div>
      </div>
    );
  },
);

// Definir o displayName para evitar o aviso
Item.displayName = 'Item';

export default Item;
