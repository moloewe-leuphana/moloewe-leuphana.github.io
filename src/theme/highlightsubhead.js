import React from 'react';

export default function Highlightsubhead({children}) {
  return (
    <span
      style={{
        backgroundColor: "#EADFE3",
        borderRadius: '3px',
        color: 'black',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}
