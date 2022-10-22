import './item-details.css'

import React from "react";

const ItemDetails = ({getInfoItem, getImageId, recordInfo }) => {
  return (
    <div className='personDetails'>
      <div className='personDetails-block'>
        <div className='personDetails-img'>
          <img
            src={getImageId}
            alt="("/>
        </div>
        <div className='personDetails-info'>
          <h4>{getInfoItem.name}</h4>
          <div className='personDetails-listInfo'>
            <ul>
              {React.Children.map(recordInfo, (child) => {
                return React.cloneElement(child, {item: getInfoItem})
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetails

const Record = ({field, label, item}) => {
  return (
    <div>
      <hr/>
      <li> {label} :{item[field]}</li>
    </div>
  )
};
export {
  Record
}