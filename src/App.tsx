/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Bot, 
  Cpu, 
  History, 
  TrendingUp, 
  LineChart, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  Wallet,
  Globe,
  Settings,
  LayoutDashboard,
  Box,
  MessageSquare,
  FileText,
  Calendar,
  Star,
  Clock,
  AlertCircle,
  Menu,
  X,
  ShoppingCart,
  TrendingDown,
  Database,
  MapPin,
  Utensils,
  Activity,
  UserCheck,
  Building2,
  User,
  Target,
  Rocket,
  Phone
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section className={`py-20 px-6 ${className}`} id={id}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [activeCardId, setActiveCardId] = React.useState("降低人力成本");
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { id: "why-ai", label: "一、为什么要用AI？" },
    { id: "guizhou-practice", label: "二、“黄小西”AI旅游服务生态" },
    { id: "positioning", label: "三、酒店智能体产品定位" },
    { id: "values", label: "四、智能体价值" },
    { id: "cases", label: "五、合作案例" },
    { id: "partnership", label: "六、合作方式" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- Fixed Hamburger Menu Button - Visible on all pages --- */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
      >
        {menuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
      </button>

      {/* --- Fixed Navigation Menu - Visible on all pages --- */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 min-w-[240px]"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* --- HERO SECTION --- */}
      <header className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-[url('/1.png')] bg-cover bg-center"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
          >
            数智赋能·宿启新程
            <br />
            <span className="text-5xl md:text-7xl text-blue-400 mt-6 inline-block">黄小西酒店智能体介绍</span>
          </motion.h1>
        </div>
      </header>

      {/* --- SECTION I: WHY AI? --- */}
      <Section id="why-ai">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">一、为什么要用AI？</h2>
          <div className="max-w-3xl mx-auto">
            <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2">从互联网1.0到AI时代，赋能酒店经营能力三次跃迁</h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              酒店行业的数字化发展，历经网页时代、OTA平台时代、AI智能体时代三个阶段，核心能力持续升级：
            </p>
          </div>
        </motion.div>

        {/* Timeline Version */}
        <div className="relative mt-20 mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
          
          <div className="space-y-24">
            {/* Era 1 */}
            <motion.div {...fadeIn} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-bold mb-4 font-display text-slate-900">前互联网时代</h4>
                <p className="text-slate-600 leading-relaxed text-base">
                  企业寻找客户和销售产品只能依赖传统手段，如查阅纸质电话黄页、参加线下展会，或依靠业务员徒步拜访。
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 hidden md:flex shadow-sm">
                <History className="w-5 h-5 text-slate-400" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                <div className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs md:text-sm font-bold uppercase inline-block mb-3">1990年</div>
              </div>
            </motion.div>

            {/* Era 2 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-1">
                 <div className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold uppercase inline-block mb-3">2000年 网页时代</div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center z-10 hidden md:flex shadow-lg shadow-blue-200">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-2">
                <h4 className="text-2xl font-bold mb-4 font-display text-slate-900 border-l-4 md:border-l-0 md:border-r-0 border-blue-500 pl-4 md:pl-0">网页时代（信息展示）</h4>
                <p className="text-slate-600 leading-relaxed text-base">
                  仅能搭建基础官网，实现酒店信息、房型、价格的单向展示，无互动、无交易、无运营，核心是 “让客人看到”。
                </p>
              </div>
            </motion.div>

            {/* Era 3 */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-bold mb-4 font-display text-slate-900">OTA 平台时代（流量依赖）</h4>
                <p className="text-slate-600 leading-relaxed text-base">
                  依托携程、美团等平台获取订单，平台掌握流量分配权，酒店需支付高额佣金、参与竞价排名，核心是 “靠平台卖房”，经营自主权弱、利润被持续压缩。
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 hidden md:flex shadow-sm">
                <TrendingUp className="w-5 h-5 text-slate-400" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                 <div className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs md:text-sm font-bold uppercase inline-block mb-3">2010年 OTA 平台时代</div>
              </div>
            </motion.div>

            {/* Era 4 */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-1">
                 <div className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs md:text-sm font-bold uppercase inline-block mb-3">2025年 AI智能时代</div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center z-10 hidden md:flex shadow-lg shadow-indigo-200">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-2">
                <h4 className="text-2xl font-bold mb-4 font-display text-slate-900 border-l-4 md:border-l-0 md:border-r-0 border-indigo-500 pl-4 md:pl-0">AI 智能体时代（自主经营）</h4>
                <p className="text-slate-600 leading-relaxed text-base">
                  以大模型为核心，为酒店打造专属 AI 数字助手，实现服务自动化、运营数字化、增收多元化，核心是 “自己掌控客源、自己主导经营、自己赚取全利润”，彻底摆脱平台捆绑，降本增效同时拓展非房收入。
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Hotels Must Upgrade AI */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <motion.div {...fadeIn} className="flex items-center gap-3 text-rose-600 mb-10">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4" />
            </div>
            <h4 className="text-2xl font-bold font-display text-slate-900">为什么酒店必须做AI升级？</h4>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "人力成本高",
                content: "前台重复工作多、流动率极高、招聘难。",
                icon: Users
              },
              {
                title: "OTA抽佣高",
                content: "利润被平台吃掉，赚的钱都给携程美团打工。",
                icon: TrendingDown
              },
              {
                title: "客源不自主",
                content: "没有私域沉淀，无法二次营销，复购极难。",
                icon: ShoppingCart
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative group hover:border-rose-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeIn} 
            className="w-full bg-[#0b0f19] text-white rounded-3xl p-8 text-center border border-slate-800 mb-8"
          >
            <p className="text-lg md:text-xl font-medium tracking-wide font-display text-slate-100 italic">
              “酒店越来越像打工人，而不是经营者”
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden" id="industry-trend">
            <div className="absolute right-0 bottom-0 opacity-10">
              <Bot className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h4 className="text-2xl font-bold mb-6 italic">“布局AI智能体，不是一道‘要不要做’的选择题，而是看‘谁先做’的抢答题。”</h4>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                当前行业趋势：酒店管理和服务融入AI已是行业必然。如腾讯和华住会的智能体合作，已经落地超3200家门店。酒店行业一定要抓住趋势。
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- SECTION II: GUIZHOU PRACTICE --- */}
      <Section className="bg-slate-50 border-y border-slate-200" id="guizhou-practice">
        {/* Section Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 inline-block mb-4">
            
          </span>
          <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">
            二、“黄小西”AI旅游服务生态
          </h2>
          <h3 className="text-xl md:text-2xl text-slate-700 font-medium">
            
          </h3>
        </motion.div>

        {/* 1. Joint Venture and Partnership Background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left Card: 贵州文旅官方顶配资源 */}
          <motion.div 
            {...fadeIn} 
            className="bg-white p-6 md:p-8 rounded-3xl border border-slate-150 shadow-[0_12px_45px_rgba(0,0,0,0.025)] flex flex-col"
          >
              {/* Top Content */}
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-slate-900 tracking-tight">贵州文旅官方顶配资源</h4>
                </div>

                {/* 强大国资运营 - Top Highlight */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100/80 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <h5 className="font-bold text-slate-900 text-base">强大国资运营</h5>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-4">
                    贵旅集团（省国资委） + 华创证券联合打造
                  </p>
                </div>

                {/* Bullet Points - Middle Content */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      <span className="font-bold text-blue-600">贵旅集团：</span>
                      省管大型国有全资公司，全域旅游集成服务商，为全省文旅龙头。
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      <span className="font-bold text-blue-600">华创云信：</span>
                      上交所上市公司，提供 AI、区块链与大数据等核心技术支撑。
                    </p>
                  </div>
                </div>
              </div>
          </motion.div>

          {/* Right Card: "黄小西"IP介绍 */}
          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 z-0" />
            <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl z-0" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold font-display text-white tracking-tight">"黄小西"IP介绍</h4>
              </div>

              {/* Description */}
              <p className="text-blue-50 text-sm md:text-base leading-relaxed tracking-wide font-light mb-4">
                贵州省官方文旅IP，具公信力并获高层考察认可。作为核心引擎，"酒店智能体"正依托全省（机场、高铁广告）强力推广，打造数字服务标杆。
              </p>

              {/* Bottom highlights summary panel */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="bg-white/20 text-white font-bold text-xs md:text-sm px-3 py-1.5 rounded-lg shrink-0 text-center">
                  核心优势
                </span>
                <span className="text-blue-50 text-sm md:text-base leading-relaxed font-light">
                  政策背书、官方公信力、全媒体矩阵推广
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Full Agent Portfolio Section */}
        <div className="mb-20">
          <motion.div {...fadeIn} className="flex items-center gap-2.5 mb-8">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
            <h4 className="text-xl font-bold text-slate-800">
              “黄小西”智能体产品生态
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: 景区智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.05 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">景区智能体</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>智能导览与讲解</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>票务分时预约</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>客流预警引导</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 1 */}
              <div className="w-full max-w-[160px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[32px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded-[28px] overflow-hidden relative">
                  {/* Side buttons */}
                  <div className="absolute top-16 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-28 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-24 -right-0.5 w-0.5 h-10 bg-slate-400 rounded-full"></div>
                  {/* Screen */}
                  <img src="/景区智能体.png" alt="景区智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: 酒店智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <Bot className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">酒店智能体</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>入住咨询与房型介绍</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>智能推荐与周边服务</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>客户关怀与满意度调查</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 2 */}
              <div className="w-full max-w-[160px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[32px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded-[28px] overflow-hidden relative">
                  {/* Side buttons */}
                  <div className="absolute top-16 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-28 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-24 -right-0.5 w-0.5 h-10 bg-slate-400 rounded-full"></div>
                  {/* Screen */}
                  <img src="/2.jpg" alt="酒店智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: 餐饮智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.15 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">餐饮智能体</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>菜单推荐与口味偏好</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>排队预约与在线取号</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>优惠推送与食材溯源</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 3 */}
              <div className="w-full max-w-[160px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[32px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded-[28px] overflow-hidden relative">
                  {/* Side buttons */}
                  <div className="absolute top-16 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-28 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-24 -right-0.5 w-0.5 h-10 bg-slate-400 rounded-full"></div>
                  {/* Screen */}
                  <img src="/餐饮智能体.jpg" alt="餐饮智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 4: 个人智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">个人智能体</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>AI 帮讲故事</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>24h 在线接待</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>咨询秒回撮合</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 4 */}
              <div className="w-full max-w-[160px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[32px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded-[28px] overflow-hidden relative">
                  {/* Side buttons */}
                  <div className="absolute top-16 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-28 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-24 -right-0.5 w-0.5 h-10 bg-slate-400 rounded-full"></div>
                  {/* Screen */}
                  <img src="/个人智能体.png" alt="个人智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 5: 诊所/药店智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.25 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <Activity className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">诊所/药店智能体</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>预约挂号与候诊提醒</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>健康咨询与用药指导</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>院内导航与位置指引</span>
                  </div>
                </div>
              </div>

              {/* Tablet Mockup 5 */}
              <div className="w-full max-w-[240px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[20px] p-1 shadow-2xl overflow-hidden aspect-[4/3] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-300 -mt-8">
                <div className="w-full h-full bg-slate-100 rounded-[12px] overflow-hidden relative">
                  {/* Front camera */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full z-10"></div>
                  {/* Screen */}
                  <img src="/2.png" alt="诊所药店智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 6: B端工作台 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="bg-white border border-slate-150 p-6 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-5 mx-auto text-blue-600">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-slate-900 text-xl mb-4">B端工作台</h5>
                
                <div className="space-y-2 mb-8 text-slate-500 text-sm inline-block text-left">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>经营数据看板</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>客户画像管理</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>营销工具配置</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 6 */}
              <div className="w-full max-w-[160px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[32px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded-[28px] overflow-hidden relative">
                  {/* Side buttons */}
                  <div className="absolute top-16 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-28 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-24 -right-0.5 w-0.5 h-10 bg-slate-400 rounded-full"></div>
                  {/* Screen */}
                  <img src="/3.png" alt="B端工作台" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. Operational Achievements Dashboard */}
        <div>
          <motion.div {...fadeIn} className="flex items-center gap-2.5 mb-8">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
            <h4 className="text-xl font-bold text-slate-800">
              多彩"黄小西"当前成效
            </h4>
          </motion.div>

          {/* 数据概览卡片 - 2x2网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: 累计服务访问量 */}
            <motion.div {...fadeIn} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-rose-500" />
                <span className="text-sm font-medium text-slate-600">累计服务访问量</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-slate-900">300</span>
                <span className="text-lg font-medium text-slate-500">余万人次</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                直接沉淀注册用户数 <span className="font-semibold text-slate-700">30 万人</span>，2026年2月后日均活跃 (DAU) 达 <span className="font-semibold text-rose-600">3,000 人次以上</span>。
              </p>
            </motion.div>

            {/* Card 2: 高德地图合作专区 */}
            <motion.div {...fadeIn} transition={{ delay: 0.05 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-600">与高德地图合作"黄小西带你游贵州"专区</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-blue-600">2,636</span>
                <span className="text-lg font-medium text-slate-500">万次曝光</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                专区上线仅两个月，累计曝光超 2,636 万次，页面直接点击直达服务达 <span className="font-semibold text-slate-700">13.3 万次</span>，外省游客访问量占比 <span className="font-semibold text-emerald-600">&gt; 70%</span>。
              </p>
            </motion.div>

            {/* Card 3: 景区上线成效 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-slate-600">景区上线成效</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-slate-900">17</span>
                <span className="text-lg font-medium text-slate-500">家全省级重点景区</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                智能体已在 <span className="font-semibold text-slate-700">黄果树大瀑布</span>、<span className="font-semibold text-slate-700">荔波小七孔</span>、<span className="font-semibold text-slate-700">西江千户苗寨</span> 等 17 家旗舰及重点景区成功上线运行。
              </p>
            </motion.div>

            {/* Card 4: 集成线上商品 */}
            <motion.div {...fadeIn} transition={{ delay: 0.15 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-600">集成线上商品</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-slate-900">8.2</span>
                <span className="text-lg font-medium text-slate-500">万个分销商品</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                汇聚智慧文旅基础数据 10.1 万项，安全覆盖与保障支撑省内 <span className="font-semibold text-slate-700">3.2 万家</span> 餐饮、酒店及出行路线文旅服务商。
              </p>
            </motion.div>
          </div>

          <div className="hidden">
            {/* Column A: Service Side - REMOVED */}
            <motion.div 
              {...fadeIn} 
              className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-150 shadow-[0_16px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-rose-600 mb-8 pb-5 border-b border-slate-100">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shrink-0" />
                  <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">多彩黄小西实效</h5>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
                  <div className="border-l-2 border-rose-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">累计游客服务访问量</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      300 <span className="text-sm font-semibold text-slate-500">余万人次</span>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-rose-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">直接沉淀注册用户数</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      30 <span className="text-sm font-semibold text-slate-500">万人</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-rose-500/30 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">2026年2月后日均活跃 (DAU)</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-rose-600 mt-2 flex items-baseline gap-1">
                      3,000 <span className="text-sm font-semibold text-slate-500">人次以上</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-8 border-t border-slate-100 bg-slate-50/70 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-8 md:p-10 rounded-b-[32px]">
                <div className="text-base font-bold text-blue-600 mb-2.5 flex items-center gap-1.5">
                  <Globe className="w-4.5 h-4.5" /> 高德地图联运“黄小西带你游贵州”：
                </div>
                <p className="text-slate-700 text-[15px] md:text-base leading-relaxed mb-4">
                  专区上线仅两个月，累计曝光突破 <span className="font-bold text-slate-900">2,636 万人次</span>，页面直接点击直达服务达 <span className="font-bold text-slate-900">13.3 万次</span>。
                </p>
                <div className="inline-flex py-1.5 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-semibold border border-emerald-100">
                  非贵州本土（外省）游客访问量占比 &gt; 70%
                </div>
              </div>
            </motion.div>

            {/* Column B: Enterprise Side */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-150 shadow-[0_16px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-blue-600 mb-8 pb-5 border-b border-slate-100">
                  <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shrink-0" />
                  <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">企业与景区应用端</h5>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
                  <div className="border-l-2 border-blue-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">酒店智能体覆盖商户规模</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      1,358 <span className="text-sm font-semibold text-slate-500">家全省酒店</span>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-blue-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">承接并累计处理 AI 问答服务</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      40,000 <span className="text-sm font-semibold text-slate-500">余条</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium">应用企业侧累计新增实名用户</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      30,000 <span className="text-sm font-semibold text-slate-500">近万人</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-8 border-t border-slate-100 bg-slate-50/70 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-8 md:p-10 rounded-b-[32px]">
                <div className="text-base font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <Star className="w-4.5 h-4.5 text-amber-500 fill-amber-500" /> 景区上线成效：
                </div>
                <p className="text-slate-700 text-[15px] md:text-base leading-relaxed">
                  景区智能体已在 <span className="font-semibold text-slate-900 font-sans">黄果树大瀑布</span>、<span className="font-semibold text-slate-900 font-sans">荔波小七孔</span>、<span className="font-semibold text-slate-900 font-sans">西江千户苗寨</span> 等共计 <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs md:text-sm">17 家全省旗舰/重点景区</span> 成功上线并同步启动运行及测试。
                </p>
              </div>
            </motion.div>

            {/* Column C: Data Base */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-150 shadow-[0_16px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-indigo-600 mb-8 pb-5 border-b border-slate-100">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                  <h5 className="font-bold text-sm uppercase tracking-widest text-slate-500">大模型数据底盘保障</h5>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
                  <div className="border-l-2 border-indigo-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium font-sans">汇聚省内文旅多维度基础数据</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      10.1 <span className="text-sm font-semibold text-slate-500">万项数据资源</span>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-indigo-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium font-sans">集成线上分销与精选交易旅游商品</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      8.2 <span className="text-sm font-semibold text-slate-500">万个销售商品</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-indigo-100 pl-4 md:pl-6">
                    <div className="text-xs md:text-sm text-slate-500 font-medium font-sans">数据处理所覆盖及支撑的商户</div>
                    <div className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mt-2 flex items-baseline gap-1">
                      3.2 <span className="text-sm font-semibold text-slate-500">万家文旅服务商</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-8 border-t border-slate-100 bg-slate-50/70 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-8 md:p-10 rounded-b-[32px]">
                <div className="text-base font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <Database className="w-4.5 h-4.5 text-blue-500" /> 数智基础设施：
                </div>
                <p className="text-slate-700 text-[15px] md:text-base leading-relaxed">
                  通过云端对高密度酒店、出行快线、餐食服务商的数据归集，形成了全省一盘棋的数据高速通道，有效在安全可靠的物理服务器下高稳运转，为上游模型持续成长打下雄厚根基。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>{/* OLD CARDS HIDDEN */}

      {/* --- SECTION III: PRODUCT POSITIONING --- */}
      <Section id="positioning">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">三、酒店智能体产品定位</h2>
          <h3 className="text-xl md:text-2xl text-slate-500 font-medium">帮助每一个酒店老板用最短时间、最低成本跟进AI潮流的酒店智慧化转型工具

</h3>
        </motion.div>

        {/* --- Image Content: "什么是"酒店智能体"？" --- */}
        <motion.div {...fadeIn} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "服务好住客",
                desc: "为酒店配备 24 小时服务的智能体团队"
              },
              {
                icon: Clock,
                title: "管理好酒店",
                desc: "为酒店配备 24 小时的数字员工"
              },
              {
                icon: Target,
                title: "增加收入",
                desc: "接入优质旅游产品和通盘供应链，增加非房收入"
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-10 bg-white border border-slate-150 rounded-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(37,99,235,0.04)] hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#eff6ff] text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Analogy Box */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.35 }}
            className="mt-8 border border-dashed border-blue-200 bg-[#edf5ff]/25 rounded-[18px] py-6 px-8 text-center flex items-center justify-center shadow-[inset_0_1px_3px_rgba(59,130,246,0.01)]"
          >
            <p className="text-[#1d4ed8] font-bold text-base md:text-[17px] tracking-wide select-none">
              类比：≈ “你自己的豆包 + 客服 + 导游 + 营销助手”
            </p>
          </motion.div>
        </motion.div>



        {/* 为什么选黄小西智能体对比表格 */}
        <div className="mt-12 space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display mb-4">为什么选黄小西智能体？</h3>
            <p className="text-lg text-slate-500">看清本质区别，不做被动流量的搬运工</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="p-4 md:p-6 text-slate-500 font-medium text-sm md:text-base border-r border-slate-200">维度对比</div>
              <div className="p-4 md:p-6 text-slate-900 font-bold text-center text-sm md:text-base border-r border-slate-200">传统 OTA (公域)</div>
              <div className="p-4 md:p-6 text-blue-600 font-bold text-center text-sm md:text-base bg-blue-50">黄小西智能体 (私域)</div>
            </div>
            {[
              { dim: "流量属性", ota: "平台公域，谁便宜买谁", agent: "酒店专属私域，做老客沉淀" },
              { dim: "佣金政策", ota: "按单结算，高额抽成", agent: "0 佣金，收益全额归酒店" },
              { dim: "服务深度", ota: "仅限订房单一功能", agent: "24h 服务管家 + 全域消费" },
              { dim: "关系链", ota: "客户属于平台", agent: "客户属于酒店私域流量池" },
              { dim: "核心目的", ota: "帮你找新客 (要流量)", agent: "帮你留老客 (降本增效)" },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx !== 4 ? 'border-b border-slate-200' : ''}`}>
                <div className="p-4 md:p-6 text-slate-600 font-medium text-sm md:text-base border-r border-slate-200 bg-slate-50/50">{row.dim}</div>
                <div className="p-4 md:p-6 text-slate-600 text-center text-sm md:text-base border-r border-slate-200">{row.ota}</div>
                <div className="p-4 md:p-6 text-slate-900 font-semibold text-center text-sm md:text-base bg-blue-50/30">{row.agent}</div>
              </div>
            ))}
          </div>
        </div>


      </Section>

      {/* --- SECTION IV: CORE VALUES --- */}
      <div className="bg-slate-50 py-24" id="values">
        <Section>
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">四、智能体价值</h2>
            <h3 className="text-xl md:text-2xl text-slate-500 font-medium">降本 · 增效 · 增收</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Vertically Stacked Value Cards grouped by Core Goal */}
            <div className="lg:col-span-7 space-y-12">
              {[
                {
                  title: "获取更高的净利润率",
                  label: "01. 核心价值一：降本",
                  themeColor: "rose",
                  borderColor: "border-rose-500",
                  textAccent: "text-rose-600 font-bold",
                  glowDot: "bg-rose-500",
                  cards: [
                    { id: "降低人力成本", title: "降低人力成本", content: "24小时秒级响应，减少前台60%以上重复工作量；实现旺季不加人、夜班精简。", icon: Users },
                    { id: "降低管理成本", title: "降低管理成本", content: "需求自动转工单，系统自动派单进度可查，省去中转沟通，减少内耗与人为差错。", icon: Settings },
                    { id: "降低佣金成本", title: "降低佣金成本", content: "支持私域自营订房，老客续房零佣金，甩开在线渠道平台高额抽成。", icon: Wallet }
                  ]
                },
                {
                  title: "全域提质对内对外双高效",
                  label: "02. 核心价值二：增效",
                  themeColor: "blue",
                  borderColor: "border-blue-500",
                  textAccent: "text-blue-600 font-bold",
                  glowDot: "bg-blue-500",
                  cards: [
                    { id: "服务更高效", title: "服务更高效", content: "AI秒级应答，住客无需等待；智能定制行程，推送周边贴心服务。", icon: Clock },
                    { id: "吐槽管理更高效", title: "吐槽管理更高效", content: "住客负面评价先沉淀在智能体内部，酒店可第一时间响应处理，避免差评发酵至 OTA 平台，有效提升酒店评分与口碑。", icon: Zap },
                    { id: "口碑提升更高效", title: "口碑提升更高效", content: "住客离店时 '碰一碰' 二维码，自动生成好评文案，便捷引导至 OTA 平台评价，快速提升酒店好评率与排名。", icon: Star },
                    { id: "运营更高效", title: "运营更高效", content: "数据可视化分析，把握住客喜好，提供竞价分析，决策更精准。", icon: LineChart }
                  ]
                },
                {
                  title: "开启高溢价的多元化商产",
                  label: "03. 核心价值三：增收",
                  themeColor: "emerald",
                  borderColor: "border-emerald-500",
                  textAccent: "text-emerald-600 font-bold",
                  glowDot: "bg-emerald-500",
                  cards: [
                    { id: "供应链分销增收", title: "供应链分销增收", content: "与官方联合打造全域旅游供应链，免费接入热门景区门票、精品线路、本地特产等资源，无需囤货、一键上架即可售卖，赚取稳定分润。", icon: ShoppingCart },
                    { id: "自营商城直销增收", title: "自营商城直销增收", content: "酒店可免费上架自有商品(土特产、酒水、客房用品等)，0佣金，交易资金直接到酒店账户", icon: UserCheck }
                  ]
                }
              ].map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-4">
                  {/* Category Group Header */}
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200">
                    <span className={`w-3 h-3 rounded-full ${group.glowDot} shrink-0`} />
                    <h4 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">{group.label}</h4>
                  </div>

                  {/* Vertical Cards Loop */}
                  <div className="space-y-3.5">
                    {group.cards.map((card, cardIdx) => {
                      const IconComponent = card.icon;
                      const isActive = activeCardId === card.id;
                      return (
                        <motion.div
                          key={cardIdx}
                          {...fadeIn}
                          transition={{ delay: cardIdx * 0.05 }}
                          onClick={() => setActiveCardId(card.id)}
                          className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left relative overflow-hidden flex flex-col md:flex-row gap-4 items-start ${
                            isActive
                              ? `bg-white shadow-xl ${group.borderColor} border-l-[6px] translate-x-1 ring-1 ring-slate-100`
                              : "bg-white border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-slate-300"
                          }`}
                        >
                          {/* Left Badge/Icon */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive 
                              ? group.themeColor === "rose" ? "bg-rose-50 text-rose-600" : group.themeColor === "emerald" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                              : "bg-slate-50 text-slate-500"
                          }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>

                          {/* Body */}
                          <div className="flex-grow space-y-1">
                            <div className="flex items-center justify-between">
                              <h5 className={`text-base md:text-lg font-bold font-sans ${
                                isActive 
                                  ? group.themeColor === "rose" ? "text-rose-600" : group.themeColor === "emerald" ? "text-emerald-600" : "text-blue-600" 
                                  : "text-slate-800"
                              }`}>{card.title}</h5>
                              
                              {isActive && (
                                <motion.span 
                                  layoutId="activeDot"
                                  className={`text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full ${
                                    group.themeColor === "rose" ? "bg-rose-100 text-rose-700" : group.themeColor === "emerald" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  查看中
                                </motion.span>
                              )}
                            </div>
                            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed select-none">
                              {card.content}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Phone Shell Visualizer displaying AI agent Screens */}
            <div className="lg:col-span-5 sticky top-24 self-start mt-10 lg:mt-0 flex flex-col items-center">
              {/* iPhone 15 Pro Max style device mockup shell */}
              <div className="relative w-full max-w-[325px] h-[680px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-[50px] shadow-2xl overflow-hidden shrink-0 border-[10px] border-slate-400">
                {/* Side buttons */}
                <div className="absolute top-20 -left-0.5 w-0.5 h-8 bg-slate-400 rounded-r-full"></div>
                <div className="absolute top-32 -left-0.5 w-0.5 h-10 bg-slate-400 rounded-r-full"></div>
                <div className="absolute top-44 -left-0.5 w-0.5 h-12 bg-slate-400 rounded-r-full"></div>
                <div className="absolute top-24 -right-0.5 w-0.5 h-16 bg-slate-400 rounded-l-full"></div>

                {/* Screen */}
                <div className="w-full h-full bg-slate-900 overflow-hidden">
                  {/* Outer Screen Content */}
                  <div className="w-full h-full relative">
                    {activeCardId === "降低人力成本" && (
                      <img src="/01.jpg" alt="降低人力成本" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "降低管理成本" && (
                      <img src="/02.jpg" alt="降低管理成本" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "降低佣金成本" && (
                      <img src="/03.jpg" alt="降低佣金成本" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "服务更高效" && (
                      <img src="/04.jpg" alt="服务更高效" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "吐槽管理更高效" && (
                      <img src="https://stimg.de/img/2026/05/22/RwLHl.png" alt="吐槽管理更高效" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "口碑提升更高效" && (
                      <img src="https://stimg.de/img/2026/05/22/RwSVS.jpg" alt="口碑提升更高效" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "运营更高效" && (
                      <img src="/3.png" alt="运营更高效" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "供应链分销增收" && (
                      <img src="/gyl.png" alt="供应链分销增收" className="w-full h-full object-cover" />
                    )}

                    {activeCardId === "自营商城直销增收" && (
                      <img src="/06.jpg" alt="自营商城直销增收" className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>




      {/* --- SECTION VII: CASES --- */}
      <Section className="bg-slate-50 border-t border-slate-200" id="cases">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">五、合作案例</h2>
          <h3 className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight">AI 智能体落地实测数据与反馈</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: "贵州饭店 · 贵宾楼",
              type: "高端饭店",
              rating: "五星级",
              headerBg: "bg-gradient-to-br from-indigo-600 to-blue-700",
              date: "2025.12.10 (148天)",
              qa: "8638",
              codes: "533",
              efficiency: "167 / 167",
              efficiencyPct: "100%",
              conversion: "20.78%",
              feedback: "“以往前台每天都要回答的重复咨询，现在很大一部分都能被智能体承载。”贵州饭店前厅部负责人介绍，智能体都能快速响应客人相关诉求，并自动生成工单派到对应部门。"
            },
            {
              name: "思南九天温泉酒店",
              type: "中端酒店",
              rating: "四钻",
              headerBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
              date: "2026.01.16 (111天)",
              qa: "1316",
              codes: "179",
              efficiency: "38 / 38",
              efficiencyPct: "100%",
              conversion: "17.46%",
              feedback: "该酒店为温泉主题，住客咨询高度集中于温泉营业时间、水温等信息类问题。智能体有效分流了前台大量重复咨询，在“信息密集型”场景中发挥了显著作用。"
            },
            {
              name: "夜郎智慧酒店(惠水汽车站店)",
              type: "经济型酒店",
              rating: "二钻",
              headerBg: "bg-slate-900",
              date: "2025.12.10 (148天)",
              qa: "691",
              codes: "72",
              efficiency: "85 / 85",
              efficiencyPct: "100%",
              conversion: "23.50%",
              feedback: "在无前台人力的夜间，住客对Wi-Fi、空调等需求只能依赖智能体。虽然规模较小，但渗透率极高，表明智能系统在无人值守场景下发挥了关键作用。"
            }
          ].map((hotel, idx) => (
            <motion.div 
              key={idx} 
              {...fadeIn} 
              transition={{ delay: idx * 0.1 }} 
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col"
            >
              {/* Card Header */}
              <div className={`${hotel.headerBg} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full -mr-16 -mt-16" />
                <div className="flex gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-bold">
                    {hotel.type}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/20">
                    {hotel.rating}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 font-display leading-tight">{hotel.name}</h4>
              </div>

              {/* Card Body Metrics */}
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">AI 问答 (累计)</div>
                    <div className="text-3xl font-bold font-display text-slate-900 leading-none">{hotel.qa}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">码牌总数</div>
                    <div className="text-3xl font-bold font-display text-slate-900 leading-none">{hotel.codes}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-4">工单执行效率</div>
                    <div className="flex items-end justify-between mb-2">
                       <span className="text-lg font-bold text-slate-800 leading-none">{hotel.efficiency}</span>
                       <span className="text-[11px] py-0.5 px-2 rounded-md bg-blue-50 text-blue-600 font-bold border border-blue-100">{hotel.efficiencyPct}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: hotel.efficiencyPct }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">用户转化率</div>
                    <div className="text-2xl font-bold text-slate-800 leading-none mb-2">{hotel.conversion}</div>
                    <div className="text-[10px] text-slate-400 leading-tight">
                      问答数 ÷ 上线天数 ÷ <br />实际入住人数
                    </div>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="p-6 bg-slate-50/80 rounded-2xl relative group">
                  <div className="absolute -top-3 left-6 w-8 h-8 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-4 pt-2">
                    {hotel.feedback}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                    <div className="h-px w-4 bg-slate-300" />
                    客户反馈 / FEEDBACK
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- SECTION VI: PARTNERSHIP --- */}
      <Section id="partnership" className="bg-white border-t border-slate-150">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-tight text-3xl md:text-4xl mb-6 font-display">六、合作方式</h2>
          <h3 className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight">我们不做一锤子买卖，我们愿意和拥抱数字化的酒店共同成长。</h3>
        </motion.div>

        {/* Two main option boxes: Completely Free vs Multiple Schemes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Block (Free trial with solid border) */}
          <motion.div
            {...fadeIn}
            className="border-[3px] border-blue-600 rounded-[32px] p-8 md:p-12 text-left bg-white relative shadow-lg shadow-blue-500/5 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-extrabold mb-6">
                前 6 个月
              </span>
              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 font-sans">
                完全免费试用
              </h4>
              
              <ul className="space-y-4 md:space-y-5">
                {[
                  "基础功能全开放",
                  "全套物料免费送",
                  "手把手带上线"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-slate-800 text-lg font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Block (Flexible plans) */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="border border-slate-200 bg-slate-50/50 rounded-[32px] p-8 md:p-12 text-left flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200/60 text-slate-600 text-sm font-bold mb-6">
                后期
              </span>
              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 font-sans">
                多种灵活方案
              </h4>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h5 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    方案 A：极低服务月费
                  </h5>
                  <p className="text-slate-500 text-sm md:text-[15px] mt-1.5 pl-0.5">
                    仅覆盖系统维护成本
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    方案 B：房间置换模式
                  </h5>
                  <p className="text-slate-500 text-sm md:text-[15px] mt-1.5 pl-0.5">
                    不用付现金，用闲置资源换效率
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 0 Risk badge button */}
        <div className="flex justify-center mb-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-10 py-4 bg-[#00c98f] hover:bg-[#00b580] text-white font-extrabold text-lg md:text-xl rounded-full shadow-lg shadow-emerald-500/20 cursor-pointer transition-all duration-300 select-none"
          >
            <span>🚀</span>
            <span>0 风险试错，先用起来</span>
          </motion.div>
        </div>

        <div className="border-t border-slate-100 pt-16 mb-24 text-left">
          <motion.div {...fadeIn} className="mb-10">
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight font-sans">
              落地是否复杂？
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: Clock,
                title: "1 周上线",
                desc: "标准化注册流程，开箱即用"
              },
              {
                icon: ShoppingCart,
                title: "免费物料",
                desc: "二维码牌、宣传海报、吐槽码全套配送"
              },
              {
                icon: UserCheck,
                title: "1对1服务",
                desc: "管家式陪跑，确保员工会用、用好"
              },
              {
                icon: Phone,
                title: "24h响应",
                desc: "技术团队全天待命"
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center p-8 bg-white border border-slate-150 rounded-3xl shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h5 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h5>
                  <p className="text-slate-400 text-[13px] md:text-xs">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Underlined state indicators */}
          <div className="flex justify-center gap-10 md:gap-14 mt-4 select-none">
            {[
              { label: "简单", active: true },
              { label: "有人带", active: true },
              { label: "不用操心", active: true }
            ].map((tab, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-slate-400 text-sm md:text-[15px] font-semibold pb-1.5">{tab.label}</span>
                <span className="w-12 h-1 bg-blue-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 4: Right Now is the Perfect Time to Join */}
        <div className="bg-gradient-to-b from-blue-50/10 to-blue-50/50 rounded-[44px] p-8 md:p-16 border border-blue-50 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent)] -z-10" />
          
          <motion.div {...fadeIn} className="flex flex-col items-center">
            {/* Blue Rocket Graphic */}
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/5">
              <Rocket className="w-9 h-9 stroke-[1.8] animate-bounce" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-sans mb-12">
              现在就是最佳入场时机
            </h3>

            {/* Three key highlight columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-14">
              {[
                { label: "正在免费期", val: "抢占先机，0成本试错" },
                { label: "AI 红利期", val: "早用早获客，建立门槛" },
                { label: "政策推动期", val: "拥抱数字化，政府重点支持" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-[22px] bg-[#eff6ff] border border-blue-50/10 text-center">
                  <div className="text-blue-600 text-base md:text-[17px] font-extrabold mb-2">
                    {item.label}
                  </div>
                  <div className="text-blue-500 text-sm font-medium">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Major CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg md:text-2xl rounded-3xl shadow-xl shadow-blue-600/35 cursor-pointer select-none transition-all duration-300"
            >
              “先用起来，再决定要不要长期用”
            </motion.div>

          </motion.div>
        </div>
      </Section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-slate-800 text-xl">
            <Bot className="text-blue-600" />
            酒店智能体
          </div>
          <p className="text-sm">© 2024 酒店智能体. All Rights Reserved. 技术支持：贵旅数网科技</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">服务协议</a>
            <a href="#" className="hover:text-blue-600 transition-colors">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
