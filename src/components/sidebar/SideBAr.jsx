import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../providers/TranslationProvider';

const SideBAr = () => {
  const {language,translate} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarItems = [
    { label: translate('sidebar.overview'), icon: FaHome, active: true, path: '/' },
    { label: translate('sidebar.properties'), icon: FaBuilding, active: false, path: '/properties' },
    { label: translate('sidebar.content'), icon: FaFileAlt, active: false, path: '/content' },
    { label: translate('sidebar.requests'), icon: FaBell, active: false, path: '/requests' },
    { label: translate('sidebar.users'), icon: FaUser, active: false, path: '/users' },
    { label: translate('sidebar.supportSystem'), icon: FaTrash, active: false, path: '/support-system' },
  ];
    return (
        <div className={`fixed top-0 ${language === 'ar' ? 'right-0' : 'left-0'} bottom-0 z-40 w-64 bg-black shadow-lg`}>
                  {/* Logo placeholder */}
                 <div className="w-full px-6">
                   <div className="flex items-center justify-center space-x-3 mb-8 pb-4 border-b border-primary w-full">
                    <img 
                    className="w-38"
                    src="/public/images/logofollix.png" alt="follix-logo"/>
                  </div>
                 </div>
                <div className="p-6 pr-0 pt-0">
                  {/* Navigation */}
                  <nav className="space-y-2">
                    {sidebarItems.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-tl-lg rounded-bl-lg cursor-pointer transition-colors ${location.pathname === item.path
                            ? 'bg-primary text-white'
                            : 'text-white hover:text-black hover:bg-gray-100'
                          }`}
                        onClick={() => navigate(item.path)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
    );
};

export default SideBAr;