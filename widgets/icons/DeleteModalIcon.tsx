import React from 'react';

const DeleteModalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="modal-icon"
      width="100"
    >
      <circle cx="12" cy="12" r="10" style={{ color: '#ff3b5f' }}></circle>
      <line x1="15" y1="9" x2="9" y2="15" style={{ color: '#ff3b5f' }}></line>
      <line x1="9" y1="9" x2="15" y2="15" style={{ color: '#ff3b5f' }}></line>
    </svg>
  );
};

export default DeleteModalIcon;
