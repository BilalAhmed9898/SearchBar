import React from 'react'
import './SearchBarResult.css'
import Results from './Results'


function SearcResults({results}) {
  return (
    <div className='results-list'>
     {
      results.map((results,id)=>{
        return <Results results={results} key={id}/>
      })
     }
    </div>
  )
}

export default SearcResults