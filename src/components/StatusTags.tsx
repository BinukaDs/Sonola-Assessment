import docsLogo from '../assets/images/recents/docs-icon.png'
import { GoArrowUpRight } from "react-icons/go";




export const LiveTag = () => {
  return (
    <div className='bg-[#5856D6] text-xs  min-w-[60px] absolute top-2 right-2 w-fit text-white p-1 rounded-2xl flex justify-center items-center text-center'>
      <span>Live</span>
    </div>
  )
}

export const UpdateTag = () => {
  return (
    <div className='bg-[#3FAF5B] text-xs  min-w-[60px] absolute top-2 right-2 w-fit text-white p-1 rounded-2xl flex justify-center items-center text-center'>
      <span>Updating...</span>
    </div>
  )
}

export const DocsTag = () => {
  return (
    <div className='flex gap-1 text-xs text-black p-1 absolute bg-white px-2 top-2 left-2 rounded-2xl items-center justify-between'>
      <img src={docsLogo} alt="docs" />
      <span>Open in</span>
      <GoArrowUpRight className='animate-pulse'/>
    </div>
  )
}

export const ReviewTag = () => {
  return (
    <div className='flex gap-1 text-xs text-black px-2 py-1 absolute bg-white top-2 left-2 rounded-2xl items-center justify-center'>
      <span className="relative flex items-center justify-center size-3">
        <span className="absolute inline-flex animate-ping rounded-full bg-amber-500 size-2 opacity-75"></span>
        <span className="relative inline-flex rounded-full bg-amber-500 size-2"></span>
      </span> 
      <span>Needs Review</span>
    </div>
  )
}