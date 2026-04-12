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
            <img src="/logo.png" alt="BMP TECH Logo" className="h-20 w-auto" />
            <div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                비엠피테크 (BMP TECH)
              </div>
              <div className="mt-1 text-sm tracking-[0.18em] text-[#b88917] uppercase">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-[#b88917]">
              회사소개
            </a>
            <a href="#services" className="transition hover:text-[#b88917]">
              사업분야
            </a>
            <a href="#strength" className="transition hover:text-[#b88917]">
              핵심역량
            </a>
            <a href="#contact" className="transition hover:text-[#b88917]">
              문의하기
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#fbfaf7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,137,23,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.85)_100%)]" />
        <div className="relative mx-auto grid min-h-[920px] max-w-7xl gap-14 px-6 py-32 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-6 inline-flex items-center rounded-full border border-[#e7d7a6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b88917] shadow-sm">
              Premium Engineering Partner
            </p>

            <h1 className="text-6xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-8xl">
              High-Frequency
              <br />
              RF Excellence
            </h1>

            <p className="mt-8 text-2xl font-medium leading-10 text-slate-700 md:max-w-2xl">
              고주파 RF PCB 제작 및 개발을 중심으로
              <br />
              제품의 완성도를 높이는 프리미엄 엔지니어링 기업
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              비엠피테크는 고주파 RF PCB 설계·제작, RF 회로 및 제어 개발, 제품 검증과 제품화 지원까지
              전 과정을 정밀하게 수행합니다. 기술적 완성도와 구현 가능성을 함께 고려하여 고객의 아이디어를
              실제 제품으로 연결합니다.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-black"
              >
                상담 문의하기
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-[#b88917] hover:text-[#b88917]"
              >
                사업분야 보기
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88917]">
                BMP TECH VALUE
              </div>
              <div className="mt-5 text-4xl font-semibold leading-tight text-slate-950">
                정밀한 RF 기술로
                <br />
                제품의 신뢰도를 높입니다.
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                회로 특성, PCB 구조, 제어 안정성, 생산 가능성을 동시에 고려해 설계 단계부터 완성도 높은 결과물을 지향합니다.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Core Area
                </div>
                <div className="mt-4 text-3xl font-semibold">RF PCB</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  고주파 특성을 고려한 PCB 설계, 제작, 구조 최적화
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#e7d7a6] bg-[#b88917] p-7 text-white shadow-[0_18px_50px_rgba(184,137,23,0.24)]">
                <div className="text-xs uppercase tracking-[0.2em] text-[#f8edcb]">
                  Core Area
                </div>
                <div className="mt-4 text-3xl font-semibold">RF Development</div>
                <p className="mt-4 text-sm leading-7 text-[#fff7e2]">
                  회로 개발, 제어 설계, 인터페이스 연동 및 제품 검증
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b88917]">
                About BMP TECH
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-slate-950">
                기술의 품격이
                <br />
                제품의 완성도를 결정합니다
              </h2>
            </div>

            <div>
              <p className="text-xl leading-10 text-slate-600">
                비엠피테크(BMP TECH)는 “Make Beauty, Make Pretty”라는 슬로건 아래 고주파 RF PCB 제작 및 개발을 중심으로
                제품의 완성도를 높이는 기술 기업입니다. 의료·뷰티 디바이스와 전자 제품에 필요한 RF 회로 구조, PCB 설계,
                제어 개발, 검증 대응을 유기적으로 연결하여 고객의 요구를 실제 제품으로 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b88917]">
                Business Area
              </p>
              <h2 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
                주요 사업분야
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              고주파 RF 기술을 기반으로 설계, 개발, 검증, 제품화까지 이어지는 전문적인 엔지니어링 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-9 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88917]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
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

      <section id="strength" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b14b]">
              Core Competency
            </p>
            <h2 className="mt-6 text-5xl font-semibold tracking-tight">
              비엠피테크의 핵심 역량
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-xl font-medium leading-9 backdrop-blur-sm"
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b88917]">
              Contact
            </p>
            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
              문의하기
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-[#f8f8f6] p-9">
              <p className="text-lg leading-9 text-slate-600">
                고주파 RF PCB 제작, 회로 개발, 제품화 협업 관련 문의가 있으시면 연락해 주세요.
                내용을 남겨주시면 빠르게 확인 후 연락드리겠습니다.
              </p>

              <div className="mt-10 space-y-6 text-slate-700">
                <div>
                  <div className="text-sm font-semibold text-slate-500">이메일</div>
                  <div className="mt-2 text-lg">yjh@bmpretty.com</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-500">전화</div>
                  <div className="mt-2 text-lg">02-XXXX-XXXX</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-500">주소</div>
                  <div className="mt-2 text-lg leading-8">
                    대전광역시 대덕구 신일동로17번길 5 807호
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-9 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="grid gap-4">
                <input
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-[#b88917]"
                  placeholder="이름"
                />
                <input
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-[#b88917]"
                  placeholder="이메일"
                />
                <input
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-[#b88917]"
                  placeholder="연락처"
                />
                <textarea
                  className="min-h-[190px] rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-[#b88917]"
                  placeholder="문의 내용을 입력하세요"
                />
                <button className="rounded-full bg-[#b88917] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9f7411]">
                  문의 보내기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f6f4ef]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-14 w-auto" />
              <div>
                <div className="text-xl font-semibold text-slate-950">비엠피테크 (BMP TECH)</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-[#b88917]">
                  Make Beauty, Make Pretty
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500">
              © 2026 BMP TECH. All rights reserved.
            </div>
          </div>

          <div className="text-sm leading-7 text-slate-600 md:text-right">
	    <div>법인등록번호 195511-0030730</div>
            <div>사업자등록번호 242-81-03731</div>
            <div>대표자 김영식</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
