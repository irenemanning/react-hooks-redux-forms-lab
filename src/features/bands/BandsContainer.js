import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";
import BandInput from "./BandInput";

function BandsContainer() {
  const [name, setName] = useState("")
  const bandNames = useSelector((state)=>state.bands.entities)
  const dispatch = useDispatch()
  function onBandSubmit(e) {
    e.preventDefault()
    dispatch(bandAdded(name))
    setName("")
  }

  return (
    <div>BandsContainer 
      <BandInput onBandSubmit={onBandSubmit} name={name} setName={setName}/> 
      {bandNames.map((band, index)=> (
        <li key={index} >{band}</li>
      ))}
    </div>
  )
}

export default BandsContainer;
