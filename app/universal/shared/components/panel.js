import React from 'react'
import { Button } from 'components/button'
import Pub from 'components/pub'

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

      <Button label='close' callback={onCloseClick} />

      <Pub { ...selectedResult } />

      <Button label='prev' callback={onPrevClick} />

      <Button label='next' callback={onNextClick} />

    </div>
  )

}

export default Panel
