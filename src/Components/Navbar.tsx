
import pathStrings from '../assets/pathStrings.ts'  
import SVGbuilder from '../ui/SVGbuilder.tsx'
import BUTTONbuilder from '../ui/BUTTONbuilder.tsx'
import { useState } from 'react'
  

export  default function Navbar()  {   

    const [homeButtonScale , setHomeButtonScale] = useState<number>(1);  


    return ( 
    <div className='flex justify-between m-[5px] align-center'>  
        <div>
             <div className='h-[32px] mt-[7.5px]'> 
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" width={32} height={32}    /> 
              </div>
        </div>

        <div className='flex justify-between'> 
            
           <button className=' bg-[#1F1F1F] w-[48px] h-[48px]  block mr-[5px]' style={{ borderRadius: '24px' , transform:`scale(${homeButtonScale})` } }   onMouseEnter={() => setHomeButtonScale(1.1)}  onMouseLeave={() => setHomeButtonScale(1)}   >
             <div className='relative left-[12px]'> 
                <SVGbuilder  pathStringArray={pathStrings.homePath}     width={27} version={0} /> 
             </div>
           </button>
        
           <div className='w-[474px] h-[48px] flex  justify-between px-[10px] bg-[#1F1F1F] ' style={{ borderRadius: '24px'  }} onMouseEnter = { () => {     } } > 
              <div className='  relative top-[12px]'>
                 <SVGbuilder pathStringArray={pathStrings.searchPath}    width={27} version={1} /> 
              </div> 
              <input className='w-[380px] bg-[#1F1F1F]' placeholder='What do you want to play?'  /> 
              <div className='relative top-[12px] right-[5px]'>    
                 <SVGbuilder pathStringArray={pathStrings.browsePath}   width={27} version={3} />
              </div>
           </div>

        </div>

        <div> 
           <BUTTONbuilder text='Sign up' backgroundColor='black' initialColor='#ADADAD' hoverColor='white'   width={96} height={48} version={1} hoverScale={1.1} />  
           <BUTTONbuilder text='Log in'  backgroundColor='white' initialColor='black'   hoverColor='black'   width={108} height={48} version={1} hoverScale={1.1} />    
        </div>

    </div> ) 

} 

/*
<SVGbuilder pathStringArray={pathStrings.downloadPath}  defaultColor = '#FFFFFF'  width={17} version={2}   />  
        <SVGbuilder pathStringArray={pathStrings.bellPath}    defaultColor="#ADADAD" width={17} version={3} />   
  474 48 
        */ 