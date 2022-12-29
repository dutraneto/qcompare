import Image from 'next/image'

function ToolTip({ iconChristmas, title, description }) {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-3/5 gap-5 rounded">
      <div className="absolute -z-1 bg-yellow dark:bg-[#1E293B] opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0 rounded"></div>
      <div className="lg:w-28 md:w-24">
        {/* <Image src={iconUrl} width={170} height={171} /> */}
        <Image src={iconChristmas} width={170} height={171} />
      </div>
      <div className="z-50" style={{ color: 'black' }}>
        <h4 className="text-black dark:text-white">{title}</h4>
        <p
          className="text-black dark:text-white"
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
      </div>
    </div>
  )
}

export default ToolTip
