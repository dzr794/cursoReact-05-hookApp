import React from 'react'

export const Small = React.memo(({value}) => {
  console.log('Me volví a dibujar D:');
  return (
    <small>{ value }!</small>
  )
})
