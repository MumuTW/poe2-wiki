import { translations } from '../data/translations';
import { classes, skills } from '../data/game/character';
import { damageTypes } from '../data/game/basics';
import { atlasBasicsData, atlasTreeData } from '../data/game/progression';

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
  category: string;
  lastUpdated: string;
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
        id: classInfo.id,
        title: classInfo.name,
        content: classInfo.description,
        path: '/classes',
        category: '職業',
        lastUpdated: classInfo.lastUpdated
      });
    }
  });

  // 搜尋技能資料
  skills.forEach(skill => {
    if (skill.name.toLowerCase().includes(normalizedQuery) || 
        skill.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: skill.id,
        title: skill.name,
        content: skill.description,
        path: '/skills',
        category: '技能',
        lastUpdated: skill.lastUpdated
      });
    }
  });

  // 搜尋遊戲基礎
  damageTypes.forEach(damageType => {
    if (damageType.name.toLowerCase().includes(normalizedQuery) || 
        damageType.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: damageType.id,
        title: damageType.name,
        content: damageType.description,
        path: '/basics',
        category: '傷害類型',
        lastUpdated: damageType.lastUpdated
      });
    }
  });

  // 搜尋翻譯對照
  translations.forEach(translation => {
    if (translation.english.toLowerCase().includes(normalizedQuery) || 
        translation.chinese.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: translation.id,
        title: `${translation.english} - ${translation.chinese}`,
        content: translation.notes || '',
        path: '/translation',
        category: translation.category,
        lastUpdated: translation.lastUpdated
      });
    }
  });

  // 搜尋輿圖基礎
  // 基礎規則
  atlasBasicsData.basicRules.rules.forEach(rule => {
    if (rule.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: 'atlas-basics-rules',
        title: '輿圖基礎規則',
        content: rule,
        path: '/atlas-basics',
        category: '輿圖系統',
        lastUpdated: atlasBasicsData.lastUpdated
      });
    }
  });

  // 大型機制
  atlasBasicsData.majorMechanics.forEach(mechanic => {
    if (mechanic.name.toLowerCase().includes(normalizedQuery) || 
        mechanic.description.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: mechanic.id,
        title: mechanic.name,
        content: mechanic.description,
        path: '/atlas-basics',
        category: '輿圖機制',
        lastUpdated: mechanic.lastUpdated
      });
    }
  });

  // 搜尋輿圖天賦
  if (atlasTreeData.introduction.description.toLowerCase().includes(normalizedQuery)) {
    results.push({
      id: 'atlas-tree-introduction',
      title: '輿圖天賦系統',
      content: atlasTreeData.introduction.description,
      path: '/atlas-tree',
      category: '輿圖天賦',
      lastUpdated: atlasTreeData.lastUpdated
    });
  }

  return results;
};
