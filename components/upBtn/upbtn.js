import React ,{useEffect, useState} from 'react';
import { FaAngleDoubleUp} from "react-icons/fa";
import Style from '../../styles/UpBtn.module.css';

export default function Upbtn() {
    const [value,setValue] = useState(0);
    useEffect(() => {
    window.addEventListener("scroll" ,function (){window.scrollY >= 600 ? setValue(1) : setValue(0)}) 
})
  return (
    <div className={Style.upbtn}>
        {value === 1 && <button onClick={() => window.scrollTo(0,0)}><FaAngleDoubleUp /></button>}
    </div>
  )
}