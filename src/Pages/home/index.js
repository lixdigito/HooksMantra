import React, { useState, useCallback, useEffect} from 'react';
import Row from './Row';
import Save from './Save';
import Context from './Context';
import Modal from '../../Components/Modal';

import './home.css';

export default function Home () {

  const [objectRender, setObjectRender] = useState(<div></div>);
  const [showModal, setShowModal] = useState(true);
  const HeaderCallback = useCallback(() => {
    return <div>{`HeaderCallback`}</div>;
  },[]);

  useEffect(() => {
    console.log('showModal', showModal)
  }, [showModal]);

  const Tab1 = useCallback(() => {
    console.log('Tab 1');
    return (<div>
      <Row id={1} />
      <Row id={2} />
      <Row id={3} />
      <Row id={4} />
      <Row id={5} />
      <Save />
    </div>);
  },[]);

  function handleOpenModas() {
    setShowModal(true);
  }

  const Tab2 = useCallback(() => {
    console.log('Tab 3');
    return (
      <div>
        <div>Tab 2</div>        
      </div>
    );
  },[]);

  const Tab3 = useCallback(() => {
    console.log('Tab 2');
    return <div>Tab 3</div>;
  },[]);
    
  const GridButtonsTab = useCallback(() => {
    return (
    <div className='GridButtonsTab'>
      <button onClick={() => setObjectRender(<Tab1 />)}>Tab1</button>
      <button onClick={() => setObjectRender(<Tab2 />)}>Tab2</button>
      <button onClick={() => setObjectRender(<Tab3 />)}>Tab3</button>
    </div>);
  },[]);

  return (
    <Context.Provider value={{a: []}}>
      <div className='Home'>
        <HeaderCallback />
        <GridButtonsTab />
        {objectRender}
        <div className='gridModal'>
          <Modal
            title='MODAL'
            show={showModal}
            handleClose={setShowModal}
          >
            <div className='gridChildren'>Test</div>
          </Modal>
        </div>        
        <button onClick={handleOpenModas}>open modal</button>
      </div>
    </Context.Provider>    
  );
}