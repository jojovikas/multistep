import React from 'react'

const Step1 = ( {nextStep}) => {
  return (
    <div>
     <div className="step-form">
        <h2>Step 1</h2>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <button onClick={nextStep}>Next</button>
     </div>
    </div>
  )
}

export default Step1;
