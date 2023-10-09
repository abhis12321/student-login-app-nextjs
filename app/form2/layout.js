import React from 'react'

function layout({children}) {
  return (
    <div className='form-cant'>
      <h1 className='form-tag'>Fill this form to resiter</h1>
      {children}
    </div>
  )
}

export default layout
