"use client"
import { useContext, useState } from "react"
import logo from '../../assets/arcticons_al-quran-indonesia.png'
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { dispatcherconst } from "../provider"
type Props = {

}

function Navbar({}: Props) {
  const {showNavbar} =  useContext(dispatcherconst)
  const params = useParams<{ tag: string; item: string,id:string }>()

  
  // console.log(+params.id)
  const [profile, setProfile] = useState(false)
  const [menu, setMenu] = useState(false)
  return <>
    <nav className={`navbar bg-white fixed ${showNavbar ? "top-0" : "-top-20"}  transition-[top] ease-in-out duration-[0.4s]   z-[999] ${+params.id > 0 || +params.id<604 ? "w-[calc(100%-10px)]" : "w-full" }`}>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button type="button" onClick={() => setMenu(!menu)} className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              {!menu ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
                :
                <svg className=" h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
          
          
          <div className="flex flex-1  items-center justify-center  sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <Image className="h-10 w-auto" src={logo} alt="Your Company" />
              <span className="text-xl font-mono ml-3 font-bold">Quran</span>
            </div>
            {/* lg menu */}
            <div className="hidden sm:ml-16 mr-11 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="/" className="nav-link rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                <Link href="/reciters" className="nav-link rounded-md px-3 py-2 text-sm font-medium">Reciters</Link>
                <Link href="#" className="nav-link rounded-md px-3 py-2 text-sm font-medium">Podcast</Link>
              </div>
            </div>
          </div>
          {/* input  */}
          <div className="hidden lg:block input w-full  flex-1 relative  before:transform before:top-[60%] before:left-1 before:-translate-y-1/2 before:content-search before:max-w-5 before:inline-block before:absolute ">
            <input className="w-full py-1 border border-2 focus:outline-0 pl-6 bg-slate-50 rounded-lg" type="text" />
          </div>
              {/* sittengs and notification */}
          <div className="absolute inset-y-0 right-0 ml-auto flex items-center pr-2 sm:static sm:inset-auto  sm:ml-16 sm:pr-0">
            <button type="button" className="relative  rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <button type="button" className="relative mx-6   rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="settings"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
            </button>
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button onClick={() => setProfile(!profile)} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded={profile} aria-haspopup="true">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt={''} />
                </button>
              </div>

              {profile ? <div className="focus:opacity-100 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                {/* Active: "bg-gray-100", Not Active: "" */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
              </div> : null}

            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={` sm:hidden  ${menu ? 'h-full' : ''} `} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-primary text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" className="nav-link block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" className="nav-link block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" className="nav-link block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>

  </>
}

export default Navbar;