import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Introduce = () => {
  return (
    <main className='flex flex-col min-h-screen w-full items-center justify-center gap-8 pt-20 px-4 text-white text-center'>
        
        <h2 className='font-thin text-xl md:text-3xl tracking-[0.2em] opacity-80'>
            LUMEX CONSULTING
        </h2>
        
        <h1 className='font-bold text-5xl md:text-8xl lg:text-9xl max-w-5xl leading-tight bg-clip-text text-transparent bg-linear-to-b from-white via-white to-white/50 pb-2'>
            dijital dünyada iz bırakın
        </h1>
        
        <p className='text-lg md:text-2xl font-light text-gray-300 max-w-2xl'>
            markanızı geleceğe taşıyan web çözümleri
        </p>
        
        <div className='mt-10 animate-bounce'>
             <FontAwesomeIcon icon={faArrowDown} className="cursor-pointer text-2xl md:text-3xl font-thin opacity-70 hover:opacity-100 transition-opacity"/>
        </div>
    </main>    
  );
};

export default Introduce;