import diff from 'simple-text-diff'
import * as React from 'react'

const Diff = ({ string1, string2 }) => {
  const { before, after } = diff.diffPatch(string1, string2)
  const mappedBefore = before
    .split('\n')
    .map((line) => {
      return line === ''
        ? `<div class=' lines w-full h-5 bg-palegreen mb-1'></div>`
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

  return (
    <>
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
