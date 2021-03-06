import Image from 'next/image'

function ToolTip({ iconUrl, title, description }) {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-3/5 gap-5 rounded">
      <div className="absolute -z-1 bg-yellow opacity-30 w-100 height-100 left-0 right-0 bottom-0 top-0 rounded"></div>
      <div className="lg:w-28 md:w-24">
        <Image src={iconUrl} width={170} height={171} />
      </div>
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
      </div>
    </div>
  )
}

export default ToolTip
