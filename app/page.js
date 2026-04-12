export default function CompanyHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          <div className="flex items-center gap-4">
            <img src="/logo.png" className="h-16" />
            <div className="text-xl font-semibold tracking-tight">비엠피테크 (BMP TECH)</div>
          </div>

          <nav className="hidden md:flex gap-10 text-sm text-slate-600">
            <a href="#about" className="hover:text-[#0ea5a4]">회사소개</a>
            <a href="#services" className="hover:text-[#0ea5a4]">사업분야</a>
            <a href="#contact" className="hover:text-[#0ea5a4]">문의</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
              Advanced RF
              <br />
              Engineering
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-8">
              고주파 RF PCB 제작 및 개발 전문 엔지니어링 기업
            </p>

            <div className="mt-10 flex gap-4">
              <a className="px-6 py-3 rounded-full bg-[#0ea5a4] text-white text-sm font-medium shadow-md hover:shadow-lg hover:bg-[#0f766e] transition">
                상담 문의
              </a>
              <a className="px-6 py-3 rounded-full border text-sm text-slate-600 hover:border-[#0ea5a4] hover:text-[#0ea5a4] transition">
                사업분야
              </a>
            </div>
          </div>

          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#f0fdfa] to-white border border-[#ccfbf1] flex items-center justify-center text-slate-400">
            RF / PCB 이미지
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">사업분야</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "고주파 RF PCB 설계",
              "RF 회로 개발",
              "제품화 및 양산 지원"
            ].map((title) => (
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-4 text-slate-500 text-sm leading-7">
                  고주파 설계와 제품 개발을 통합적으로 수행합니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-semibold">문의하기</h2>
            <p className="mt-6 text-slate-500">문의 주시면 빠르게 답변드립니다.</p>

            <div className="mt-8 space-y-3 text-slate-600">
              <div>이메일: yjh@bmpretty.com</div>
              <div>전화: 02-XXXX-XXXX</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="p-8 bg-white border border-black/5 rounded-3xl shadow-sm">
            <input className="w-full mb-3 p-3 border rounded-lg" placeholder="이름" />
            <input className="w-full mb-3 p-3 border rounded-lg" placeholder="이메일" />
            <textarea className="w-full mb-3 p-3 border rounded-lg" placeholder="문의" />

            <button className="w-full py-3 rounded-full bg-[#0ea5a4] text-white font-medium shadow-md hover:shadow-lg hover:bg-[#0f766e] transition">
              문의 보내기
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-slate-400">
        © BMP TECH
      </footer>

    </div>
  );
}
