


import { FaSearch } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { useTranslation } from "../../providers/TranslationProvider";


const Navbar = () => {
    const {language,setLanguage,translate} = useTranslation();



  return (
    <div className={`fixed top-0 ${language === 'ar' ? 'right-64 left-0' : 'left-64 right-0'} z-50 bg-black px-6 py-4 shadow-lg`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-white">{translate('navbar.overview')}</h2>
        </div>
        <div className="flex items-center space-x-4">
           <div className="relative">
            <FaSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder={translate('navbar.search')}
              className="pl-10 pr-4 py-1 border text-black bg-[#F5F7FACC] border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:border-transparent"
            />
          </div>
          <IoNotificationsCircle className="w-10 h-10 text-primary cursor-pointer hover:text-teal-600 transition-colors" />
          {/* <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
            <FaUser className="w-5 h-5 text-gray-600" />
          </div> */}
          {/* <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          onClick={() => {
            setLanguage(language === 'ar' ? 'en' : 'ar');
          }}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;