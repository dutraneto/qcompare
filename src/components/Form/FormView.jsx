import * as React from 'react'
import Diff from '../Diff/Diff'
import TextArea from './TextArea'
import Button from './Button'
import InputControls from './InputControls'
import confetti from 'canvas-confetti'
import { PiArrowFatLeftLight } from 'react-icons/pi'

function FormView() {
  const [string1, setString1] = React.useState('')
  const [string2, setString2] = React.useState('')
  const [selectedEnabled, setSelectedEnabled] = React.useState('words')
  const [buttonState, setButtonState] = React.useState({})

  const stringsAreSet = string1 || string2
  const buttonStates = {
    initial: {
      initialText: 'Analyze Differences',
      bgColor: 'bg-blue'
    },
    match: {
      initialText: 'Texts Match',
      bgColor: 'bg-green'
    },
    differ: {
      initialText: 'Texts Differ',
      bgColor: 'bg-red'
    }
  }

  React.useEffect(() => {
    if (string1 === '' && string2 === '') {
      getButtonState(buttonStates.initial)
      return
    } else if (string1 === string2) {
      getButtonState(buttonStates.match)
      const confettiOptions = {
        particleCount: 180,
        startVelocity: 50,
        spread: 300,
        origin: { y: 0.6 }
      }
      confetti(confettiOptions)
    } else getButtonState(buttonStates.differ)
  }, [string1, string2, selectedEnabled])

  function handleSubmit(event) {
    event.preventDefault()
    setString1(event.target.elements.textArea1.value.trim())
    setString2(event.target.elements.textArea2.value.trim())
  }

  function getButtonState(args) {
    setButtonState(args)
  }

  function handleClear(event) {
    event.preventDefault()
    event.target.form[0].value = ''
    setString1('')
    event.target.form[1].value = ''
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
            title="Insert Original Text Here"
            placeholder="Insert Original Text Here"
            name={string1}
            value={string1}
          />
          <TextArea
            id="textArea2"
            labelText="Second Copy"
            title="Insert Second Text Here"
            placeholder="Insert Second Text Here"
            name={string2}
            value={string2}
          />
        </div>
        <div className="flex justify-evenly relative">
          {stringsAreSet && (
            <Button
              bgColor={`bg-transparent`}
              style={
                !stringsAreSet
                  ? `text-slate-100 border absolute top-0 left-0 bottom-0`
                  : `text-blue border hover:bg-blue hover:text-white absolute top-0 left-0 bottom-0`
              }
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
          <Button style={`text-white w-60 ${buttonState.bgColor}`}>
            {buttonState.initialText}
          </Button>
        </div>
        <ul className="flex items-center gap-5 absolute -right-44 hover:right-0 bottom-0 bg-white dark:bg-black p-px transition-all list-none">
          <li className="animate-bounce">
            <PiArrowFatLeftLight className="text-black text-2xl dark:text-white" />
          </li>
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
