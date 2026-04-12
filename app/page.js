export default function CompanyHomepage() {
  const services = [
    {
      number: "01",
      title: "고주파 RF PCB 설계·제작",
      description:
        "고주파 RF 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응까지 정밀하게 수행합니다.",
      image: "/service-rf-pcb.jpg",
    },
    {
      number: "02",
      title: "RF 회로 및 제어 개발",
      description:
        "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 실제 제품화 기준으로 개발합니다.",
      image: "/service-rf-dev.jpg",
    },
    {
      number: "03",
      title: "시제품·제품화 지원",
      description:
        "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 후속 단계까지 연결하여 안정적인 제품화를 지원합니다.",
      image: "/service-product.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="BMP TECH Logo"
              className="h-14 w-auto"
            />
            <div>
              <div className="text-xl font-semibold tracking-tight">
                비엠피테크 (BMP TECH)
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#22b8cf]">
              회사소개
            </a>
            <a href="#services" className="transition hover:text-[#22b8cf]">
              사업분야
            </a>
            <a href="#contact" className="transition hover:text-[#22b8cf]">
              문의
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#bfefff] bg-[#f4fcff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                High Frequency RF Engineering
              </p>

              <h1 className="text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
                Advanced RF
                <br />
                Technology
              </h1>

              <p className="mt-6 text-xl leading-9 text-slate-500 md:max-w-xl">
                고주파 RF PCB 제작 및 개발 전문 엔지니어링 기업
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                비엠피테크는 RF PCB 설계, RF 회로 개발, 제어 연동, 검증 및
                제품화까지 전 과정을 수행하며, 제품의 성능과 완성도를 높이는
                기술 중심 개발 파트너입니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#22b8cf] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#1699ae]"
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

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#22b8cf]/10 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-slate-200/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <img
                  src="/hero-rf.jpg"
                  alt="RF PCB 개발 이미지"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#22b8cf] backdrop-blur">
                    BMP TECH
                  </div>
                  <div className="mt-4 text-2xl font-semibold leading-tight text-white md:text-3xl">
                    정밀한 RF 기술로
                    <br />
                    제품 구현을 지원합니다
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                About BMP TECH
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                RF 기술을 실제 제품으로
                <br />
                연결하는 개발 파트너
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-600">
                비엠피테크(BMP TECH)는 고주파 RF PCB 제작 및 개발을 중심으로
                의료·뷰티 디바이스와 전자 제품 개발을 지원합니다. PCB 설계,
                RF 회로 개발, 제어 연동, 검증 대응까지 제품 구현에 필요한 핵심
                기술을 유기적으로 연결하여 고객의 요구를 실제 제품으로
                구현합니다.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f7fbfd] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                  Service
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  사업분야
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                고주파 RF 기술을 중심으로 설계, 개발, 검증, 제품화까지 이어지는
                엔지니어링 서비스를 제공합니다.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="text-sm font-semibold text-[#22b8cf]">
                      {service.number}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#22b8cf]">
                Precision
              </div>
              <div className="mt-4 text-2xl font-semibold leading-tight">
                고주파 특성을 고려한
                <br />
                정밀 설계
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#22b8cf]">
                Integration
              </div>
              <div className="mt-4 text-2xl font-semibold leading-tight">
                회로, 제어, 검증을
                <br />
                통합 개발
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#22b8cf]">
                Productization
              </div>
              <div className="mt-4 text-2xl font-semibold leading-tight">
                시제품부터 양산까지
                <br />
                연계 지원
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
                Contact
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                문의하기
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                제품 개발, RF PCB, 회로 설계 및 협업 관련 문의를 남겨주시면
                빠르게 확인 후 답변드립니다.
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
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7fbfd] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-10 w-auto" />
            <div>© BMP TECH. All rights reserved.</div>
          </div>
          <div>
            사업자등록번호 242-81-03731 · 대표자 김영식 · 법인등록번호
            195511-0030730
          </div>
        </div>
      </footer>
    </div>
  );
}