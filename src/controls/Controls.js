import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button 
        disabled={!closed} 
        onClick={toggleLocked} 
        className="toggle-btn"
        data-testid="toggle-locked"
        >
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button 
        disabled={locked} 
        onClick={toggleClosed} 
        className="toggle-btn"
        data-testid="toggle-close"
      >
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
