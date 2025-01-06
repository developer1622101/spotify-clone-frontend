import '../App.css' ; 
 
const SVGbuilder = ({ pathStringArray  ,   width ,version   } :  { pathStringArray : string[],  width: number ,  version:number  } )  => {     
    return( 
        <svg  width={width} height={width} className={`custom-hover-effect-svg-${version}`}  > 
            {pathStringArray.map( (pathString) => <path d={pathString } fill="#ADADAD">  </path>    )  }
        </svg> 
    )
}

export default SVGbuilder  ;   