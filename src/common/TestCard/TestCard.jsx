
import React from 'react';
import './TestCard.scss';

export const TestCard = ({ test }) => {

  return (
    <div className='testCardDesign'>
      <div className='textCardDesign'>{test.model !== '' ? test.model : "Test no encontrado"}</div>
      <div><img className='posterDesign' src={`${test.image}`} /></div>  
    </div>
  )
}