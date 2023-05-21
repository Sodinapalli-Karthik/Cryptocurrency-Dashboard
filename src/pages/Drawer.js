// App.js
import React, { useState } from 'react';
import Drawer from "./DrawerContent";

const DrawerContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Drawer</button>


      {isOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={()=>setIsOpen(!isOpen)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-1/2 bg-black shadow-xl overflow-y-auto">
            <div className="flex px-6 py-4">
             <h1>Expand Spend</h1>
             
            </div>
          </div>
        </>
      ) : null}
      {/* <Drawer isOpen={isOpen} onClose={handleClose}>
        <h1 className="text-xl font-bold">Drawer Content</h1>
        <p className="mt-2"></p>
      </Drawer> */}
    </div>
  );
};

export default DrawerContent;
