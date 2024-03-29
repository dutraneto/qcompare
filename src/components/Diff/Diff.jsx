import * as diff from 'diff'
import * as React from 'react'
import { v1 as uuidv1 } from 'uuid'

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

  React.useEffect(() => {
    window.diff = diff
    if (mode === 'words') {
      setGroups(diff.diffWordsWithSpace(string1, string2))
    }
    if (mode === 'chars') {
      setGroups(diff.diffChars(string1, string2))
    }
  }, [string1, string2, mode])

  function hasWhiteSpace(s) {
    return s.indexOf('  ') >= 0
  }

  const mappedNodesBefore = groups.map((group) => {
    group.id = uuidv1()
    let { value, added, removed } = group
    let nodeStyles = {}
    if (added) {
      value = undefined
    }
    if (removed) {
      nodeStyles = { ...styles.added }
    }
    if (value !== undefined) {
      const replacedValue = value.replace(/\r?\n/g, '\r\n')
      const emptyLines = []
      return replacedValue.split('\r\n').map((line) => {
        const idx = uuidv1()
        if (line === '') {
          emptyLines.push(line)
        } else {
          return (
            <>
              <span
                key={idx}
                className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}  whitespace-pre-wrap`}
              >
                {line}
              </span>
              {hasWhiteSpace(line) ? (
                <span
                  className={`font-bold bg-pink px-[6px] py-[5px] w-6 h-6 rounded-l-full text-xs w-auto h-auto overflow-hidden absolute -right-[160px] hover:right-0 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all dark:text-black`}
                >
                  <span>❗️</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        if (emptyLines.length === 0 || emptyLines === 1) {
          return
        } else {
          for (let l = 0; l < emptyLines.length; l++) {
            return (
              <div
                key={idx}
                className={`mb-px h-4 bg-slate-100 dark:bg-slate-700 animate-pulse`}
              />
            )
          }
        }
      })
    }
    return (
      <span
        key={group.id}
        className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}  whitespace-pre-wrap`}
      >
        {value}
      </span>
    )
  })

  const mappedNodesAfter = groups.map((group) => {
    group.id = uuidv1()
    let { value, added, removed } = group
    let nodeStyles = {}
    if (removed) {
      value = undefined
    }
    if (added) {
      nodeStyles = { ...styles.removed }
    }
    if (value !== undefined) {
      const replacedValue = value.replace(/\r?\n/g, '\r\n')
      const emptyLines = []
      return replacedValue.split('\r\n').map((line) => {
        const idx = uuidv1()
        if (line === '') {
          emptyLines.push(line)
        } else {
          return (
            <>
              <span
                key={idx}
                className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}  whitespace-pre-wrap`}
              >
                {line}
              </span>
              {hasWhiteSpace(line) ? (
                <span
                  className={`font-bold bg-palegreen px-[6px] py-[5px] w-6 rounded-l-full text-xs w-auto h-auto overflow-hidden absolute -right-[160px] hover:right-0 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all dark:text-black`}
                >
                  <span>❗️</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        if (emptyLines.length === 0 || emptyLines === 1) {
          return
        } else {
          for (let l = 0; l < emptyLines.length; l++) {
            return (
              <div
                key={idx}
                className={`mb-px h-4 bg-slate-100 dark:bg-slate-700 animate-pulse`}
              />
            )
          }
        }
      })
    }
    return (
      <span
        key={group.id}
        className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color}  whitespace-pre-wrap`}
      >
        {value}
      </span>
    )
  })

  return (
    <>
      <div className="flex gap-3 mb-12 ">
        <div className="flex-1 max-w-[50%] bg-gray-200 dark:bg-[#1E293B] dark:text-white p-4 relative break-all overflow-hidden">
          {mappedNodesBefore}
        </div>
        <div className="flex-1 max-w-[50%] bg-gray-200 dark:bg-[#1E293B] dark:text-white p-4 relative break-all overflow-hidden">
          {mappedNodesAfter}
        </div>
      </div>
    </>
  )
}

export default Diff
