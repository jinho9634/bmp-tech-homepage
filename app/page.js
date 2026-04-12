export default function CompanyHomepage() {
  const services = [
    {
      title: "하드웨어 설계",
      description:
        "회로 설계, 부품 선정, PCB 설계 및 시제품 검증까지 제품의 완성도를 높이는 하드웨어 설계를 제공합니다.",
    },
    {
      title: "펌웨어 개발",
      description:
        "MCU 제어, 센서 인터페이스, 통신 및 모터 제어까지 제품에 최적화된 안정적인 펌웨어를 개발합니다.",
    },
    {
      title: "제품 개발 지원",
      description:
        "설계 검토, 테스트, 디버깅, 양산 전환까지 제품 개발 전 과정을 실무 중심으로 지원합니다.",
    },
  ];

  const strengths = [
    "하드웨어·펌웨어 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "기획부터 검증·제품화까지 연계",
    "정밀한 설계와 빠른 커뮤니케이션",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-14 w-auto" />
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-800">
                비엠피테크 (BMP TECH)
              </div>
              <div className="text-sm text-slate-500">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-amber-500">
              회사소개
            </a>
            <a href="#services" className="transition hover:text-amber-500">
              사업분야
            </a>
            <a href="#strength" className="transition hover:text-amber-500">
              핵심역량
            </a>
            <a href="#contact" className="transition hover:text-amber-500">
              문의하기
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-white via-slate-50 to-slate-100">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-600 shadow-sm">
              BMP TECH · Hardware Design · Firmware Development
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-6 text-xl font-semibold text-slate-700">
              하드웨어와 펌웨어로 제품의 완성도를 높이는 기술 파트너
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              비엠피테크는 하드웨어 설계와 펌웨어 개발을 기반으로 의료·뷰티
              디바이스와 전자 제품의 구현을 지원합니다. 고객의 아이디어를
              실제 동작하는 결과물로 연결하며, 설계부터 검증, 제품화까지 전
              과정을 정밀하게 수행합니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                상담 문의하기
              </a>
              <a
                href="#about"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                회사소개 보기
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 text-sm font-semibold text-amber-500">
                COMPANY VALUE
              </div>
              <div className="text-3xl font-bold leading-tight text-slate-900">
                제품의 완성도는
                <br />
                기술의 정밀함에서 시작됩니다.
              </div>
              <p className="mt-4 leading-7 text-slate-600">
                설계 품질, 제어 안정성, 제품 구현 가능성을 동시에 고려해
                기술과 결과를 연결합니다.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
                <div className="text-sm text-slate-300">Core Service</div>
                <div className="mt-3 text-2xl font-bold">Hardware Design</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  회로 설계, 부품 선정, PCB 설계 및 검증
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-500 p-6 text-white shadow-sm">
                <div className="text-sm text-amber-100">Core Service</div>
                <div className="mt-3 text-2xl font-bold">Firmware</div>
                <p className="mt-3 text-sm leading-6 text-amber-50">
                  MCU 제어, 통신, 센서, 모터 및 UI 연동
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                About BMP TECH
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                제품화에 필요한 기술을
                <br />
                정확하게 연결합니다
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-600">
                비엠피테크(BMP TECH)는 "Make Beauty, Make Pretty"라는 슬로건
                아래 하드웨어 설계와 펌웨어 개발을 중심으로 제품의 완성도를
                높이는 기술 기업입니다. 의료·뷰티 디바이스 및 전자 제품 개발에
                필요한 회로 구조, 제어 로직, 인터페이스, 검증 대응을 유기적으로
                연결하여 고객의 아이디어를 실제 제품으로 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                Business Area
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                주요 사업분야
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              제품의 구조와 목적에 맞는 설계 및 개발 역량으로 실질적인 구현
              결과물을 제공합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-amber-500">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="strength" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Core Competency
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              비엠피테크의 핵심 역량
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-lg font-medium backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              문의하기
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-lg leading-8 text-slate-600">
                제품 개발, 협업, 기술 문의가 있으시면 연락해 주세요. 내용을
                남겨주시면 빠르게 확인 후 연락드리겠습니다.
              </p>

              <div className="mt-10 space-y-5 text-slate-700">
                <div>
                  <div className="text-sm font-semibold text-slate-500">
                    이메일
                  </div>
                  <div className="mt-1 text-lg">yjh@bmpretty.com</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-500">
                    전화
                  </div>
                  <div className="mt-1 text-lg">02-XXXX-XXXX</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-500">
                    주소
                  </div>
                  <div className="mt-1 text-lg leading-8">
                    대전광역시 대덕구 신일동로17번길 5 807호
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-4">
                <input
                  className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="이름"
                />
                <input
                  className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="이메일"
                />
                <input
                  className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="연락처"
                />
                <textarea
                  className="min-h-[180px] rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-400"
                  placeholder="문의 내용을 입력하세요"
                />
                <button className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">
                  문의 보내기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-10 w-auto" />
              <div>
                <div className="font-bold text-slate-900">비엠피테크 (BMP TECH)</div>
                <div className="text-sm text-slate-500">
                  Make Beauty, Make Pretty
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500">
              © 2026 BMP TECH. All rights reserved.
            </div>
          </div>

          <div className="text-sm leading-7 text-slate-600 md:text-right">
            <div>사업자등록번호 242-81-03731</div>
            <div>대표자 김영식</div>
            <div>법인등록번호 195511-0030730</div>
          </div>
        </div>
      </footer>
    </div>
  );
}