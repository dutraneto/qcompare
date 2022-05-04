import diff from 'simple-text-diff'
import * as React from 'react'

const Diff = ({ string1 = '', string2 = '', mode = 'words' }) => {
  // if (mode === 'words') {
  const { before, after } = diff.diffPatch(string1, string2)
  const mappedBefore = before
    .split('\n')
    .map((line) => {
      return line === ''
        ? `<div class=' lines w-full h-5 bg-pink mb-1'></div>`
        : `<div class='lines'>${line}</div>`
    })
    .join('\n')
  const mappedAfter = after
    .split('\n')
    .map((line) => {
      return line === ''
        ? `<div class="lines w-full h-5 bg-pink mb-1"></div>`
        : `<div class='lines'>${line}</div>`
    })
    .join('\n')
  console.log('Before =>', mappedBefore)
  console.log('After =>', mappedAfter)
  // console.dir(before)
  // before
  //   .split('\n')
  //   .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
  // .join('\n')
  // }
  // console.log(diff.diffPatch(string1, string2))
  // const mappedNodes = groups.map((group, idx) => {
  //   const { value, added, removed } = group
  //   let nodeStyles
  //   if (added) nodeStyles = styles.added
  //   if (removed) nodeStyles = styles.removed
  //   return (
  //     <span key={idx} style={nodeStyles}>
  //       {value}
  //     </span>
  //   )
  // })
  if (mappedBefore === mappedAfter)
    return (
      <div className="flex justify-center items-center full-width bg-palegreen text-dark-green h-20 mb-12">
        Texts are Identical
      </div>
    )
  return (
    <>
      <div className="flex justify-center items-center full-width bg-pink text-dark-red h-20 mb-12">
        Texts are Different
      </div>
      <div className="flex gap-3 mb-12">
        <div
          className="flex-1 bg-gray-100 p-4"
          dangerouslySetInnerHTML={{
            __html: mappedBefore
          }}
        />
        <div
          className="flex-1 bg-gray-100 p-4"
          dangerouslySetInnerHTML={{
            __html: mappedAfter
          }}
        />
      </div>
    </>
  )
}

export default Diff
