import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: '一、为什么要用AI？' },
    { id: 'ecosystem', label: '二、“黄小西”AI旅游服务生态' },
    { id: 'positioning', label: '三、酒店智能体产品定位' },
    { id: 'value', label: '四、智能体价值' },
    { id: 'cases', label: '五、合作案例' },
    { id: 'cooperation', label: '六、合作方式' },
  ]

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop <= 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Fixed Hamburger Menu Button - Visible on all pages */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
      >
        {menuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
      </button>

      {/* Fixed Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-20 right-6 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 min-w-[240px]">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-xl transition-all text-sm font-medium ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/JiuDianXuanCuan/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">黄小西酒店智能体</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            重新定义酒店宾客服务体验，AI驱动的智能服务助手
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all">
              立即体验
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">“黄小西”AI旅游服务生态</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              覆盖旅游全场景的AI智能体矩阵，为不同角色提供专属智能服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <img src="/JiuDianXuanCuan/酒店智能体.jpg" alt="酒店智能体" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">酒店智能体</h3>
              <p className="text-slate-600">
                24小时在线宾客服务，智能问答、需求响应、个性化推荐
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <img src="/JiuDianXuanCuan/景区智能体.png" alt="景区智能体" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">景区智能体</h3>
              <p className="text-slate-600">
                景区导览、票务服务、游玩推荐、智能问答
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <img src="/JiuDianXuanCuan/餐饮智能体.jpg" alt="餐饮智能体" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">餐饮智能体</h3>
              <p className="text-slate-600">
                智能点餐、推荐搭配、预订服务、会员管理
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <img src="/JiuDianXuanCuan/个人智能体.png" alt="个人智能体" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">个人智能体</h3>
              <p className="text-slate-600">
                私人旅游助手，行程规划、预订服务、智能问答
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img src="/JiuDianXuanCuan/huangxiaoxi-app.png" alt="黄小西APP" className="mx-auto max-w-2xl rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section id="positioning" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">酒店智能体产品定位</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              从互联网1.0到AI时代，赋能酒店经营能力三次跃迁
              酒店行业的数字化发展，历经网页时代、OTA平台时代、AI智能体时代三个阶段，核心能力持续升级：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-4">1.0</div>
              <h3 className="text-xl font-semibold mb-3">网页时代</h3>
              <p className="text-slate-600">
                酒店官网展示，信息单向传递，宾客主动获取信息
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-4">2.0</div>
              <h3 className="text-xl font-semibold mb-3">OTA平台时代</h3>
              <p className="text-slate-600">
                第三方平台预订，交易撮合，评价体系建立
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">3.0</div>
              <h3 className="text-xl font-semibold mb-3">AI智能体时代</h3>
              <p className="text-slate-600">
                24小时在线智能服务，个性化推荐，主动式服务
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">酒店智能体核心价值</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">宾客体验升级</h4>
                    <p className="text-slate-600">
                      24小时在线服务，即时响应宾客需求，提供个性化推荐
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">运营效率提升</h4>
                    <p className="text-slate-600">
                      自动化服务流程，减少人工成本，提高服务效率
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">数据价值挖掘</h4>
                    <p className="text-slate-600">
                      收集宾客行为数据，提供精准营销和服务优化建议
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/JiuDianXuanCuan/11.jpg" alt="酒店智能体界面" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">智能体价值</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              为酒店宾客提供全方位智能服务，提升体验，创造价值
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-4">20.78%</div>
              <h3 className="text-xl font-semibold mb-3">入住率提升</h3>
              <p className="text-slate-600">
                通过个性化推荐和精准营销，提高酒店入住率
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-4">17.46%</div>
              <h3 className="text-xl font-semibold mb-3">RevPAR提升</h3>
              <p className="text-slate-600">
                优化定价策略和附加服务销售，提高每间可售房收入
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-4">23.50%</div>
              <h3 className="text-xl font-semibold mb-3">运营成本降低</h3>
              <p className="text-slate-600">
                自动化服务流程，减少人工成本，提高运营效率
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">协同更高效</h3>
              <p className="text-slate-600 mb-6">
                工单一键派发、全程留痕、闭环处理，部门协同更顺畅，无遗漏、无延误。
              </p>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src="/JiuDianXuanCuan/04.jpg" alt="协同办公" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">口碑更提升</h3>
              <p className="text-slate-600 mb-6">
                吐槽墙前置管理：住客负面评价先沉淀在智能体内部，酒店可第一时间响应处理，避免差评发酵至OTA平台，有效提升酒店评分与口碑。
                <br /><br />
                口碑更提升：住客离店时“碰一碰”二维码，自动生成好评文案，便捷引导至OTA平台评价，快速提升酒店好评率与排名。
              </p>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src="/JiuDianXuanCuan/05.png" alt="口碑管理" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">自营商城直销增收</h3>
            <p className="text-slate-600 mb-6">
              酒店可免费上架自有商品(土特产、酒水、客房用品等)，0佣金，交易资金直接到酒店账户
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src="/JiuDianXuanCuan/01.jpg" alt="商品1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src="/JiuDianXuanCuan/02.jpg" alt="商品2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src="/JiuDianXuanCuan/03.jpg" alt="商品3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">智能体活跃度计算公式</h3>
            <p className="text-slate-600 text-lg font-semibold">
              问答数 ÷ 上线天数 ÷ 实际入住人数
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">合作案例</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              众多酒店已经选择黄小西智能体，提升服务品质，创造商业价值
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video">
                <img src="/JiuDianXuanCuan/06.jpg" alt="合作酒店1" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">XX国际酒店</h3>
                <p className="text-slate-600">
                  入住率提升25%，RevPAR提升18%，宾客满意度达到98%
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video">
                <img src="/JiuDianXuanCuan/gyl.png" alt="合作酒店2" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">XX度假酒店</h3>
                <p className="text-slate-600">
                  运营成本降低30%，服务响应时间缩短80%，好评率提升至95%
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video">
                <img src="/JiuDianXuanCuan/04.png" alt="合作酒店3" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">XX精品酒店</h3>
                <p className="text-slate-600">
                  附加服务收入增长40%，会员活跃度提升35%，复购率提高28%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section id="cooperation" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">合作方式</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              灵活的合作模式，满足不同酒店的需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="text-2xl font-bold text-blue-600 mb-4">基础版</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>24小时智能问答</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>基础服务推荐</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>数据统计分析</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>月度报告</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                免费试用
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border-2 border-blue-600">
              <div className="text-2xl font-bold text-blue-600 mb-4">专业版</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>包含基础版所有功能</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>个性化推荐系统</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>营销活动管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>API接口对接</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>专属客服支持</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                立即购买
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="text-2xl font-bold text-blue-600 mb-4">定制版</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>包含专业版所有功能</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>定制化开发</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>私有云部署</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>专属项目经理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>7×24小时技术支持</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                联系我们
              </button>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">联系我们</h3>
            <p className="text-slate-600 mb-6">
              如需了解更多信息，请随时联系我们
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                在线咨询
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold border border-blue-600 hover:bg-blue-50 transition-all">
                拨打热线 400-123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">黄小西智能体</h3>
              <p className="text-slate-400">
                重新定义酒店宾客服务体验，AI驱动的智能服务助手
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">产品服务</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">酒店智能体</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">景区智能体</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">餐饮智能体</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">个人智能体</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">解决方案</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">酒店数字化转型</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">宾客体验提升</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">运营效率优化</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">数据价值挖掘</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">关于我们</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">公司介绍</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">新闻动态</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">加入我们</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all">联系方式</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© 2024 黄小西智能体. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
