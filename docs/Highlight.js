import React from 'react';

export function Tech({children}) {
  return (
    <span
      style={{
        fontWeight: "bold",
        backgroundColor: "MediumTurquoise",
        borderRadius: '2px',
        color: '#fff',
        padding: '0.1rem',
      }}>
      {children}
    </span>
  );
}

export function Technical({children}) {
  return (
    <div
      style={{
        "font-size": '30px',
        fontWeight: "bold",
        backgroundColor: "MediumTurquoise",
        borderRadius: '2px',
        color: '#fff',
        "border-style": "solid",
        "border-color": "black",
        "border-width": "2.5px",
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>

  );
}

export function MGMT({children}) {
  return (
    <span
      style={{
        fontWeight: "bold",
        backgroundColor: 'rgba(118, 0, 50, 255)',
        borderRadius: '2px',
        color: '#fff',
        padding: '0.1rem',
      }}>
      {children}
    </span>
  );
}

export function Management({children}) {
  return (
    <div
      style={{
        "font-size": '30px',
        fontWeight: "bold",
        backgroundColor: 'rgba(118, 0, 50, 255)',
        borderRadius: '2px',
        color: '#fff',
        "border-style": "solid",
        "border-color": "black",
        "border-width": "2.5px",
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>
  );
}

export default {Tech, Technical, MGMT, Management};