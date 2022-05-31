function InputControls({ selectedEnabled, setSelectedEnabled }) {
  return (
    <>
      <li className="flex items-baseline">
        <input
          className="cursor-pointer"
          type="radio"
          name="option"
          id="words"
          checked={selectedEnabled === 'words'}
          onChange={() => setSelectedEnabled('words')}
          value="words"
          aria-label="words"
          title="This option will check for double spaces if they exist"
        />
        <label
          className="mx-2 my-0 cursor-pointer pd-0"
          htmlFor="words"
          title="This option will check for double spaces if they exist"
        >
          Words
        </label>
      </li>
      <li className="flex items-baseline">
        <input
          className="cursor-pointer"
          type="radio"
          name="option"
          id="chars"
          checked={selectedEnabled === 'chars'}
          onChange={() => setSelectedEnabled('chars')}
          value="chars"
          aria-label="chars"
          title="This option won't check for double spaces if they exist"
        />
        <label
          className="mx-2 my-0 cursor-pointer pd-0"
          htmlFor="chars"
          title="This option won't check for double spaces if they exist"
        >
          Chars
        </label>
      </li>
    </>
  )
}

export default InputControls
