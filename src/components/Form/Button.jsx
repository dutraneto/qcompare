export default function Button(props) {
  const { style, bgColor, buttonText } = props
  const styles = {
    button: `px-6 py-3 pointer capitalize radius-4 text-center hover:opacity-90 rounded shadow-lg ${style}`
  }
  return (
    <button className={`${styles.button} ${bgColor}`} type="submit">
      {buttonText}
    </button>
  )
}
