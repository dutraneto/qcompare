import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

const InputToggle = (props) => {
  // Use the useState hook to keep track of the current mode (light or dark)
  // window.localStorage.getItem('darkMode')

  return (
    <label className="relative inline-block m-0">
      {/* Use the "mode" state to set the input's checked property */}
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={props.currentTheme === 'dark'}
        // When the input is changed, toggle the mode
        onChange={() =>
          props.setTheme(props.currentTheme === 'dark' ? 'light' : 'dark')
        }
      />
      <span
        // Use the "mode" state to set the span's class name
        className={`relative m-0 pt-2 inline-block w-9 h-9 cursor-pointer focus:outline-none focus:shadow-outline`}
      >
        {/* Show the sun icon for light mode and the moon icon for dark mode */}
        {props.currentTheme === 'dark' ? (
          <IoSunnyOutline className="absolute inset-0 text-white text-3xl" />
          
        ) : (
          <IoMoonOutline className="absolute inset-0 text-black text-3xl" />
        )}
        {/* Use a pseudo-element to create the sliding toggle effect */}
        <span className="absolute inset-0" />
      </span>
    </label>
  )
}

export default InputToggle
