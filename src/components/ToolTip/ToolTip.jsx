import Image from 'next/image'

function ToolTip({ iconUrl, title, description }) {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 max-w-3xl gap-5">
      <div className="absolute -z-1 bg-yellow opacity-20 w-100 height-100 left-0 right-0 bottom-0 top-0"></div>
      <Image src={iconUrl} width={170} height={171} />
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ToolTip
