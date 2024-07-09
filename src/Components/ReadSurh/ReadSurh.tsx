
// // import AutoSizer from "react-virtualized-auto-sizer"
// import { ChapterInfo, IPage } from "@/interfaces"
// import { baseUrl } from "../apis"
// import ReadingRow from "../Row/ReadingRow";


// type Props = {
//     chapter: ChapterInfo;
//     surhNum: string
// }

// async function ReadSurh({ chapter, surhNum }: Props) {

//     const getPagesData = async () => {
//         const promises = [];
//         // Loop through each page and create a promise for fetching its data
//         for (let i = chapter.pages[0]; i <= chapter.pages[chapter.pages.length - 1]; i++) {
//             promises.push(fetch(`${baseUrl}/verses/by_page/${i}?word_fields=text_uthmani&words=true&audio=7`).then(response => response.json()));
//         }
//         const results = await Promise.all(promises);
//         return results;
//     }

//     const mergeVerses = async () => {
//         const pages = await getPagesData()
//         // console.log(pages)
//         const verses = pages.flatMap(page => page.verses)
//         // console.log(verses)
//         return verses
//     }
//     async function filterdVerses() {
//         const verses = await mergeVerses();
//         console.log(verses)
//         const stratIndex = verses.findIndex(verse => verse.verse_number == 1)
//         const lastIndex = verses.findIndex(verse => verse.verse_key == `${surhNum}:${chapter.verses_count}`)
//         // console.log(verses.findIndex(verse => verse.verse_number == chapter.verses_count))
//         const filterd = verses.slice(stratIndex, lastIndex)
//         console.log(lastIndex)
//         console.log(filterd.length, "filtered")
//         return filterd
//     }

//     const filterd = await filterdVerses();



//     return (
//         <div className=" h-dvh">

//             <ReadingRow filterd={filterd} />
//         </div>

//     )
// }

// export default ReadSurh