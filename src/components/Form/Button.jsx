export default function Button(props) {
  const styles = {
    button:
      'px-6 py-3 border-0 bg-transparent text-white pointer capitalize radius-4 text-center hover:opacity-90 rounded shadow-lg'
  }
  return (
    <button className={`${styles.button} ${props.bgColor}`} type="submit">
      {props.buttonText}
    </button>
  )
}
