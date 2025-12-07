import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaThreads } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';


const socialLinks = [
  { Icon: FaFacebookF, url: '#', label: 'Facebook', hasCircle: true },
  { Icon: FaXTwitter, url: '#', label: 'X (Twitter)', hasCircle: true },
  { Icon: FaInstagram, url: '#', label: 'Instagram', hasCircle: true },
  { Icon: FaWhatsapp, url: '#', label: 'WhatsApp', hasCircle: false },
  { Icon: FaThreads, url: '#', label: 'Thread', hasCircle: true },
  { Icon: FaTiktok, url: '#', label: 'TikTok', hasCircle: true },
];

const SocialLogo = () => {
  return (
      <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className=" flex flex-wrap items-center justify-center text-white transition duration-300 ease-in-out hover:text-gray-300"
          >

            {link.hasCircle ? (
              <div 
                className="
                  border border-white rounded-full 
                  p-1.5 w-8 h-8 sm:w-10 sm:h-10 
                  flex items-center justify-center 
                  hover:border-gray-300
                "
              >
                <link.Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
            ) : (
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <link.Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
              </div>
            )}
          </a>
        ))}
      </div>
    
  );
};

export default SocialLogo;