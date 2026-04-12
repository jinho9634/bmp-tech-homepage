export default function CompanyHomepage() {
  const services = [
    {
      title: "고주파 RF PCB 제작",
      description:
        "고주파 RF 특성을 고려한 PCB 설계, 패턴 최적화, 부품 배치 및 제작 대응까지 제품 완성도를 높이는 PCB 제작 서비스를 제공합니다.",
    },
    {
      title: "RF 회로 및 제어 개발",
      description:
        "고주파 RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 실제 제품화에 맞춘 개발을 수행합니다.",
    },
    {
      title: "제품화 지원",
      description:
        "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 개발 이후 단계까지 연계하여 안정적인 제품화를 지원합니다.",
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
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-16 w-auto" />
            <div>
              <div className="text-2xl font-bold tracking-tight text-slate-800">
                비엠피테크 (BMP TECH)
              </div>
              <div className="text-sm text-slate-500">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_55%,rgba(245,158,11,0.08)_100%)]" />
        <div className="relative mx-auto grid min-h-[900px] max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 inline-block rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-600 shadow-sm">
              BMP TECH · RF PCB · High Frequency Development
            </p>

            <h1 className="text-6xl font-bold leading-[1.1] text-slate-900 md:text-7xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-8 text-2xl font-semibold leading-9 text-slate-700">
              고주파 RF PCB 제작 및 개발을 수행하는
              <br />
              기술 중심 엔지니어링 파트너
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품의 구현을 지원합니다.
              설계, 검증, 제품화까지 전 과정을 정밀하게 연결하여 실제 제품 완성도를 높입니다.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-amber-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                상담 문의하기
              </a>
              <a
                href="#services"
                className="rounded-md border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                사업분야 보기
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-amber-500">
                COMPANY VALUE
              </div>
              <div className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                고주파 기술의 정밀함으로
                <br />
                제품 완성도를 높입니다.
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                RF 회로 특성, PCB 구조, 제어 안정성, 제품 구현 가능성을 함께 고려하여 기술과 결과를 연결합니다.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-sm">
                <div className="text-sm text-slate-300">Business Area</div>
                <div className="mt-3 text-2xl font-bold">RF PCB</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  고주파 RF 특성을 고려한 PCB 설계, 제작, 구조 최적화
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-500 p-7 text-white shadow-sm">
                <div className="text-sm text-amber-100">Business Area</div>
                <div className="mt-3 text-2xl font-bold">RF Development</div>
                <p className="mt-4 text-sm leading-7 text-amber-50">
                  회로 개발, 제어 설계, 인터페이스 연동 및 제품 검증
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_1.15fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                About BMP TECH
              </p>
              <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
                고주파 RF PCB 제작과 개발을
                <br />
                정확하게 연결합니다
              </h2>
            </div>

            <div>
              <p className="text-xl leading-10 text-slate-600">
                비엠피테크(BMP TECH)는 “Make Beauty, Make Pretty”라는 슬로건 아래 고주파 RF PCB 제작 및 개발을 중심으로 제품의 완성도를 높이는 기술 기업입니다.
                의료·뷰티 디바이스와 전자 제품에 필요한 RF 회로 구조, PCB 설계, 제어 개발, 검증 대응을 유기적으로 연결하여 고객의 아이디어를 실제 제품으로 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                Business Area
              </p>
              <h2 className="mt-5 text-5xl font-bold text-slate-900">
                주요 사업분야
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              고주파 RF 기술 기반의 설계 및 개발 역량으로 실제 제품 구현에 필요한 핵심 기술을 제공합니다.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-amber-500">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="strength" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Core Competency
            </p>
            <h2 className="mt-5 text-5xl font-bold">
              비엠피테크의 핵심 역량
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-xl font-medium backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Contact
            </p>
            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              문의하기
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-lg leading-9 text-slate-600">
                고주파 RF PCB 제작, 회로 개발, 제품화 협업 관련 문의가 있으시면 연락해 주세요.
                내용을 남겨주시면 빠르게 확인 후 연락드리겠습니다.
              </p>

              <div className="mt-10 space-y-6 text-slate-700">
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

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
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
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-12 w-auto" />
              <div>
                <div className="text-xl font-bold text-slate-900">비엠피테크 (BMP TECH)</div>
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
