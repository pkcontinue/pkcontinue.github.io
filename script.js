'use strict';
const translations={
navAbout:'关于我',navExperience:'经历',navPapers:'论文',affiliation:'阿里淘天',location:'中国 · 杭州',notebookNote:'研究与工程笔记',aboutTitle:'关于我',
aboutText:'我是<strong>徐業釗（Yezhao Xu / Julius）</strong>，目前就职于<a href="https://www.alibabagroup.com/" target="_blank" rel="noopener noreferrer">阿里淘天</a>，此前在<strong>腾讯混元</strong>从事大模型后训练工作。2025 年获得<a href="https://www.nju.edu.cn/" target="_blank" rel="noopener noreferrer">南京大学</a>应用数学硕士学位。',
aboutResearch:'研究兴趣包括<strong>智能体、大模型后训练和工具使用</strong>，尤其关注奖励建模、深度搜索与评测。',
contactLine:'欢迎通过 <a href="mailto:zyx20002018@163.com">zyx20002018 [at] 163.com</a> 与我交流。',
interestsTitle:'研究方向',interest1:'智能体强化学习与奖励建模',interest2:'深度搜索与工具使用',interest3:'大模型评测与合成数据',experienceTitle:'工作经历',aliDate:'2026 – 至今',ali:'阿里淘天',aliWork:'智能体、大模型系统与多模态学习。',tencent:'腾讯混元 · 大语言模型部',tencentWork:'面向 Deep Search 与工具使用的大模型后训练。',educationTitle:'教育背景',nju:'南京大学',degree:'数学学院 · 应用数学硕士',papersTitle:'论文',paperNote:'* 表示同等贡献。以下包含预印本与研究稿件。',manuscript:'研究稿件 · 共同第一作者',awardsTitle:'荣誉与奖项',
award1:'<strong>百度生成式 AI 大模型竞赛</strong> — 二等奖（14 / 837）',award2:'<strong>Kaggle</strong> — 大模型竞赛银牌、机器学习竞赛铜牌',award3:'<strong>科大讯飞星火实体识别挑战赛</strong> — 第四名',award4:'<strong>数学建模竞赛</strong> — 全国大学生数学建模竞赛全国二等奖（2020）；美国大学生数学建模竞赛 M 奖（2021）',notesTitle:'技术笔记',notesText:'<a href="https://github.com/pkcontinue/thousand-faces-of-llm" target="_blank" rel="noopener noreferrer"><strong>千面 LLM</strong></a><br>以问题为线索，记录大模型研究与工程实践。',source:'网站源码'};
Object.assign(translations, {"navHonors": "荣誉与奖项", "footerContact": "欢迎联系：", "mathAwardsTitle": "数学竞赛与数学建模", "aiAwardsTitle": "人工智能与机器学习", "math2021": "<strong>2021 · 全国大学生数学竞赛：</strong>武汉大学全国总决赛三等奖，第 57 名。", "mcm2021": "<strong>2021 · 美国大学生数学建模竞赛（MCM）：</strong>M 奖（Meritorious Winner）。", "cumcm2020": "<strong>2020 · 全国大学生数学建模竞赛：</strong>全国二等奖。", "math2019": "<strong>2019 · 全国大学生数学竞赛：</strong>省一等奖，数学类全省第 4 名。"});
const nodes=[...document.querySelectorAll('[data-i18n]')];
const english=new Map(nodes.map(node=>[node,node.innerHTML]));
const languageButton=document.querySelector('.language-toggle');
let language='en';
function setLanguage(next){
 language=next==='zh'?'zh':'en';
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 nodes.forEach(node=>{node.innerHTML=language==='zh'?translations[node.dataset.i18n]??english.get(node):english.get(node);});
 languageButton.textContent=language==='zh'?'EN':'中文';
 languageButton.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
 const titles={about:['About Me','关于我'],publications:['Publications','论文'],honors:['Honors & Awards','荣誉与奖项']};
 const title=titles[document.body.dataset.page]||titles.about;
 document.title=(language==='zh'?title[1]+' | 徐業釗':title[0]+' | Yezhao Xu');
 try{localStorage.setItem('yx-language',language);}catch(_){/* Storage is optional. */}
}
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
try{if(localStorage.getItem('yx-language')==='zh')setLanguage('zh');}catch(_){/* Use English by default. */}
document.getElementById('year').textContent=new Date().getFullYear();
