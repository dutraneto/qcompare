import diff from 'simple-text-diff'
import * as React from 'react'

const Diff = ({ string1, string2 }) => {
  const { before, after } = diff.diffPatch(string1, string2)
  const mappedBefore = before
    .split('\n')
    .map((line) => {
      return line === ''
        ? `<div class='outputOriginal w-full h-5 mb-1'></div>`
        : `<div class='outputOriginal mb-1'>${line}</div>`
    })
    .join('')
  const mappedAfter = after
    .split('\n')
    .map((line) => {
      return line === ''
        ? `<div class='outputChanged w-full h-5  mb-1'></div>`
        : `<div class='outputChanged mb-1'>${line}</div>`
    })
    .join('')
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
