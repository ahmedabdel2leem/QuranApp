// "use client"
// import { ReactNode, useState } from "react"
// import Surhs from "../Surhs/Surhs"
// import Jusz from "../Juzs/Jusz"
// import { Tab } from "@headlessui/react"
// import Surh from "../Surh/Surh"

// type Props = {

// }

// function JuzsSurhsWrapper({ }: Props) {
//   function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
//   }
//   const [Tap, setTap] = useState<boolean>(false)
//   const reading: string[] = ["Surh", "Juzs"]
//   const components: ReactNode[] = [<Surhs />, <Jusz />]
//   return <>
//     <div className=" max-w-6xl  mx-auto py-16 px-4 sm:px-[3rem] ">
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 ">
//           {reading.map((category, i) => (
//             <div key={i}>
//               <Tab

//                 className={({ selected }) =>
//                   classNames(
//                     ' text-black p-2.5 text-sm font-medium leading-5',
//                     'ring-white/60  ring-offset-transparent-400 focus:outline-none ',
//                     selected
//                       ? 'bg-white text-primary border-b-[2.5px] border-primary'
//                       : 'text-green-900 hover:bg-white/[0.12] hover:text-primary'
//                   )
//                 }
//               >
//                 {category}
//               </Tab>
//             </div>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {components.map((compo: any, i: number) =>
//             <div key={i}>
//               <Tab.Panel >
//                 {compo}
//               </Tab.Panel>
//             </div>

//           )}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   </>
// }
// export default JuzsSurhsWrapper;
