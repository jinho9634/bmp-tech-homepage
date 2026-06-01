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
            <div className="h-20 flex items-center overflow-visible">
              <img
                src="/logo.png"
                alt="BMP TECH Logo"
                className="h-24 w-auto translate-y-1"
              />
            </div>
            <span className="font-semibold translate-y-[2px]">
              BMP TECH
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#contact" className="hover:text-[#22b8cf]">
              문의
            </a>
            <a href="#services" className="hover:text-[#22b8cf]">
              사업분야
            </a>
            <a href="#main" className="hover:text-[#22b8cf]">
              홈
            </a>
          </nav>
        </div>
      </header>

      {/* CONTACT - TOP */}
      <section id="contact" className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-2xl font-semibold leading-9 text-slate-800">
              프로젝트 문의 및 기술 상담 가능합니다.
            </p>

            <p className="mt-5 text-slate-600 leading-8">
              고주파 RF PCB 설계, RF 회로 개발, 제품화 지원 관련 문의를
              남겨주시면 확인 후 연락드리겠습니다.
            </p>

            <div className="mt-8 space-y-2 text-slate-700">
              <div>이메일: bmp@bmpretty.com</div>
              <div>전화: 070-4027-3667</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border shadow">
            <input
              className="w-full mb-3 p-3 border rounded"
              placeholder="이름"
            />
            <input
              className="w-full mb-3 p-3 border rounded"
              placeholder="이메일"
            />
            <input
              className="w-full mb-3 p-3 border rounded"
              placeholder="연락처"
            />
            <textarea
              className="w-full mb-3 p-3 border rounded"
              placeholder="문의내용"
            />

            <button className="w-full py-3 bg-[#22b8cf] text-white rounded-full hover:bg-[#1699ae]">
              보내기
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">사업분야</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s) => (
              <div
                key={s.number}
                className="p-8 bg-white rounded-3xl border hover:shadow-xl transition"
              >
                <div className="text-[#22b8cf] text-sm font-semibold">
                  {s.number}
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO - BOTTOM */}
      <section
        id="main"
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,184,207,0.22),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_60%_75%,rgba(14,165,164,0.14),transparent_20%),linear-gradient(135deg,#081018_0%,#0f172a_38%,#111827_68%,#0a0f1a_100%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#67e8f9] backdrop-blur-sm">
              High Frequency RF Engineering
            </p>

            <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-white md:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg text-slate-200 md:text-2xl">
              고주파 RF PCB 제작 및 개발 전문 엔지니어링 기업
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#22b8cf] px-7 py-3 text-white hover:bg-[#1699ae]"
              >
                상담 문의
              </a>
              <a
                href="#services"
                className="rounded-full border px-7 py-3 text-white"
              >
                사업분야 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#0a0f1a] text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" className="h-16" alt="BMP TECH Logo" />
              <span className="text-white font-semibold">BMP TECH</span>
            </div>

            <div>
              대전광역시 대덕구 신일동로17번길 5 807호
              <br />
              사업자등록번호 : 242-81-03731
              <br />
              대표자 : 김영식
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">
              Customer Center
            </div>
            전화 : 070-4027-3667
            <br />
            평일 09:00 - 18:00
            <br />
            이메일 : bmp@bmpretty.com
          </div>
        </div>
      </footer>
    </div>
  );
}