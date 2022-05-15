import React ,{useState,useEffect} from 'react'
function Card(props) {

  return (
    <div className="Card">
    {/* en son burda kaldım img eklenemedi*/}
    {/* {props.description?<div onLoad={changeİmg} className="img"></div>:null} */}
    <div className="Main">
    <div className="temp">
    {props.temp ? <h1>{props.temp}°C</h1>:null}
    </div>
    <div className="description">
    {props.description ? <h1>{props.description}</h1>:null}
    </div>
    </div>
    </div>
  )
}

export default Card