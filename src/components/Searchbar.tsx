import { IoIosSearch } from "react-icons/io";
const Searchbar = ({className = ''}) => {
    return (
        <form className={`md:w-[300px] lg:w-[650px] ${className}`}>
            <label className="mb-2 text-sm text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0  flex items-center ps-3 pointer-events-none">
                    <IoIosSearch className='text-lg text-gray-600 dark:text-gray-100' />
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm  dark:text-dark-text border border-none rounded-4xl bg-[#F2F2F7] dark:bg-[#FFFFFF1A] focus:ring-blue-main focus:border-blue-main transition-all" placeholder="Search Projects and experiences" />
            </div>
        </form>
    )
}

export default Searchbar