export default function TextAreaWrapper(props) {
  const { id, name, labelText, title, placeholder } = props
  return (
    <div className="flex-1 text-center">
      <label htmlFor={id}>{labelText}</label>
      <textarea
        className="w-full h-60 rounded"
        id={id}
        name={name}
        cols={30}
        rows={10}
        title={title}
        placeholder={placeholder}
        spellCheck={true}
      ></textarea>
    </div>
  )
}
