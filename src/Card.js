import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img className='hero--img' src={props.item.imageURL} alt={props.item.title}></img>
      <div className='card--info'>
        <div className='maps--link'>
          <img src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png' alt="marker-icon"></img>
          <p>{props.item.location} </p>
          <a href={props.item.maps}>View in Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p className='dates'>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card