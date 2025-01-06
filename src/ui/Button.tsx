
const Button = ({  text , backgroundColor , color , width, height , scale  , handleMouseEnter , handleMouseLeave } : { text: string , backgroundColor : string ,  color: string ,  width: number  , height: number , scale: number ,  handleMouseEnter: () => { } , handleMouseLeave: () => { } }) => { 
  return (
    <button  className={ `bg-${backgroundColor} text-${color} w-[${width}px] h-[${height}px] scale-${scale*100} rounded-[50%]`}  onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave }   > 
              {text}       
        </button>
  )
}

export default Button