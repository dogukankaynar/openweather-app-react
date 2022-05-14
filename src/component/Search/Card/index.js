import React from 'react'
function Card(props) {
  return (
    <div className="Card">
    <div className="description"><img src="#" /></div>
    <div className="Main"><span>{props.temp}'C</span><span>{props.description}</span></div>
    </div>
  )
}

export default Card