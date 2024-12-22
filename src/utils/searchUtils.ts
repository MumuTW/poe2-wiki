import { translations } from '../data/translations';
import { classes, skills } from '../data/game/character';
import { damageTypes } from '../data/game/basics';
import { atlasBasicsData, atlasTreeData } from '../data/game/progression';

export interface SearchResult {
  title: string;
  content: string;
  category: string;
  path: string;
}

export const searchAllContent = (query: string): SearchResult[] => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  // 搜尋職業資料
  classes.forEach(classInfo => {
    if (classInfo.name.toLowerCase().includes(normalizedQuery) || 
        classInfo.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: classInfo.name,
        content: classInfo.description,
        category: '職業',
        path: '/classes'
      });
    }
  });

  // 搜尋技能資料
  skills.forEach(skill => {
    if (skill.name.toLowerCase().includes(normalizedQuery) || 
        skill.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: skill.name,
        content: skill.description,
        category: '技能',
        path: '/skills'
      });
    }
  });

  // 搜尋遊戲基礎
  damageTypes.forEach(damageType => {
    if (damageType.name.toLowerCase().includes(normalizedQuery) || 
        damageType.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: damageType.name,
        content: damageType.description,
        category: '傷害類型',
        path: '/basics'
      });
    }
  });

  // 搜尋翻譯對照
  translations.forEach(translation => {
    if (translation.english.toLowerCase().includes(normalizedQuery) || 
        translation.chinese.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: `${translation.english} - ${translation.chinese}`,
        content: translation.notes || '',
        category: translation.category,
        path: '/translation'
      });
    }
  });

  // 搜尋輿圖基礎
  // 基礎規則
  atlasBasicsData.basicRules.rules.forEach(rule => {
    if (rule.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: '輿圖基礎規則',
        content: rule,
        category: '輿圖系統',
        path: '/atlas-basics'
      });
    }
  });

  // 大型機制
  atlasBasicsData.majorMechanics.forEach(mechanic => {
    if (mechanic.name.toLowerCase().includes(normalizedQuery) || 
        mechanic.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: mechanic.name,
        content: mechanic.description,
        category: '輿圖機制',
        path: '/atlas-basics'
      });
    }
  });

  // 搜尋輿圖天賦
  if (atlasTreeData.introduction.description.toLowerCase().includes(normalizedQuery)) {
    results.push({
      title: '輿圖天賦系統',
      content: atlasTreeData.introduction.description,
      category: '輿圖天賦',
      path: '/atlas-tree'
    });
  }

  return results;
};
