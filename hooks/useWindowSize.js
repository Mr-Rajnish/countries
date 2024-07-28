import { useEffect, useState } from "react";

 export function useWindowSize(){
    const [windowSize,setwindowsize] = useState({width:window.innerWidth, height:window.innerHeight,})

    useEffect(()=>{
      window.addEventListener('resize',()=>{
        setwindowsize({
          width : window.innerWidth,
          height: window.innerHeight
      })
      });
    },[])

    return windowSize;
}