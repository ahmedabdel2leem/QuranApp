"use client";

import { useContext, useEffect, useState } from "react";
import { dispatcherconst } from "../provider";
import Link from "next/link";
import { ChapterInfo } from "@/interfaces";
import { useParams, useSearchParams } from "next/navigation";
import { baseUrl } from "../apis";

type Props = {
   // this get the sepcific chapter
   // Schapter: ChapterInfo;
}

function SideBar({}: Props) {
   const params = useParams<{ tag: string; item: string,id:string }>()
   const searchParams = useSearchParams()
   const startingVerse = searchParams.get('startingVerse')
   const { sideBar, setSideBar, showNavbar, currentChapter,setSideBarVerse,currentVerse,sideBarVerse} = useContext(dispatcherconst)
   // this get all chapters
   const { chapter } = useContext(dispatcherconst);
   const newArray = Array.from(Array(chapter.verses_count).keys())

   return <>
      <aside id="default-sidebar " className={`${params.id && sideBar  ? " left-0" :"-left-[90%] md:-left-[20em]  "} w-[90%] md:w-80  z-50  px-4 fixed  top-0  border-r bg-white ease-in-out   max-h-screen  transition-all duration-300 `} aria-label="Sidebar">
         <div className="h-full  py-4 ">
            <div className={`sideBar_header flex items-center space-x-2 ${showNavbar ? 'mt-24' : 'mt-5'}  `}>
               <div className={`reading_field  flex flex-1  justify-around rounded-3xl bg-gray-100 py-[4px] px-1 text-[.83rem]`}>
                  <button className="surh_switcher py-[.4rem] flex-1 rounded-3xl bg-white shadow">Surah</button>
                  <button className="surh_switcher py-[.4rem] flex-1  rounded-3xl ">Juz</button>
                  <button className="surh_switcher py-[.4rem] flex-1 rounded-3xl ">Page</button>
               </div>
               <button onClick={()=>setSideBar(false)} className="hideSideBar text-black px-2 py-2 rounded-full bg-slate-100">
                  <span className="sr-only">close</span>
                  <span>
                  <svg viewBox="0 0 24 24" fill="none" width={20} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                  </span>
               </button>
            </div>

            <div className={`flex space-x-4 mt-7 ${sideBar?'opacity-100 visible' : 'opacity-0 invisible'}`}>
               <div className="sideBar_searchName w-44 border-r pr-3 text-gray-600">
                  <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-none bg-gray-100" type="text" placeholder="Search Surah" />
                  <div className={`sideNav_surhs  mt-3  overflow-y-scroll ${showNavbar ? 'max-h-[55vh]' : 'max-h-[72vh]'} `}>
                     <ul className="space-y-2">
                        {chapter.data.map((chapter: ChapterInfo) =>
                           <li key={chapter.id} className={` py-2 px-3 mx-2 text-sm text-gray-600  ${chapter.id == currentChapter?.id ? 'bg-gray-100 rounded-md font-bold' : '' } `}>
                              <Link className="space-x-2" onClick={()=>setSideBarVerse(0)} href={`${chapter.id}`}>
                                 <span>{chapter.id}</span>
                                 <span>{chapter.name_simple}</span>
                              </Link>
                           </li>
                        )}
                     </ul>
                  </div>
               </div>
               <div className="sideBar_searchVerse w-20  ">
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-none bg-gray-100" type="text" placeholder="Verse" />
                  <ul className={`mt-3 overflow-y-scroll  ${showNavbar ? 'max-h-[55vh]' : 'max-h-[72vh]'}  text-gray-600 font-medium space-y-5`}>
                     {Array.from(Array(currentChapter?.verses_count).keys()).map(verseNum =>

                        <li key={verseNum} className="w-full ">
                           <Link className={`inline-block w-full  rounded-md pl-2 py-1 ${startingVerse && sideBarVerse-1 == verseNum ? 'bg-gray-100' : ''}`} onClick={()=>setSideBarVerse( verseNum+1 )}  href={`?startingVerse=${verseNum+1}`}>
                              {verseNum+1}
                           </Link>
                        </li>
                     )}

                  </ul>
                  
               </div>
            </div>

         </div>
      </aside>
   </>

}

export default SideBar