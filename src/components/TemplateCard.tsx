import { FaArrowRight } from "react-icons/fa6";

interface TemplateCardProps {
    image: string,
    title: string,
    desc: string
}

const TemplateCard = ({ image, title, desc }: TemplateCardProps) => {
    return (
        <div className='group cursor-pointer flex flex-col p-3 hover:bg-[#F2F2F7] rounded-2xl transition-all text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-600'>
            <img src={image} alt={title} className='rounded-2xl drop-shadow-xl mb-2' />
            <h3 className='font-medium dark:group-hover:text-gray-600'>{title}</h3>
            <div className='flex w-full justify-between'>
                <p className="dark:text-dark-text dark:group-hover:text-gray-600">{desc}</p>
                <FaArrowRight className="dark:group-hover:text-gray-600 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
        </div>
    )
}

export default TemplateCard