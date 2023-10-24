import React from "react";

function BandInput({onBandSubmit, name, setName}) {
  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onBandSubmit} action="">
        <label>name:</label>
        <input type="text" onChange={handleChange} value={name} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BandInput;
