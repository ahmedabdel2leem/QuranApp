"use client"
import { fetchChapters, fetchJuzs } from "@/app/redux/chaptersSlice";
import { useAppSelector } from "@/hooks";
import { IPage } from "@/interfaces";
import { ReactNode, createContext, useEffect, useState   } from "react";
import { useDispatch } from "react-redux";
interface Prop{
    children : ReactNode
}
export const dispatcherconst = createContext<any>('');
export default function   DispatcherProvider ({children}:Prop)  {
    const [surhNumber, setsurhNumber] = useState<any[]|null>(null);
    const [surhValues, setSurhValues] = useState<any[]|null>(null);
    const [sideBar, setSideBar] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [currentVerse, setCurrentVerse] = useState<IPage|null>(null);
    const [sideBarVerse, setSideBarVerse] = useState<number>(0);

    
    const [currentChapter,setCurrentChapter] = useState<any[]|null>(null)
    const {juzs,chapter}=useAppSelector(store=>store.reChapters)
    const dispatch = useDispatch<any>()
    console.log(chapter)


const chapterVoiseSegments = async (reciterId:string,chapterId:string ,segments:boolean  ) => {
  try {
      const response = await fetch(`https://api.qurancdn.com/api/qdc/audio/reciters/${reciterId}/audio_files?chapter=${chapterId}&segments=${segments}`);
      if (!response.ok) {
          throw new Error('Failed to fetch audio files');
      }
      const data = await response.json();
      // console.log('resolved', data);
      return data;
  } catch (error) {
      console.error('Error fetching audio files:', error);
      throw error; // Re-throwing the error for further handling, if needed.
  }
};


useEffect(()=>{
  dispatch(fetchChapters())
  dispatch(fetchJuzs())
 
},[dispatch])
useEffect(() => {
  // Check if data has already been fetched

  // If data has not been fetched, fetch it
  if (juzs.data.length !== 0) {
    // console.log(juzs)
    const keyss = [];
    const Valuess = [];
    for (let i = 0; i < 30; i++) {
      const surhKeys: string[] = Object.keys(juzs.data[i].verse_mapping);
      const surhValuess = Object.values(juzs.data[i].verse_mapping)
      // const parsedValues= surhValues.map((str:any)=>parseInt(str,10))
      // Parse each key to integer using parseInt
      const parsedKeys = surhKeys.map((str: any) => parseInt(str, 10));
      keyss.push(parsedKeys);
      Valuess.push(surhValuess)
    }
    setsurhNumber(keyss);
    setSurhValues(Valuess)
    
    // Set flag in local storage to indicate data has been fetched
  }
}, [juzs]);

return <dispatcherconst.Provider value={{surhNumber,setsurhNumber,surhValues,chapter,setSideBar,sideBar,showNavbar,setShowNavbar,currentChapter,setCurrentChapter,currentVerse,setCurrentVerse,sideBarVerse, setSideBarVerse,chapterVoiseSegments}} >
    {children}
</dispatcherconst.Provider>
}