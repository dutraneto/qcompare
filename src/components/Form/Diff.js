import * as diff from 'diff'
import * as React from 'react'

const styles = {
  added: {
    color: 'text-red',
    background: 'bg-pink'
  },
  removed: {
    color: 'text-dark-green',
    background: 'bg-palegreen'
  }
}

const Diff = ({ string1, string2, mode = 'words' }) => {
  const [groups, setGroups] = React.useState(diff.diffWords(string1, string2))
  console.log(groups)
  React.useEffect(() => {
    window.diff = diff
    if (mode === 'words') {
      setGroups(diff.diffWordsWithSpace(string1, string2))
    }
    if (mode === 'characters') {
      setGroups(diff.diffChars(string1, string2))
    }
  }, [string1, string2, mode])

  function hasEnter(value) {
    if (value === '') {
      return
    }
    const newValue = value
      .split('\n')
      .map((s) => s)
      .join(`\n`)
    return newValue
  }

  const mappedNodesBefore = groups.map((group, index) => {
    let { value, added, removed } = group
    let nodeStyles = {}
    if (added) {
      value = ''
    }
    if (removed) {
      nodeStyles = { ...styles.added }
    }
    const isBreakLine = value.includes('\n')
    if (isBreakLine) {
      return value.split('\n').map((line, index) => {
        return (
          value[index] === '\n' &&
          (<div key={index} className={`mb-1 h-4 bg-slate-400`} /> || line)
        )
      })
    }
    return (
      <span
        key={index}
        className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
      >
        {value.includes('\n') ? hasEnter(value) : value}
      </span>
    )
  })

  const mappedNodesAfter = groups.map((group, index) => {
    let { value, added, removed } = group
    let nodeStyles = {}
    if (removed) {
      value = ''
    }
    if (added) {
      nodeStyles = { ...styles.removed }
    }
    const isBreakLine = value.includes('\n')
    if (isBreakLine) {
      return value.split('\n').map((line, index) => {
        return (
          value[index] === '\n' &&
          (<div key={index} className={`mb-1 h-4 bg-slate-400`} /> || line)
        )
      })
    }
    return (
      <span
        key={index}
        className={`lines font-mono text-base font-16 h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
      >
        {value.includes('\n') ? hasEnter(value) : value}
      </span>
    )
  })

  return (
    <>
      <div className="flex gap-3 mb-12">
        <div className="flex-1 bg-gray-200 p-4 overflow-scroll">
          {mappedNodesBefore}
        </div>
        <div div className="flex-1 bg-gray-200 p-4 overflow-scroll">
          {mappedNodesAfter}
        </div>
      </div>
    </>
  )
}

export default Diff
