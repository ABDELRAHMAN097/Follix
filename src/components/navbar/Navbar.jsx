


import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "../../providers/TranslationProvider";


const Navbar = () => {
    const {language,setLanguage,translate} = useTranslation();



  return (
    <div className={`fixed top-0 ${language === 'ar' ? 'right-64 left-0' : 'left-64 right-0'} z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-lg`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900">{translate('navbar.overview')}</h2>
          <div className="relative">
            <FaSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={translate('navbar.search')}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-teal-600 transition-colors" />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
            <FaUser className="w-5 h-5 text-gray-600" />
          </div>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          onClick={() => {
            setLanguage(language === 'ar' ? 'en' : 'ar');
          }}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;