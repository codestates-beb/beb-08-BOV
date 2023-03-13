import React from 'react';
import '../style/Attributes.css';

export default function Attributes({traits, collTraits}) {
  //trait 확률계산
  const calRare = (traitType, traitValue) => {
    const traitsObj = collTraits[traitType];
    let traitSum = 0;
    for(const prop in traitsObj) {
      traitSum += traitsObj[prop];
    }
    return Math.round(traitsObj[traitValue.toString().toLowerCase()] / traitSum * 100);
  }

  return (<ul className='trait-wrapper'>
    {traits.map((el, index)=>{
      console.log(el.trait_type, el.value)
      return (
      <li className='trait' key={index}>
        <div className='trait-type'>{el.trait_type}</div>
        <div className='trait-value'>{el.value}</div>
        {!isNaN(calRare(el.trait_type, el.value)) ? <div className='trait-rare'>{calRare(el.trait_type, el.value)}% have this trait</div> : <></>}
      </li>)
    })}
  </ul>);
}