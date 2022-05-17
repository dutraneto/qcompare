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
    if (mode === 'chars') {
      setGroups(diff.diffChars(string1, string2))
    }
  }, [string1, string2, mode])

  function hasWhiteSpace(s) {
    return s.indexOf('  ') >= 0
  }

  const mappedNodesBefore = groups.map((group, index) => {
    let { value, added, removed } = group
    console.log(value.split(' '))
    let nodeStyles = {}
    if (added) {
      value = null
    }
    if (removed) {
      nodeStyles = { ...styles.added }
    }

    if (value !== null) {
      const replacedValue = value.replace(/\r?\n/g, '\r\n')
      return replacedValue.split('\r\n').map((line, index) => {
        if (line != '') {
          return (
            <>
              <span
                key={index}
                className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
              >
                {line}
              </span>
              {hasWhiteSpace(line) ? (
                <span
                  className={`font-bold bg-pink px-[6px] py-1 w-6 rounded-full hover:rounded-lg hover:p-2 text-xs hover:w-auto h-6 hover:h-auto overflow-hidden absolute right-2 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all`}
                >
                  <span>❗️</span>
                  <br />
                  Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        return (
          line === '' && (
            <div key={index} className={`mb-px h-4 bg-slate-400`} />
          )
        )
      })
    }
    return (
      <>
        <span
          key={index}
          className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
        >
          {value}
        </span>
      </>
    )
  })

  const mappedNodesAfter = groups.map((group, index) => {
    let { value, added, removed } = group
    let nodeStyles = {}
    if (removed) {
      value = null
    }
    if (added) {
      nodeStyles = { ...styles.removed }
    }

    if (value !== null) {
      const replacedValue = value.replace(/\r?\n/g, '\r\n')
      return replacedValue.split('\r\n').map((line, index) => {
        if (line != '') {
          return (
            <>
              <span
                key={index}
                className={`lines font-mono text-base h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
              >
                {line}
              </span>
              {hasWhiteSpace(line) ? (
                <span
                  className={`font-bold bg-palegreen px-[6px] py-1 w-6 rounded-full hover:rounded-lg hover:p-2 text-xs hover:w-auto h-6 hover:h-auto overflow-hidden absolute right-2 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all`}
                >
                  <span>❗️</span>
                  <br />
                  Check for double spaces
                </span>
              ) : null}
            </>
          )
        }
        return (
          line === '' && (
            <div key={index} className={`mb-px h-4 bg-slate-400`} />
          )
        )
      })
    }
    return (
      <span
        key={index}
        className={`lines font-mono text-base font-16 h-5 mb-1 ${nodeStyles.background} ${nodeStyles.color} whitespace-pre-line`}
      >
        {value}
      </span>
    )
  })

  return (
    <>
      <div className="flex gap-3 mb-12">
        <div className="flex-1 bg-gray-200 p-4 relative">
          {mappedNodesBefore}
        </div>
        <div div className="flex-1 bg-gray-200 p-4 relative">
          {mappedNodesAfter}
        </div>
      </div>
    </>
  )
}

export default Diff
