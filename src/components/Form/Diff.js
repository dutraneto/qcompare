import * as diff from 'diff'
import * as React from 'react'

const styles = {
  added: {
    color: 'green',
    backgroundColor: '#b5efdb'
  },
  removed: {
    color: 'red',
    backgroundColor: '#fec4c0'
  }
}

const Diff = ({ string1 = '', string2 = '', mode = 'words' }) => {
  React.useEffect(() => {
    window.diff = diff
  })
  let groups = []

  if (mode === 'characters') groups = diff.diffChars(string1, string2)
  if (mode === 'words') groups = diff.diffWordsWithSpace(string1, string2)
  console.log(groups)

  const mappedNodes = groups.map((group, idx) => {
    const { value, added, removed } = group
    let nodeStyles
    if (added) nodeStyles = styles.added
    if (removed) nodeStyles = styles.removed
    return (
      <span key={idx} style={nodeStyles}>
        {value}
      </span>
    )
  })

  return <span>{mappedNodes}</span>
}

export default Diff
