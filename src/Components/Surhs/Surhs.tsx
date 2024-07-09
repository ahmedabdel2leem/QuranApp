"use client"
import {  useAppSelector } from "@/hooks";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import Surh from "../Surh/Surh";
import { ChapterInfo } from "@/interfaces";
import { fetchChapters } from "@/app/redux/chaptersSlice";
import Link from "next/link";
import { dispatcherconst } from "../provider";




function Surhs() {
const {chapter} = useContext(dispatcherconst)
 
 return <>
 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 ">
    { chapter.data.map((chapter:ChapterInfo)=>
    <Link key={chapter.id} href={`${chapter.id}`}  >
    <Surh  chapter={chapter} />
    </Link>
    )}
  </div>
  </>
}

export default Surhs;