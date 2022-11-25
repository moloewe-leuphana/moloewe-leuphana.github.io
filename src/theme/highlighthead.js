import React from 'react';

export default function Highlighthead({children}) {
  return (
    <span
      style={{
        backgroundColor: '#760032',
        borderRadius: '3px',
        color: 'white',
        padding: '0.4rem',
      }}>
      {children}
    </span>
  );
}
