import  {useState} from 'react'


const BUTTONbuilder =  ( { text , backgroundColor ,  width , height ,  initialColor , hoverColor ,   version  , hoverScale }  : { text :string , backgroundColor :string  ,  width : number  , height : number  ,  initialColor  : string , hoverColor : string  , version  : number , hoverScale : number   } )   => {
  

     const [color ,setColor] = useState<string> (initialColor)  ; 
     const [scale , setScale ] = useState<number>(1) ; 

     const handleMouseEnter = (version:number ) => {   

        if(version===0) { 
            return ; 
        } 

        else if(version===1) {  
            setScale(hoverScale) ;
            setColor(hoverColor) ; 
        } 
     }

     const handleMouseLeave = (version:number) =>  { 

        if(version === 0) { 
            return ; 
        } 

        else if (version===1) { 
            setScale(1) ;    
            setColor(initialColor) ; 
        } 

     }
     
    return (
         <button   style={{ backgroundColor  , color , width , height , transform: `scale(${scale})` }}  className="rounded-3xl"  onMouseEnter={ ( ) =>  handleMouseEnter(version)  } onMouseLeave={ ()=>  handleMouseLeave(version) }   > 
           {text}       
         </button>
    ) 
} 

export default BUTTONbuilder