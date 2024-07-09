"use client"
import { useAppSelector } from "@/hooks"
import { useContext } from "react"
import Surh from "../Surh/Surh"
import { dispatcherconst } from "../provider"
import Link from "next/link"

type Props = {

}

function Jusz({ }: Props) {
  const { chapter } = useAppSelector(store => store.reChapters)
  const { surhNumber, surhValues } = useContext(dispatcherconst);
  // console.log(surhNumber)
  console.log(surhValues, 'surhVLaues', surhNumber, chapter)


  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3" >

        {surhNumber && surhNumber.map((keys: number[], i: number) => <div key={i} className=" inline-block w-full bg-slate-100 p-4 rounded-lg mb-4">
          <div className="juHeader flex justify-between" >
            <a>juz : {i + 1}</a>
            <a>read juz</a>

          </div>
          <div className=" space-y-2">
            {
              keys.map((key: number) =>
                // {console.log(chapter.data[key-1].id)}
                <Link href={`${chapter.data[key - 1].id}/${chapter.data[key - 1].pages.join('-')}`} key={chapter.data[key - 1].id}  >
                  <Surh chapter={chapter.data[key - 1]} />
                </Link>

              )
            } </div>

        </div>)}

      </div>

    </>
  )
}

export default Jusz