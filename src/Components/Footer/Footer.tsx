import Image from "next/image";
import logoimg from "../../assets/arcticons_al-quran-indonesia.png"
import Link from "next/link";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type Props = {
style:any
}

function Footer({style}: Props) {


  return <>
    <footer style={style}>
      <div className="line bg-slate-300 w-[90%] h-0.5 mx-auto m-4"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-5 p-5">
        <div className="left block mx-auto xl:m-0">
          <div className="md:flex items-center ms-auto block">
            <Image
              src={logoimg}
              object-fit="fill"
              className=''
              alt="quran picture slide"
              priority={false}
            />
            <div className="ml-2 ">
              <h1>quran</h1>
              <h4>quran website</h4>
            </div>
          </div>
          <p className="w-80 pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi iure nihil ipsam quasi repellendus reprehenderit veniam nesciunt vero eveniet.
          </p>
        </div>
        <div className="midd text-center grid grid-cols-3 justify-aroun ">
          <div className="navigate">
            <h3 className="text-[25px] font-semibold">navigate</h3>
            <ul>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>home</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>reciter</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"> <Link href='/'>podcast</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"> <Link href='/'>setting</Link></li>
            </ul>

          </div>
          <div className="quickLinks">
            <h3 className="text-[25px] font-semibold">quick links</h3>
            <ul>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"> <Link href='/'>about us</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>contact us</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>products</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>log in</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>sign up</Link></li>
              <li className="mb-3 text-lg font-medium hover:text-slate-500 uppercase"><Link href='/'>faq</Link></li>
            </ul>
          </div>

          <div className="popularLinks">
            <div className="suhaNam">
              <h3 className="text-[25px] font-semibold">popular links</h3>
              <ul>
                <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>al mulk</Link></li>
                <li className="mb-3 text-lg font-medium hover:text-slate-500"><Link href='/'>al kahf</Link></li>
                <li className="mb-3 text-lg font-medium hover:text-slate-500"> <Link href='/'>al paqraa</Link></li>
              </ul>
            </div>
            {/* <div className="follow">
              <h3 className="text-[25px] font-semibold">follow us</h3>
              <div className="icons grid lg:grid-cols-5 grid-cols-2">

                <Link href="/"><span ><FontAwesomeIcon icon={faFacebook} className="w-[40px] h-[100%] border p-2 rounded-[10px] text-blue-700  hover:bg-blue-200  border-gray-400 " /></span></Link>
                <Link href="/"><span><FontAwesomeIcon icon={faTwitter} className="w-[40px] h-[100%] border p-2 rounded-[10px] text-blue-500  hover:bg-blue-200  border-gray-400  " /></span></Link>
                <Link href="/"><span><FontAwesomeIcon icon={faYoutube} className="w-[40px] h-[100%] border p-2 rounded-[10px] text-red-700  hover:bg-red-200  border-gray-400  " /></span></Link>
                <Link href="/"><span><FontAwesomeIcon icon={faLinkedin} className="w-[40px] h-[100%] border p-2 rounded-[10px] text-gray-700  hover:bg-gray-200  border-gray-400  " /></span></Link>
                <Link href="/"><span><FontAwesomeIcon icon={faInstagram} className="w-[40px] h-[100%] border p-2 rounded-[10px] text-pink-500 hover:bg-pink-200  border-gray-400  " /></span></Link>
              </div>

            </div> */}
          </div>
        </div>
      </div>


    </footer>

  </>
}

export default Footer