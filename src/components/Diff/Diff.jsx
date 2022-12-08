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
  console.log(groups)
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
                  className={`font-bold bg-pink px-[5px] py-[6px] w-6 rounded-full hover:rounded-lg hover:p-2 text-xs hover:w-auto h-6 hover:h-auto overflow-hidden absolute right-2 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all`}
                >
                  <span>❗️</span>
                  <br />
                  Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        if (emptyLines.length === 0 || emptyLines === 1) {
          return
        } else {
          for (let l = 0; l < emptyLines.length; l++) {
            return <div key={idx} className={`mb-px h-4 bg-slate-100`} />
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
                  className={`font-bold bg-palegreen px-[5px] py-[6px] w-6 rounded-full hover:rounded-lg hover:p-2 text-xs hover:w-auto h-6 hover:h-auto overflow-hidden absolute right-2 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all`}
                >
                  <span>❗️</span>
                  <br />
                  Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        if (emptyLines.length === 0 || emptyLines === 1) {
          return
        } else {
          for (let l = 0; l < emptyLines.length; l++) {
            return <div key={idx} className={`mb-px h-4 bg-slate-100`} />
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
      <div className="flex gap-3 mb-12">
        <div className="flex-1 max-w-[50%] bg-gray-200 p-4 relative break-all">
          {mappedNodesBefore}
        </div>
        <div
          div
          className="flex-1 max-w-[50%] bg-gray-200 p-4 relative break-all"
        >
          {mappedNodesAfter}
        </div>
      </div>
    </>
  )
}

export default Diff
