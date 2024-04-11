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
        initialText: 'Analyze Differences',
        bgColor: 'bg-blue'
      })
      return
    } else if (string1 === string2) {
      stateOfButton({
        initialText: 'Texts Match',
        bgColor: 'bg-green'
      })
      confetti()
    } else
      stateOfButton({
        initialText: 'Texts Differ',
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

  function handleClick(event) {
    event.preventDefault()
    event.target.form[0].value = ''
    event.target.form[1].value = ''
    setString1('')
    setString2('')
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
        <div className="flex justify-evenly relative">
          <Button
            buttonText={`Clear`}
            bgColor={`bg-transparent`}
            style={
              !string1 && !string2
                ? `text-slate-100 border absolute top-0 left-0 bottom-0`
                : `text-blue border hover:bg-blue hover:text-white absolute top-0 left-0 bottom-0`
            }
            onClick={handleClick}
            disabled={!string1 && !string2}
          />
          <Button
            buttonText={buttonState.initialText}
            bgColor={buttonState.bgColor}
            style={`text-white`}
          />
        </div>
        <ul className="flex items-center gap-5 absolute -right-44 hover:right-0 bottom-0 bg-gray-200 dark:bg-slate-900 p-px transition-all list-none">
          <li className="animate-bounce">⬅</li>
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
