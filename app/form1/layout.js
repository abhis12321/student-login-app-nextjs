import React from 'react'

function layout({children}) {
  return (
    <div className='form-cant'>
      {children}
    </div>
  )
}

export default layout

export async function generateStaticParams() {
  return null;
}