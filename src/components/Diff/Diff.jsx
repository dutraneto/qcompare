import * as diff from 'diff'
import * as React from 'react'
import { v1 as uuidv1 } from 'uuid'
import { BsExclamationCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'

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

  // function that checks for double spaces
  const hasDoubleSpaces = (line) => line.includes('  ')

  const renderDoubleSpacesBadge = (line) => {
    if (hasDoubleSpaces(line)) {
      return (
        <span
          className={`bg-slate-100 font-bold px-[6px] py-[5px] rounded-l-full text-xs w-auto h-auto overflow-hidden absolute -right-[160px] hover:right-0 bottom-2 cursor-pointer animate-pulse transition ease-in-out delay-75 duration-100 hover:animate-none hover:transition-all dark:text-black flex content-center`}
        >
          <IconContext.Provider value={{ size: '1rem' }}>
            <span>
              <BsExclamationCircle />
            </span>
          </IconContext.Provider>
          &nbsp;&nbsp;&nbsp;Check for double spaces
        </span>
      )
    }
  }

  // Helper function to render each line with optional empty lines handling
  const renderLine = (line, idx, nodeStyles) => {
    // If line is empty, render a placeholder for empty lines
    if (line === '') {
      return (
        <div
          key={uuidv1()}
          className={`mb-px h-4 bg-slate-100 animate-pulse`}
        />
      )
    }
    // Render non-empty lines
    return (
      <>
        <span
          key={idx}
          className={`lines font-mono text-base h-5 mb-1 whitespace-pre-wrap ${
            nodeStyles.background || ''
          } ${nodeStyles.color || ''}`}
        >
          {line}
        </span>
        {renderDoubleSpacesBadge(line, nodeStyles)}
      </>
    )
  }

  // Render the group for each side (before and after)
  const renderGroup = (group, isBefore) => {
    const { added, removed, value } = group
    let nodeStyles = {}

    // Set styles based on added/removed status
    if (isBefore && removed) {
      nodeStyles = styles.removed
    } else if (!isBefore && added) {
      nodeStyles = styles.added
    }

    // Handle non-empty group values
    if (value !== undefined) {
      const replacedValue = value.replace(/\r?\n/g, '\r\n')

      return replacedValue.split('\r\n').map((line) => {
        return renderLine(line, uuidv1(), nodeStyles)
      })
    }
    return null
  }

  // Process the groups for each side (before and after)
  const processGroups = (isBefore) => {
    return groups.map((group) => {
      if (isBefore && group.removed) {
        return renderGroup(group, true) // Render "Before" with removed parts
      } else if (!isBefore && group.added) {
        return renderGroup(group, false) // Render "After" with added parts
      } else if (!group.added && !group.removed) {
        return renderGroup(group, isBefore) // Render unchanged parts in both
      }
      return null
    })
  }

  return (
    <div className="flex gap-3 mb-12">
      {/* Original text (Before) */}
      <div className="flex-1 max-w-[50%] bg-gray-200 dark:bg-field dark:text-white p-4 relative break-all overflow-hidden">
        {processGroups(true)} {/* Highlight "removed" in before */}
      </div>

      {/* Updated text (After) */}
      <div className="flex-1 max-w-[50%] bg-gray-200 dark:bg-field dark:text-white p-4 relative break-all overflow-hidden">
        {processGroups(false)} {/* Highlight "added" in after */}
      </div>
    </div>
  )
}

export default Diff
