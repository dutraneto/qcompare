export default function TextArea(props) {
  const { id, name, labelText, title, placeholder, numbered } = props
  return (
    <div className="flex-1 text-center relative">
      <label htmlFor={id}>{labelText}</label>
      <textarea
        className={`w-full h-60 rounded text-base ${numbered}`}
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
