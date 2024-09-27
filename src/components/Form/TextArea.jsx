export default function TextArea(props) {
  const { id, name, labelText, title, placeholder } = props

  const selectText = () => {
    const inputText = document.getElementById(id)
    inputText.focus()
    inputText.select()
  }

  return (
    <div className="flex-1 text-center relative">
      <label className="dark:text-white" htmlFor={id}>
        {labelText}
      </label>
      <textarea
        className={`w-full h-60 text-base dark:focus:outline-slate-100 resize-none whitespace-pre-wrap break-all bg-field dark:text-white border border-black dark:border-slate-100`}
        id={id}
        name={name}
        cols={30}
        rows={10}
        title={title}
        placeholder={placeholder}
        spellCheck
        onFocus={() => selectText()}
      ></textarea>
    </div>
  )
}
