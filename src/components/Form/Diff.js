import * as diff from 'diff'
import * as React from 'react'

const styles = {
  added: {
    // color: 'text-dark-red',
    background: 'bg-red'
  },
  removed: {
    // color: 'text-green-dark',
    background: 'bg-green'
  }
}

const Diff = ({ string1, string2, mode = 'words' }) => {
  const [groups, setGroups] = React.useState(diff.diffWords(string1, string2))
  console.log(groups)
  React.useEffect(() => {
    window.diff = diff
    if (mode === 'words') {
      // const options = {
      //   newLineIsToken: true
      // }
      setGroups(diff.diffWords(string1, string2))
    }
    if (mode === 'characters') {
      setGroups(diff.diffChars(string1, string2))
    }
  }, [string1, string2, mode])
  // console.log(groups)
  const mappedNodesBefore = groups.map((group, index) => {
    let { value, added, removed } = group
    let nodeStyles = {}

    if (added) {
      value = ''
    }
    if (removed) {
      nodeStyles = { ...styles.added }
    }
    return (
      <span
        key={index}
        className={`lines w-full h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}`}
      >
        {value}
      </span>
    )
  })
  const mappedNodesAfter = groups.map((group, index) => {
    let { value, added, removed } = group
    let nodeStyles = {}

    if (removed) {
      // nodeStyles = { ...styles.removed }
      value = ''
    }
    if (added) {
      nodeStyles = { ...styles.removed }
    }
    // console.log('Index number', index, group)
    return (
      <span
        key={index}
        className={`lines w-full h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}`}
      >
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
  // eslint-disable-next-line no-prototype-builtins
  console.log(mappedNodesAfter.hasOwnProperty('value'))
  return (
    <>
      <div className="flex gap-3 mb-12">
        <div className="flex-1 bg-pink outputOriginal px-4">
          {mappedNodesBefore}
        </div>
        <div div className="flex-1 bg-palegreen outputChanged px-4">
          {mappedNodesAfter}
        </div>
      </div>
    </>
  )
}

export default Diff
