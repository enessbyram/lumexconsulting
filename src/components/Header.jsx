import logo from '../assets/images/logo.png';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 h-24 flex items-center justify-center z-50 backdrop-blur-md bg-black/10 text-white border-b border-white/5'>
      <nav className='w-full container mx-auto flex flex-row justify-between items-center px-6'>
        
        <div className='hidden md:flex flex-row gap-8 font-light tracking-wide'>
            <h1 className='cursor-pointer hover:text-purple-400 transition-colors'>Ana Sayfa</h1>
            <h1 className='cursor-pointer hover:text-purple-400 transition-colors'>Hizmetlerimiz</h1>
        </div>

        <div className='w-32 cursor-pointer'>
            <img src={logo} alt="logo" className='w-full h-auto object-contain'/>
        </div>

        <div className='flex flex-row gap-6 items-center'>
            <h1 className='cursor-pointer hidden md:block hover:text-purple-400 transition-colors font-light'>Hakkımızda</h1>
            
            <div className='h-8 w-px bg-white/20 hidden md:block'></div>
            
            <div className='flex gap-3'>
                <img src={linkedin} alt="linkedin" className='w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all'/>
                <img src={github} alt="github" className='w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all'/>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;