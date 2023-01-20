import React, { useEffect, useState } from 'react'
import "./Navbar.css"
function Navbar() {
  const[show , handleshow] = useState(false)
  const transitionbar =()=>{
    if(window.scrollY>100){
      handleshow(true)
    }
    else{
      handleshow(false)
    }
  }
  useEffect(()=>{
window.addEventListener("scroll" , transitionbar);

return ()=> window.removeEventListener("scroll" , transitionbar);
  } , [])
  return (
    <div className={`Navbar ${show && "Navbar__black"}`}>

      <div className="Navbar__content">
        <img className='Navbar__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        
        <img className='Navbar__avatar' src="https://i.pinimg.com/564x/0c/91/71/0c9171ce965fb4ec175c2b001516e754.jpg" alt="" />
      </div>
      

    </div>
  )
}

export default Navbar