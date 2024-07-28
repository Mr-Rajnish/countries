

import { useTheme } from "../hooks/useTheme"


export default function Header() {

   const [isDark,setIsDark]=useTheme();
 

   // this process of switching dark,light mode not a good practise because in react we do not manipulate through dom so we use useContext() hook
  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }


  // chaatgpt method

  // const [isDark, setIsDark] = useState(() => {
  //   const storedIsDark = localStorage.getItem('IsDarkMode');
  //   return storedIsDark ? JSON.parse(storedIsDark) : false;
  // });

  // // we can also use useOutletContext() hook feature provided by react-router-dom which can add functionality to all component except header of dark and light mode in vedio27 after 20min

  // useEffect(() => {
  //   // Apply the correct theme based on isDark value
  //   if (isDark) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }, [isDark]); // This dependency ensures the effect runs on isDark change

  // const handleToggleTheme = () => {
  //   setIsDark(prevIsDark => {
  //     const newIsDark = !prevIsDark;
  //     localStorage.setItem('IsDarkMode', JSON.stringify(newIsDark));
  //     return newIsDark;
  //   });
  // };
  return (
    <header className={`header-container ${isDark? 'dark': ''} `}>
        <div className={`header-content ${isDark? 'dark': ''} `}>
            <h2 className="title"><a href="/">where in the world ? </a></h2>
            <p className="theme-changer" onClick={()=>{
             // for solving problem if we refresh the page then the selected mode vanishes and set to the defult for resolving this issue we save them in local storage
           
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode',!isDark)
            }} >
              
             
              <i className={`fa-solid fa-${isDark ? 'sun':'moon'}`}/>&nbsp;&nbsp;{isDark ? 'Light Mode' : 'Dark Mode'}</p>
        </div>
    </header>
  )
}
