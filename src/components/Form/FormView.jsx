import * as React from 'react'
import Diff from '../Diff/Diff'
import TextArea from './TextArea'
import Button from './Button'
import InputControls from './InputControls'
import confetti from 'canvas-confetti'

function FormView() {
  const [string1, setString1] = React.useState('')
  const [string2, setString2] = React.useState('')
  const [selectedEnabled, setSelectedEnabled] = React.useState('words')
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
  }, [string1, string2, selectedEnabled])

  function handleSubmit(event) {
    event.preventDefault()
    setString1(event.target.elements.textArea1.value.trim())
    setString2(event.target.elements.textArea2.value.trim())
  }

  function stateOfButton(args) {
    setButtonState(args)
  }

  function diffView() {
    return <Diff string1={string1} string2={string2} mode={selectedEnabled} />
  }
  return (
    <>
      {(string1 && diffView()) || (string2 && diffView())}
      <form className="form relative overflow-x-hidden" onSubmit={handleSubmit}>
        <div className="flex gap-3 mb-4">
          <TextArea
            id="textArea1"
            labelText="Original Copy"
            title="Paste the copy content"
            placeholder="Paste copy content here"
            name={string1}
            value={string1}
          />
          <TextArea
            id="textArea2"
            labelText="Second Copy"
            title="Paste a text to compare with copy"
            placeholder="Paste email/LP content here"
            name={string2}
            value={string2}
          />
        </div>
        <div className="text-center">
          <Button
            buttonText={buttonState.initialText}
            bgColor={buttonState.bgColor}
          />
        </div>
        <ul className="flex items-center gap-5 absolute -right-44 hover:right-0 bottom-0 bg-gray-200 p-px transition-all list-none">
          <li className="animate-pulse">⬅</li>
          <InputControls
            selectedEnabled={selectedEnabled}
            setSelectedEnabled={setSelectedEnabled}
          />
        </ul>
      </form>
    </>
  )
}

export default FormView
