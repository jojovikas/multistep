import React from 'react'

const Step2 = ({nextStep, backStep}) => {
  return (
    <div className='step-form'>
        <h2>Step 2</h2>
        <input type="email" placeholder='email' />
        <input type="tel" placeholder='phone number' />
        <div className='button-group'>
            <button onClick={backStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    </div>
  )
}

export default Step2;
