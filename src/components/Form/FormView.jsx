import Diff from './Diff'
import TextArea from './TextArea'
import Button from './Button'
import * as React from 'react'
import confetti from 'canvas-confetti'

function FormView() {
  function stateOfButton(args) {
    setButtonState(args)
  }
  const [string1, setString1] = React.useState('')
  const [string2, setString2] = React.useState('')
  const [buttonState, setButtonState] = React.useState({
    initialText: 'Compare Text',
    bgColor: 'bg-blue'
  })

  React.useEffect(() => {
    if (string1 === '' && string2 === '') {
      stateOfButton({
        initialText: 'Compare Text',
        bgColor: 'bg-blue'
      })
      return
    } else if (string1 === string2) {
      stateOfButton({
        initialText: 'Texts are Identical',
        bgColor: 'bg-green'
      })

      confetti()
    } else
      stateOfButton({
        initialText: 'Texts are Different',
        bgColor: 'bg-red'
      })

    console.log('Aqui está renderizando')
  }, [string1, string2])

  function handleSubmit(event) {
    event.preventDefault()
    setString1(event.target.elements.textArea1.value)
    setString2(event.target.elements.textArea2.value)
  }

  function diffView() {
    return <Diff string1={string1} string2={string2} mode={'words'} />
  }
  return (
    <>
      {(string1 && diffView()) || (string2 && diffView)}
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex gap-3 mb-4">
          <TextArea
            id="textArea1"
            labelText="Original Copy"
            title="Paste the copy content"
            placeholder="Paste the copy content here"
            name={string1}
            // numbered={'numberedOriginal'}
          />
          <TextArea
            id="textArea2"
            labelText="Second Copy"
            title="Paste a text to compare with copy"
            placeholder="Paste the email content here"
            name={string2}
            // numbered={'numberedChanged'}
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
