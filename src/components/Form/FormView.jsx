import Diff from './Diff'
import TextArea from './TextArea'
import Button from './Button'
import * as React from 'react'
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
    console.log(selectedEnabled)
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
        <div className="flex items-center gap-5 absolute -right-44 hover:right-0 bottom-0 bg-gray-200 p-px transition-all">
          <span className="animate-pulse">⬅</span>
          <div className="flex items-baseline">
            <input
              className="cursor-pointer"
              type="radio"
              name="option"
              id="words"
              checked={selectedEnabled === 'words'}
              onChange={() => setSelectedEnabled('words')}
              value="words"
              aria-label="words"
            />
            <label className="mx-2 my-0 cursor-pointer pd-0" htmlFor="words">
              Words
            </label>
          </div>
          <div className="flex items-baseline">
            <input
              className="cursor-pointer"
              type="radio"
              name="option"
              id="chars"
              checked={selectedEnabled === 'chars'}
              onChange={() => setSelectedEnabled('chars')}
              value="chars"
              aria-label="chars"
            />
            <label className="mx-2 my-0 cursor-pointer pd-0" htmlFor="chars">
              Chars
            </label>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormView
