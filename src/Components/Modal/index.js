import React, { useEffect, useState } from 'react';
import './Modal.css';

export default function Modal(props) {
  const { children, title, show, handleClose } = props;
  const [showHideClassName, setShowHideClassName] = useState("modal display-none");

  useEffect(() => {
    console.log('show', show);
    if (show) setShowHideClassName("modal display-block");
    else setShowHideClassName("modal display-none");
  }, [show]);

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className='ModalHeader'>
          <div className='ModalName'>{title}</div>
          <button className='ModalButtonClose' onClick={() => {handleClose(false)}} >
            close
          </button>
        </div>
        <div>
          {children}
        </div>
      </section>
    </div>
  )
}