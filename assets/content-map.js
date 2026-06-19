const contentSections = [
  {
    id: 'sports',
    title: '体育赛事',
    tags: ['乐鱼体育', '足球', '篮球', '网球', '电竞'],
    description: '涵盖主流体育赛事及实时比分'
  },
  {
    id: 'live',
    title: '直播频道',
    tags: ['乐鱼体育', '高清直播', '赛事回放', '解说'],
    description: '多路高清直播流，支持回放与集锦'
  },
  {
    id: 'promotions',
    title: '优惠活动',
    tags: ['乐鱼体育', '首充礼包', '返水', '每日签到'],
    description: '最新优惠与会员专属福利'
  },
  {
    id: 'guide',
    title: '新手指南',
    tags: ['乐鱼体育', '注册教程', '如何投注', '规则说明'],
    description: '帮助新用户快速上手'
  }
];

const siteInfo = {
  name: '乐鱼体育',
  url: 'https://portal-site-leyu.com.cn',
  version: '2.3.1'
};

function filterSectionsByKeyword(keyword) {
  if (!keyword || keyword.trim() === '') return contentSections;
  const lowerKeyword = keyword.toLowerCase().trim();
  return contentSections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerKeyword);
    const descMatch = section.description.toLowerCase().includes(lowerKeyword);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword));
    return titleMatch || descMatch || tagMatch;
  });
}

function getSectionById(id) {
  return contentSections.find(section => section.id === id) || null;
}

function getAllTags() {
  const tagSet = new Set();
  contentSections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function searchContent(query) {
  const results = filterSectionsByKeyword(query);
  return results.map(section => ({
    title: section.title,
    description: section.description,
    tags: section.tags,
    url: `${siteInfo.url}/${section.id}`
  }));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    contentSections,
    siteInfo,
    filterSectionsByKeyword,
    getSectionById,
    getAllTags,
    searchContent
  };
}