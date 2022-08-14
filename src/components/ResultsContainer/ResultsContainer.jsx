import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameDisplay = suggestedNames.map((suggestedName, index) => {
        return <NameCard key={index} suggestedName={suggestedName} />
    })

    return (
        <div className='results-container'>{suggestedNameDisplay}</div>
    )
}

export default ResultsContainer;