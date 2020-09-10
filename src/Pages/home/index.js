import React, { useState, useCallback} from 'react';
import Row from './Row';
import Save from './Save';
import Context from './Context';

import './home.css';

export default function Home () {

  const [objectRender, setObjectRender] = useState(<div></div>);
  const HeaderCallback = useCallback(() => {
    return <div>{`HeaderCallback`}</div>;
  },[]);


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

  const Tab2 = useCallback(() => {
    console.log('Tab 3');
    return <div>Tab 2</div>;
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
      </div>
    </Context.Provider>    
  );
}