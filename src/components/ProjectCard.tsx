import { IoIosMore } from "react-icons/io";


interface ProjectCardProps {
    image: string,
    title: string,
    author: string
    date: string,
    tags?: React.ReactNode[] | undefined
}
const ProjectCard = ({ image, title, author, date, tags }: ProjectCardProps) => {
    return (
        <div className='group cursor-pointer flex flex-col p-3 hover:bg-[#F2F2F7] rounded-2xl transition-all text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-600'>
            <div className='relative bg-[#F2F2F7] min-h-[200px] rounded-2xl flex justify-center items-end mb-2'>
                <img src={image} alt={title} className='rounded-2xl ' />
                {tags}
            </div>
            <h3 className='font-medium dark:group-hover:text-gray-600'>{title}</h3>
            <div className='flex w-full justify-between'>
                <p className='text-light-secondary-text dark:text-dark-text dark:group-hover:text-gray-600'>
                    {author}・{date}
                </p>
                <IoIosMore className='group-hover:dark:text-gray-600'/>
            </div>
        </div>
    )
}

export default ProjectCard