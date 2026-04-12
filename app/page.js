export default function CompanyHomepage() {
  const services = [
    {
      number: "01",
      title: "고주파 RF PCB 설계·제작",
      description:
        "고주파 RF 특성을 고려한 PCB 구조 설계, 패턴 최적화, 제작 대응까지 정밀하게 수행합니다.",
    },
    {
      number: "02",
      title: "RF 회로 및 제어 개발",
      description:
        "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 제품화 기준으로 개발합니다.",
    },
    {
      number: "03",
      title: "시제품·제품화 지원",
      description:
        "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 후속 단계까지 연결하여 안정적인 제품화를 지원합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-16 w-auto" />
            <div>
              <div className="text-xl font-semibold tracking-tight">비엠피테크 (BMP TECH)</div>
              <div className="text-xs tracking-[0.18em] text-slate-500 uppercase">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#22b8cf]">회사소개</a>
            <a href="#services" className="transition hover:text-[#22b8cf]">사업분야</a>
            <a href="#contact" className="transition hover:text-[#22b8cf]">문의</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[820px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#bfefff] bg-[#f4fcff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
              RF PCB · High Frequency Engineering
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              High Frequency
              <br />
              RF Development
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              고주파 RF PCB 제작 및 개발을 중심으로 제품의 성능과 완성도를 높이는 엔지니어링 기업
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#22b8cf] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#1699ae]"
              >
                상담 문의
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-700 transition hover:border-[#22b8cf] hover:text-[#22b8cf]"
              >
                사업분야 보기
              </a>
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fdff_0%,#eef8fb_55%,#ffffff_100%)] shadow-sm">
            <div className="absolute left-10 top-10 h-52 w-32 bg-white/70" />
            <div className="absolute left-28 top-0 h-full w-px bg-slate-200/60" />
            <div className="absolute right-14 top-12 h-[430px] w-[70%] rounded-[2rem] bg-[radial-gradient(circle_at_top,#ffffff_0%,#dfeef3_70%,#cfdde3_100%)] shadow-inner" />
            <div className="absolute right-24 top-24 h-64 w-64 rounded-full bg-[#22b8cf]/10 blur-3xl" />
            <div className="absolute bottom-10 left-10 rounded-2xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur">
              <div className="text-xs uppercase tracking-[0.2em] text-[#22b8cf]">BMP TECH</div>
              <div className="mt-3 text-2xl font-semibold text-slate-900">
                정밀한 RF 기술로
                <br />
                제품 구현을 지원합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                About BMP TECH
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                RF 기술을 실제 제품으로
                <br />
                연결하는 개발 파트너
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-slate-600">
                비엠피테크(BMP TECH)는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원합니다.
                PCB 설계, RF 회로 개발, 제어 연동, 검증 대응까지 제품 구현에 필요한 핵심 기술을 유기적으로 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7fbfd] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                Provide Service
              </p>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">사업분야</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              의료·기술 기업형 레이아웃에 맞춰 명확하고 직관적으로 핵심 서비스를 전달하도록 구성했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 bg-[linear-gradient(135deg,#f5fbfe_0%,#dff5fa_45%,#ffffff_100%)]" />
                <div className="p-8">
                  <div className="text-sm font-semibold text-[#22b8cf]">{service.number}</div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                Contact
              </p>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">문의하기</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                제품 개발, RF PCB, 회로 설계 및 협업 관련 문의를 남겨주시면 빠르게 확인 후 답변드립니다.
              </p>
              <div className="mt-10 space-y-4 text-slate-600">
                <div>이메일: yjh@bmpretty.com</div>
                <div>전화: 02-XXXX-XXXX</div>
                <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfd] p-8 shadow-sm">
              <input
                className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#22b8cf]"
                placeholder="이름"
              />
              <input
                className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#22b8cf]"
                placeholder="이메일"
              />
              <input
                className="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#22b8cf]"
                placeholder="연락처"
              />
              <textarea
                className="mb-4 min-h-[180px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#22b8cf]"
                placeholder="문의 내용을 입력하세요"
              />
              <button className="w-full rounded-full bg-[#22b8cf] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#1699ae]">
                문의 보내기
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7fbfd] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-10 w-auto" />
            <div>© BMP TECH. All rights reserved.</div>
          </div>
          <div>사업자등록번호 242-81-03731 · 대표자 김영식 · 법인등록번호 195511-0030730</div>
        </div>
      </footer>
    </div>
  );
}
