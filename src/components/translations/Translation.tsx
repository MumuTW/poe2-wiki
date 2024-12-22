import React, { useState } from "react";
import { translations, currencyTranslations } from "../../data/translations";

const Translation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(translations.map(t => t.category))];

  const filteredTranslations = selectedCategory === 'all'
    ? translations
    : translations.filter(t => t.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">翻譯對照表</h1>
      
      <div className="mb-6">
        <label className="mr-2">分類篩選：</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-700 text-white rounded px-3 py-1"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? '全部' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                英文
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                中文
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                分類
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                備註
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredTranslations.map((translation, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {translation.english}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {translation.chinese}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {translation.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {translation.notes || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold mb-6 mt-12">遊戲通貨翻譯對照</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 px-4 py-2">English</th>
            <th className="border border-gray-600 px-4 py-2">Chinese</th>
          </tr>
        </thead>
        <tbody>
          {currencyTranslations.map((currency, index) => (
            <tr key={index} className="odd:bg-gray-800 even:bg-gray-700">
              <td className="border border-gray-600 px-4 py-2">{currency.english}</td>
              <td className="border border-gray-600 px-4 py-2">{currency.chinese}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Translation;
