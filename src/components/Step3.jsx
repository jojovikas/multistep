import React from 'react'

const Step3 = ( {backStep}) => {
  return (
    <div className='step-form'>
        <h2>Step 3</h2>
        <input type="password" placeholder='password' />
        <input type="password" placeholder='confirm password' />
        <div className="button-group">
            <button onClick={backStep}>back</button>
            <button>Submit</button>
        </div>
      
    </div>
  )
}

export default Step3
