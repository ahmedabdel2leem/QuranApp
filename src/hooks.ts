"use client"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/redux/store";
import { useEffect } from "react";
import { baseUrl } from "./Components/apis";



export const useAppDispatch : ()=>AppDispatch =useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export const  useFetch = async(endpoint:string)=>{
    //    console.log('hello')
        const response = await fetch(baseUrl+endpoint ,{ cache: 'force-cache' });
       const data = await   response.json();
        return data
    }

    


// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsPending(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(response.statusText);
//         const json = await response.json();
//         setIsPending(false);
//         setData(json);
//         setError(null);
//       } catch (error) {
//         setError(`${error} Could not Fetch Data `);
//         setIsPending(false);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, isPending, error };
// };