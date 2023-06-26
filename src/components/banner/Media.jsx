import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNode , FaJava} from "react-icons/fa";
import { SiMongodb,  } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://www.facebook.com/profile.php?id=100031325293941&mibextid=ZbWKwL'>
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>
           <a href=' https://twitter.com/Arman_Ali_01?s=09'>
           <span className="bannerIcon">
              <FaTwitter />
            </span>
           </a>
           <a href='https://www.linkedin.com/in/arman-ali-8383081ab'>
           <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
           </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaNode/>
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media