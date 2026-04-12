export default function CompanyHomepage() {
  const services = [
    {
      title: "고주파 RF PCB 설계·제작",
      description:
        "고주파 RF 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응까지 정밀하게 수행합니다.",
    },
    {
      title: "RF 회로 및 제어 개발",
      description:
        "고주파 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 실제 제품화 기준으로 개발합니다.",
    },
    {
      title: "시제품·제품화 지원",
      description:
        "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 후속 단계까지 연결하여 안정적인 제품화를 지원합니다.",
    },
  ];

  const strengths = [
    "고주파 RF PCB 설계 및 제작 대응",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "정밀한 설계와 빠른 커뮤니케이션",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" className="h-20 w-auto" />
            <div>
              <div className="text-2xl font-semibold">비엠피테크 (BMP TECH)</div>
              <div className="text-sm text-slate-500">Make Beauty, Make Pretty</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#about" className="hover:text-[#2563eb]">회사소개</a>
            <a href="#services" className="hover:text-[#2563eb]">사업분야</a>
            <a href="#strength" className="hover:text-[#2563eb]">핵심역량</a>
            <a href="#contact" className="hover:text-[#2563eb]">문의하기</a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid min-h-[900px] max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              High Frequency
              <br />
              RF Technology
            </h1>

            <p className="mt-8 text-2xl font-semibold text-slate-700">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-9 max-w-xl">
              비엠피테크는 RF PCB 설계, 회로 개발, 제품화까지 전 과정을 수행하는
              기술 중심 엔지니어링 기업입니다.
            </p>

            <div className="mt-10 flex gap-4">
              <a className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-full">
                상담 문의
              </a>
              <a className="border px-6 py-3 rounded-full">
                사업분야
              </a>
            </div>
          </div>

          <div className="bg-slate-100 rounded-3xl h-[400px] flex items-center justify-center text-slate-400">
            RF / PCB 이미지 영역
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8fafc] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">사업분야</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="strength" className="bg-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">핵심역량</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <div className="bg-white/10 p-6 rounded-2xl">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold">문의하기</h2>
            <p className="mt-6 text-slate-600">문의 주시면 빠르게 답변드립니다.</p>

            <div className="mt-8 space-y-3">
              <div>이메일: yjh@bmpretty.com</div>
              <div>전화: 02-XXXX-XXXX</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">
            <input className="w-full mb-3 p-3 border rounded" placeholder="이름" />
            <input className="w-full mb-3 p-3 border rounded" placeholder="이메일" />
            <textarea className="w-full mb-3 p-3 border rounded" placeholder="문의" />
            <button className="w-full bg-[#2563eb] text-white p-3 rounded">보내기</button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 py-10 text-center text-sm text-slate-500">
        © BMP TECH
      </footer>
    </div>
  );
}
