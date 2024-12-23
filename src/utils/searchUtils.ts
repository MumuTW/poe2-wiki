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
  if (classes) {
    classes.forEach(classInfo => {
      if (classInfo.name.toLowerCase().includes(normalizedQuery) || 
          classInfo.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          id: classInfo.id,
          title: classInfo.name,
          content: classInfo.description,
          path: '/classes',
          category: '職業',
          lastUpdated: new Date().toISOString()
        });
      }
    });
  }

  // 搜尋技能資料
  if (skills) {
    skills.forEach(skill => {
      if (skill.name.toLowerCase().includes(normalizedQuery) || 
          skill.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          id: skill.id,
          title: skill.name,
          content: skill.description,
          path: '/skills',
          category: '技能',
          lastUpdated: new Date().toISOString()
        });
      }
    });
  }

  // 搜尋遊戲基礎
  if (damageTypes) {
    damageTypes.forEach(damageType => {
      if (damageType.name.toLowerCase().includes(normalizedQuery) || 
          damageType.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          id: `damage-type-${damageType.name}`,
          title: damageType.name,
          content: damageType.description,
          path: '/basics',
          category: '傷害類型',
          lastUpdated: new Date().toISOString()
        });
      }
    });
  }

  // 搜尋輿圖基礎
  if (atlasBasicsData?.miniMechanics) {
    atlasBasicsData.miniMechanics.forEach(mechanic => {
      if (mechanic.name.toLowerCase().includes(normalizedQuery) || 
          mechanic.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          id: `atlas-basics-${mechanic.name}`,
          title: mechanic.name,
          content: mechanic.description,
          path: '/atlas-basics',
          category: '輿圖機制',
          lastUpdated: new Date().toISOString()
        });
      }
    });
  }

  // 搜尋大型輿圖機制
  if (atlasBasicsData?.majorMechanics) {
    atlasBasicsData.majorMechanics.forEach(mechanic => {
      if (mechanic.name.toLowerCase().includes(normalizedQuery) || 
          mechanic.description.toLowerCase().includes(normalizedQuery)) {
        results.push({
          id: `atlas-major-${mechanic.name}`,
          title: mechanic.name,
          content: mechanic.description,
          path: '/atlas-basics',
          category: '大型輿圖機制',
          lastUpdated: new Date().toISOString()
        });
      }
    });
  }

  // 搜尋輿圖天賦
  if (atlasTreeData?.description?.toLowerCase().includes(normalizedQuery)) {
    results.push({
      id: 'atlas-tree-introduction',
      title: atlasTreeData.title,
      content: atlasTreeData.description,
      path: '/atlas-tree',
      category: '輿圖天賦',
      lastUpdated: new Date().toISOString()
    });
  }

  return results;
};
