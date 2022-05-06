import Diff from './Diff'
import TextAreaWrapper from './TextAreaWrapper'
import Button from './Button'
import * as React from 'react'
import confetti from 'canvas-confetti'

function FormView() {
  const stateOfButton = {
    initialText: 'Compare Text',
    bgColor: 'bg-blue'
  }
  const [string1, setString1] = React.useState('')
  const [string2, setString2] = React.useState('')
  const [buttonState, setButtonState] = React.useState(stateOfButton)
  React.useEffect(() => {
    if (string1 === '' && string2 === '') {
      setButtonState(stateOfButton)
      return
    } else if (string1 === string2) {
      setButtonState({
        initialText: 'Texts are Identical',
        bgColor: 'bg-green'
      })
      confetti()
    } else
      setButtonState({
        initialText: 'Texts are Different',
        bgColor: 'bg-red'
      })
  }, [string1, string2])

  function handleSubmit(event) {
    event.preventDefault()
    setString1(event.target.elements.textArea1.value)
    setString2(event.target.elements.textArea2.value)
  }

  function diffView() {
    return <Diff string1={string1} string2={string2} />
  }
  return (
    <>
      {string1 && string2 && diffView()}
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex gap-3 mb-3">
          <TextAreaWrapper
            id="textArea1"
            labelText="Original Copy"
            title="Paste the copy content"
            placeholder="Paste the copy content here"
            name={string1}
          />
          <TextAreaWrapper
            id="textArea2"
            labelText="Second Copy"
            title="Paste a text to compare with copy"
            placeholder="Paste the email content here"
            name={string2}
          />
        </div>
        <div className="text-center">
          <Button
            buttonText={buttonState.initialText}
            bgColor={buttonState.bgColor}
          />
        </div>
      </form>
    </>
  )
}

export default FormView
