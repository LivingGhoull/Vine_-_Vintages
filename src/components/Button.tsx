import React, { Children } from 'react'
interface Props {
  children: string
}

function Button({children} : Props) {
  return (
    <button type='button' className=''>{children}</button>
  )
}

export default Button