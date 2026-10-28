'use strict';
const translations = {
  navAbout:'关于',navResearch:'研究',navExperience:'经历',navNotes:'笔记',eyebrow:'研究 · 工程 · 探索',
  statement:'让智能体学会<br>推理、搜索，<em>并付诸行动。</em>',
  bio:'我目前就职于<strong>阿里淘天</strong>，关注智能体、大语言模型与实际系统的交叉。此前在<strong>腾讯混元</strong>从事大模型相关工作，硕士毕业于<strong>南京大学应用数学专业</strong>。',
  getInTouch:'联系我',viewResearch:'探索我的工作',location:'中国 · 杭州',degree:'应用数学硕士',visualCaption:'以更好的反馈，构建更好的智能体。',journey:'一路走来',ali:'阿里淘天',tencent:'腾讯混元',nju:'南京大学',
  focusLabel:'研究方向',focusTitle:'我关注的问题<span class="accent">。</span>',focusIntro:'连接学习算法与实际系统，让研究走向可用。',
  focus1:'智能体后训练',focus1Text:'通过监督微调、强化学习与奖励建模，提升智能体的推理与工具使用能力。',focus2:'搜索与工具使用',focus2Text:'面向真实任务的深度搜索、函数调用与工具路由。',focus3:'评测与数据',focus3Text:'通过可验证反馈、合成数据与细粒度错误归因，构建持续改进的数据闭环。',
  researchLabel:'学术研究',researchTitle:'精选研究<span class="accent">。</span>',researchNote:'工具智能、高效推理<br>与稳健的多模态学习。',paper1Contribution:'共同第一作者 · 同等贡献',paper1Topic:'工具使用 · 评测',paper2Topic:'大模型系统 · 推理效率',paper3Topic:'多模态学习 · 稳健性',
  paper1Summary:'通过结构化决策与细粒度错误归因，诊断工具调用在何处、因何失败。',paper2Summary:'利用 KV 缓存扰动对模型输出的影响衡量层间敏感度，分配缓存预算，提升长上下文推理效率。',paper3Summary:'探索注意力头的模态专业化，以提升输入模态缺失时的虚假新闻检测稳健性。',paper3Status:'研究稿件',manuscriptNote:'共同第一作者 · 简历中标注为在投。',
  experienceLabel:'工作经历',experienceTitle:'从研究到实践<span class="accent">。</span>',aliDate:'2026 — 至今',aliSub:'智能体 · 大模型系统 · 多模态学习',aliText:'在杭州探索人工智能研究，构建实用的智能系统。',tencentSub:'大语言模型部',tencentText:'参与 Deep Search 奖励模型、函数调用监督信号与评测系统建设，将线上错误分析接入大模型后训练闭环。',
  project1:'Deep Search · 奖励建模',project1Text:'构建面向证据核验、幻觉归因与 Rubric 评分的训练数据自动化链路，参与基于 SFT 与 GRPO 的奖励模型后训练。',project2:'工具使用 · 监督与归因',project2Text:'作为项目 Owner 建设函数调用监督信号与插件评测链路，覆盖调用意图、工具路由、参数生成及结果质量。',project3:'数据飞轮 · 评测闭环',project3Text:'搭建生成侧与召回侧 Bad Case 自动挖掘流程，将高置信错误归因转化为定向训练与评测数据。',
  educationLabel:'教育背景',masters:'应用数学 · 硕士',mathSchool:'数学学院',nuc:'中北大学',bachelors:'信息与计算科学 · 本科',mathNote:'以数学为基础，<br>以系统为思维。',
  notesLabel:'公开学习与分享',notesTitle:'工作台上的思考<span class="accent">。</span>',notesIntro:'每日一题，把大模型知识拆成一千个切面。记录研究想法、系统设计与工程取舍。',readNotes:'翻开这本笔记 <svg class="external-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M4 4h8v8"/></svg>',note1:'DeepSearch：Query 筛选与高难题构造',note2:'混合 RL 数据整合与多教师在线蒸馏',
  awardsLabel:'荣誉与竞赛',awardsTitle:'一些成长的足迹<span class="accent">。</span>',award1:'百度生成式 AI 大模型竞赛',award1Detail:'二等奖 · 14 / 837',award2:'Kaggle 竞赛',award2Detail:'大模型竞赛银牌 · 机器学习竞赛铜牌',award3:'科大讯飞星火大模型实体识别挑战赛',award3Detail:'第四名',award4:'数学建模与数学竞赛',award4Detail:'全国大学生数学建模竞赛全国二等奖（2020）· 美国大学生数学建模竞赛 M 奖（2021）',
  contactLabel:'保持联系',contactTitle:'好想法，<br>从一次<em>交流</em>开始。',contactText:'欢迎交流智能体、学习算法，以及连接两者的系统。',copyEmail:'复制邮箱',outsideWork:'键盘之外：网球、羽毛球、游泳，还有攀岩。',footer:'保持好奇，持续探索。',backTop:'回到顶部 ↑'
};
Object.assign(translations, {"cvProject1": "Deep Search 奖励模型后训练 · 核心成员", "cvProject1Body": "搭建训练数据生产 Agent，完成回答拆解、证据核验、错误归因与评分理由生成；构造 2 万条可验证 SFT 样本，完成 Qwen3-32B GRM 冷启动及 GRPO 训练。GRM 在 600-case Benchmark 上达到 78% Accuracy；Rubric 系统在 150 道题上与人标一致率达 80%。奖励信号支撑 RL 实验模型相较 base 模型 GSB 提升 20 个点。", "cvProject2": "大模型数据飞轮 · 核心成员", "cvProject2Body": "构建生成侧与召回侧双链路 Bad Case 自动挖掘系统。通过多轮判别与分类 Agent 识别意图偏差、事实错误、信息过时、回答不完整和逻辑混乱；区分真实召回缺失与模型保守拒答，将高置信样本回流 RAG 召回与 SFT/RLHF 训练。", "cvProject3": "元宝插件错误归因与模型迭代 · 项目 Owner", "cvProject3Body": "围绕是否需要插件、工具路由、参数生成和返回 Doc 质量建设四层诊断链路。端到端评分与人标一致率达 89%，归因一致率从 50% 提升至 84%；Rubric 生产与人标一致率达 88%，准召评估 Agent 达 95%+。高置信样本回流训练后，插件出口 Doc 内容质量≥1 分率从 81% 提升至 86%，地图类插件提升 10 个百分点。", "cvProject4": "Function Calling 监督信号与评测 · 项目 Owner", "cvProject4Body": "主导 query 意图判断、插件选择、参数生成、真实调用与结果评分的 label/score/reason 自动化生产。设计每插件 100 正例、50 负例专项评测集。在覆盖 92 个插件的 300q 样本中，选插多模型投票 label 完全匹配率达 92%+（覆盖率 62%），填参准确率达 91.41%（覆盖率 89%）；相关题库人工标注成本节省 58%。", "cvSkills": "专业技能", "cvSkillsBody": "Python · PyTorch · Paddle；SFT、奖励建模、RLHF、LoRA；PPO、DPO、GRPO、OPD；Function Calling、Tool Routing、Rubric / Verifier / Judge、轨迹生产与合成数据闭环。"});
const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(nodes.map(node => [node, node.innerHTML]));
const languageButton = document.querySelector('.language-toggle');
let language = 'en';
function setLanguage(next) {
  language = next === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  nodes.forEach(node => {node.innerHTML = language === 'zh' ? translations[node.dataset.i18n] ?? english.get(node) : english.get(node);});
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label',language === 'zh' ? 'Switch to English' : '切换到中文');
  document.title = language === 'zh' ? '徐業釗 · Julius — 智能体、学习与系统' : 'Yezhao Xu · Julius — Agents, Learning & Systems';
  try { localStorage.setItem('yx-language', language); } catch (_) { /* Storage may be disabled. */ }
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try {if (localStorage.getItem('yx-language') === 'zh') setLanguage('zh');} catch (_) { /* Default to English. */ }
document.getElementById('year').textContent = new Date().getFullYear();
const toast = document.getElementById('toast');
let toastTimer;
function notify(message) {toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2500);}
document.getElementById('copy-email').addEventListener('click', async () => {
  const email='zyx20002018@163.com';
  try {await navigator.clipboard.writeText(email);notify(language==='zh'?'邮箱已复制':'Email copied');}
  catch (_) {
    const range=document.createRange();range.selectNodeContents(document.querySelector('.contact-email'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
    notify(language==='zh'?'请手动复制选中的邮箱':'Select and copy the email address');
  }
});
if ('IntersectionObserver' in window) {
  const links=[...document.querySelectorAll('nav a')];
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
  ['about','research','experience','notes'].forEach(id=>observer.observe(document.getElementById(id)));
}
