import React, { useState } from 'react';

function Button(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  const customStyleFocus = {
    backgroundColor: props.color,
    borderRadius: '30px',
    width: props.size,
    color: '#ff4c60',
    border: '1px solid #ff4c60',
  };
  const customStyleFocusBtn = {
    backgroundColor: props.color,
    borderRadius: '30px',
    width: props.size,
    color: '#ffff',
    border: '1px solid #ff4c60',
  };
  const customStyle = {
    backgroundColor: '#ff4c60',
    borderRadius: '30px',
    width: props.size,
    color: 'white',
  };

  return props.download === 'resume' ? (
    <a
      href='/resume12nkjhkjads.pdf'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className='btn shadow-none btn-md mb-3 no-wrap'
      style={isMouseOver ? customStyleFocus : customStyle}
      type='button'
      download
    >
      {props.name}
    </a>
  ) : (
    <button
      onClick={props.submitfunc}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className='btn shadow-none btn-md mb-3 no-wrap'
      style={isMouseOver ? customStyleFocusBtn : customStyle}
      type='button'
    >
      {props.name}
    </button>
  );
}

export default Button;
