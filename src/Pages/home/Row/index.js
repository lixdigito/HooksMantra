import React, {useState, useContext, useEffect, useCallback} from 'react';
import Context from '../Context';
import './Row.css';

export default function Row(props) {
  const { id} = props;
  const [countClicks, setCountClicks] = useState(0);
  const [inputTxt, setInputTxt] = useState('');
  const [inputName, setInputName] = useState('');
  const contextValue = useContext(Context);

  const handleAddListContext = useCallback((id, list) => {
    return list.filter(item => item.id !== id);
  },[]);

  const objectToSave = useCallback(() => {
    const row = {
      id,
      countClicks,
      inputTxt,
      inputName
    }
    console.log(row);
    contextValue[id] = row;
    const {a} = contextValue;
    const listFiltred = handleAddListContext(id, a);
    contextValue.a = [...listFiltred, row];
  },[id,countClicks,inputTxt,inputName, contextValue, handleAddListContext ]);

  // useEffect(() => {
  //   objectToSave();
  // },[countClicks, objectToSave]);

  const handleOnBlur = useCallback(() => {
    objectToSave();
  },[objectToSave]);

  return <div className='RowContainer'>
    <button onClick={() => setCountClicks(countClicks + 1)}>{`${countClicks} Clicks`}</button>
    <input 
      value={inputTxt}
      onChange={event => setInputTxt(event.target.value)}
      onBlur={handleOnBlur}
    />
    <input
      value={inputName}
      onChange={event => setInputName(event.target.value)}
      onBlur={handleOnBlur}
    />
  </div>
}