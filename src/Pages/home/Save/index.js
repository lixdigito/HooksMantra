import React, {useContext, useCallback} from 'react';
import Context from '../Context';

export default function Save() {
  const contextValue = useContext(Context); 
  
  const handleSave = useCallback(() => {
    console.log('salvar:', contextValue);
    // const list = [ ...contextValue]; 
    // console.log('list', list);
    // list.map(item => console.log('item',item));
  },[contextValue]);

  return <button onClick={() => handleSave()}>Salvar</button>
}