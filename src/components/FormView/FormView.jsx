import Diff from './Diff'
import * as React from 'react'

function FormView(props) {
  // React.useEffect(() => {
  // })
  return (
    <form className="flex gap-5" action="">
      <Diff string1="Kyle Peacock" string2="Kyle Matthews" />
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
    </form>
  )
}

export default FormView
