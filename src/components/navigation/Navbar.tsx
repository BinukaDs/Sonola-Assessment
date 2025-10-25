import navLogo from '../../assets/images/sonola-nav-logo.png'
import navIcon from '../../assets/images/sonola-nav-icon.png'
import Button from '../Button';
import sparkles from '../../assets/images/sparkle-filled.png'
import Searchbar from '../Searchbar';
import SidebarToggle from '../SidebarToggle';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    
    return (
        <nav className='max-w-full flex justify-between items-center top-0 pt-5 pb-2 w'>
            <img src={navLogo} alt="Nav Logo" className='lg:block hidden' />
            <img src={navIcon} alt="Nav Logo" className='lg:hidden block mr-5' />

            <Searchbar className='hidden md:block'/>


           <div className='flex gap-4 justify-center items-center'>
            <ThemeToggle />
                <Button variant='outlined' >
                    Try Pro
                    <span>
                        <img src={sparkles} alt="Sparkles" />
                    </span>
                </Button>

                
                <SidebarToggle />
           </div>
        </nav>
    )
}

export default Navbar