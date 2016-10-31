import React from 'react'
import * as Shared from '../../shared/components'

const Panel = ({ selectedResult, selectedResultIndex, totalResults, setSelectedResult }) => {

  const onCloseClick = () => {

    // reset selectedResult to default
    setSelectedResult()

  }

  const onPrevClick = () => {

    const prevIndex = selectedResultIndex <= 0 ? totalResults - 1 : selectedResultIndex - 1

    setSelectedResult(prevIndex)

  }

  const onNextClick = () => {

    const nextIndex = selectedResultIndex >= totalResults - 1 ? 0 : selectedResultIndex + 1

    setSelectedResult(nextIndex)

  }

  return (
    <div>

      <Shared.button label='close' callback={onCloseClick} />

      <Shared.pub { ...selectedResult } />

      <Shared.button label='prev' callback={onPrevClick} />

      <Shared.button label='next' callback={onNextClick} />

    </div>
  )

}

export default Panel
