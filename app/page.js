export default function CompanyHomepage() {
  const services = [
    {
      number: "01",
      title: "RF PCB 설계",
      desc: "고주파 특성을 고려한 정밀 PCB 설계",
    },
    {
      number: "02",
      title: "RF 회로 개발",
      desc: "회로 및 제어 시스템 통합 개발",
    },
    {
      number: "03",
      title: "제품화 지원",
      desc: "시제품부터 양산까지 전 과정 지원",
    },
  ];

  return (
    <div className="bg-white text-slate-900">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-14" />
            <span className="font-semibold">BMP TECH</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-[#22b8cf]">회사소개</a>
            <a href="#services" className="hover:text-[#22b8cf]">사업분야</a>
            <a href="#contact" className="hover:text-[#22b8cf]">문의</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h1 className="text-6xl font-bold leading-tight">
              High Frequency
              <br />
              RF Technology
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 bg-[#22b8cf] text-white rounded-full shadow hover:bg-[#1699ae]">
                상담 문의
              </button>
              <button className="px-6 py-3 border rounded-full">
                사업분야
              </button>
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e0f7fa] to-white" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-[#22b8cf]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#22b8cf]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">사업분야</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s) => (
              <div className="group p-8 bg-white rounded-3xl border hover:shadow-xl transition">
                <div className="text-[#22b8cf] text-sm font-semibold">{s.number}</div>
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-slate-600">{s.desc}</p>
                <div className="mt-6 h-1 w-0 bg-[#22b8cf] group-hover:w-full transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold">문의하기</h2>
            <p className="mt-6 text-slate-600">프로젝트 문의 및 기술 상담 가능합니다.</p>

            <div className="mt-8 space-y-2">
              <div>이메일: yjh@bmpretty.com</div>
              <div>전화: 02-XXXX-XXXX</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border shadow">
            <input className="w-full mb-3 p-3 border rounded" placeholder="이름" />
            <input className="w-full mb-3 p-3 border rounded" placeholder="이메일" />
            <textarea className="w-full mb-3 p-3 border rounded" placeholder="문의내용" />

            <button className="w-full py-3 bg-[#22b8cf] text-white rounded-full hover:bg-[#1699ae]">
              보내기
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
