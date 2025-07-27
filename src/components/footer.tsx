import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
    return ( 
        <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-600/30 text-gray-600">
        <div className="w-4/5">
          <h1 className="font-bold text-xl text-primary"><span className="text-red-600">P</span>ortfolio<span className="text-red-600">.</span></h1>
          <p className="mt-6 text-sm">
            Portfolio is a platform that helps job seekers to create an online CV. Create stunning website in minutes. No coding needed. Just input your information and let Portfolio transform it to your professional website
          </p>
          <div>
          <p className="mt-6 text-sm">Follow Novus Technologies to be updated on the latest news</p>
            <div className="flex gap-4 mt-4">
              <a href={"https://www.whatsapp.com/channel/0029VaBbZhqI7BeNzi1rr41U"} className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition duration-600 ease-in-out">
                <MessageCircle/>
              </a>
              <a href={"https://www.instagram.com/novus.technologies/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"} className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition duration-600 ease-in-out">
                <Instagram/>
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium mb-5 text-red-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-red-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+237 671400346</p>
              <a href={"mailto:novustechnologies7@gmail.com"}>novustechnologies7@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm ">
      &copy; {new Date().getFullYear()} Novus Technologies All Right Reserved.
      </p>
    </footer>
     );
}
 
export default Footer;
