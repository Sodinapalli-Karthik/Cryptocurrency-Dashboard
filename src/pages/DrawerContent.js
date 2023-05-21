// Drawer.js
import React from 'react';

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={onClose}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-1/2 bg-black shadow-xl overflow-y-auto">
            <div className="px-6 py-4">{children}
            
            
            
            
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Drawer;
