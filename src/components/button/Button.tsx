"use client"
import React, { ReactNode } from 'react'
import "./style.scss"
import Typography from '../typography/Typography'

interface Props {
    children : ReactNode,
    className? : string,
    onClick? : ()=>void
}

export default function Button({children, className, onClick} : Props) {

  return (
    <div className={`my-button ${className}`} onClick={onClick}>
        <Typography variant='md' color='light'>
            {children}
        </Typography>
        
    </div>
  )
}
