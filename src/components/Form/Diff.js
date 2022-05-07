import * as diff from 'diff'
import * as React from 'react'

const styles = {
  added: {
    color: 'green',
    bgColor: 'bg-green'
  },
  removed: {
    color: 'pink',
    bgColor: 'bg-pink'
  }
}

const Diff = ({ string1, string2, mode }) => {
  // const [groups, setGroups] = React.useState(diff.diffChars(string1, string2))
  let groups = []
  React.useEffect(() => {
    window.diff = diff
    if (mode === 'words') {
      groups = diff.diffWords(string1, string2)
    }
    if (mode === 'characters') {
      groups = diff.diffChars(string1, string2)
    }
  }, [])

  const mappedNodes = groups.map((group, index) => {
    const { value, added, removed } = group
    let nodeStyles
    if (added) nodeStyles = styles.added
    if (removed) nodeStyles = styles.removed
    return (
      <span key={index} className={`lines w-full h-5 mb-1`} styles={nodeStyles}>
        {value}
      </span>
    )
  })
  // const mappedNodes = groups.map((group) => {
  //   const { value, added, remove } = group
  //   let nodeStyles
  //   if (added) nodeStyles = styles.added
  //   if (removed) nodeStyles = styles.removed
  //   return group === ''
  //     ? `<div class=' lines w-full h-5 bg-palegreen mb-1'></div>`
  //     : `<div class='lines'>${group}</div>`
  // })

  return (
    <>
      <div className="flex gap-3 mb-12">
        <div className="flex-1 bg-gray-100 p-4">{mappedNodes}</div>
        <div className="flex-1 bg-gray-100 p-4">{mappedNodes}</div>
      </div>
    </>
  )
}

export default Diff
