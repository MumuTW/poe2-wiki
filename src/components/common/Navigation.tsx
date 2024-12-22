import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: '遊戲基礎',
      items: [
        { name: '基礎機制', path: '/basics' },
        { name: '新手指南', path: '/beginner' },
        { name: '精魂系統', path: '/spirit' },
      ]
    },
    {
      title: '角色構建',
      items: [
        { name: '職業總覽', path: '/classes' },
        { name: '技能列表', path: '/skills' },
        { name: '升華系統', path: '/ascendancy' },
        { name: '天賦樹', path: '/passive-tree' },
      ]
    },
    {
      title: '遊戲進度',
      items: [
        { name: '主線任務', path: '/story' },
        { name: '輿圖系統', path: '/atlas-basics' },
        { name: '輿圖天賦', path: '/atlas-tree' },
      ]
    },
    {
      title: '其他資源',
      items: [
        { name: '中英對照', path: '/translation' },
        { name: '更新日誌', path: '/patch-notes' },
      ]
    }
  ];

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              POE2 Wiki
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((category) => (
                <div key={category.title} className="relative group">
                  <button className="px-3 py-2 text-gray-300 hover:text-white">
                    {category.title}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((category) => (
              <div key={category.title} className="space-y-1">
                <div className="px-3 py-2 text-gray-300 font-medium">
                  {category.title}
                </div>
                {category.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
