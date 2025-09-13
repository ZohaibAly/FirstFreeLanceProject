import React from 'react';
import './Loader.css';

export default function Loader({ overlay = false, size = 40 }) {
  return (
    <div className={overlay ? 'loader-overlay' : 'loader-inline'} role="status" aria-label="Loading">
      <div className="loader-spinner" style={{ width: size, height: size }} />
      <span className="sr-only">Loading</span>
    </div>
  );
}
