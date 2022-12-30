import React from 'react';

export function Highlight({children}) {
  return (
    <div
      style={{
        color: 'white',
        "text-indent": "5px",
        backgroundColor: "rgba(118, 0, 50, 255)",
        opacity: 0.85,
        borderRadius: '2px',
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>
  );
}

export function Started({children}) {
  return (
    <div
      style={{
        color: 'white',
        "text-indent": "5px",
        backgroundColor: "grey",
        opacity: 0.85,
        borderRadius: '2px',
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>
  );
}

/*

export function Technical({children}) {
  return (
    <div
      style={{
        color: '#fff',
        fontWeight: "bold",
        "font-size": '30px',
        "text-indent": "5px",
        backgroundColor: "MediumTurquoise",
        borderRadius: '2px',
        "border-style": "solid",
        "border-color": "grey",
        "border-width": "2px",
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>

  );
}

export function Management({children}) {
  return (
    <div
      style={{
        color: 'white',
        fontWeight: "bold",
        "font-size": '30px',
        "text-indent": "5px",
        backgroundColor: "rgba(118, 0, 50, 255)",
        borderRadius: '2px',
        "border-style": "solid",
        "border-color": "grey",
        "border-width": "2px",
        "margin-bottom": "-40px"
      }}>
      {children}
    </div>
  );
}

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

export default {Tech, Technical, MGMT, Management};
*/

export default {Highlight, Started};