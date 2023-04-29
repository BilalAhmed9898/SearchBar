import React from 'react'
import './Results.css'

function Results({results}) {
  return (
    <div className='Results'
    onClick={(e)=>alert(`You Clicked on ${results.name}`)}
    >{results.name}</div>
  )
}

export default Results