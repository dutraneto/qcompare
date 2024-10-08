export default function Button(props) {
  const { style, onClick, children } = props
  const styles = {
    button: `px-8 py-3 pointer capitalize text-center hover:opacity-90 rounded transition-all ${style}`
  }
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      {children}
    </button>
  )
}
