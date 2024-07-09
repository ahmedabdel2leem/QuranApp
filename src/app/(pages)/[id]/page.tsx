
import ReadingRow from "@/Components/Row/ReadingRow"
import { baseUrl } from "@/Components/apis"
import SideBar from './../../../Components/SideBar/SideBar';

interface Props {
  params: { [id: string]: string },
}


async function readSurh({ params }: Props) {
  const getChapterDetails = async () => {
    const response = await fetch(`${baseUrl}/chapters/${params.id}`)
    const { chapter } = await response.json()
    return chapter
  }
  const chapter = await getChapterDetails()


  return (
  <>
    {/* <div className="overflow-x-hidden max-w-full h-dvh flex duration-300 transition"> */}
      <SideBar/>
      {/* <SideBar Schapter={chapter}/> */}
      {/* if the first div takes the whole width of the parent then it should works propaply but the width is go on top of the scrollbar 
    and for a custom scroll bar we can hide it using the custom width of scrollbar  */}
      {/* <div>
            position: fixed;
                top: 0;
                width: calc(100% - 10px);
                background: black;
                z-index: 10;
        }
        ahmed
      </div> */}
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit amet facilis quasi. Rem provident mollitia laboriosam similique obcaecati, asperiores odit adipisci explicabo nesciunt repellat delectus dolorem, veritatis recusandae sapiente.</div> */}
      <ReadingRow chapter={chapter} paramId={params.id} />
      {/* </div> */}
</>
  )
}

export default readSurh;