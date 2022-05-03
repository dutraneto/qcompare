import Diff from './Diff'
import * as React from 'react'

function FormView() {
  const [string1, setString1] = React.useState('')
  const [string2, setString2] = React.useState('')
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
          <div className="flex-1 text-center">
            <label htmlFor="textArea1">Original Copy</label>
            <textarea
              className="w-full h-80"
              id="textArea1"
              name=""
              cols="30"
              rows="10"
              title="Paste the copy content"
              placeholder="Paste the copy content here"
              spellCheck="true"
            ></textarea>
          </div>
          <div className="flex-1 text-center">
            <label htmlFor="textArea2">Changed Copy</label>
            <textarea
              className="w-full h-80"
              id="textArea2"
              name=""
              cols="30"
              rows="10"
              title="Paste the Email/Landing Page content here"
              placeholder="Paste the Email/Landing Page content here"
              spellCheck="true"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="px-6 py-3 bg-green border-0 bg-transparent text-white pointer capitalize radius-4 text-center hover:opacity-90 rounded"
            type="submit"
          >
            show difference
          </button>
        </div>
      </form>
    </>
  )
}

export default FormView
