export default function CompanyHomepage() {
  const services = [
    {
      title: "제품 개발",
      description:
        "아이디어 기획부터 설계, 제작, 검증까지 한 번에 진행하는 맞춤형 개발 서비스입니다.",
    },
    {
      title: "기술 컨설팅",
      description:
        "회로, 펌웨어, 기구, 생산 검토 등 실제 개발 단계에서 필요한 기술 지원을 제공합니다.",
    },
    {
      title: "양산 지원",
      description:
        "BOM 정리, 업체 협업, 테스트 및 문서화까지 양산 전환에 필요한 업무를 지원합니다.",
    },
  ];

  const strengths = [
    "실무 중심의 빠른 대응",
    "하드웨어·소프트웨어 통합 개발",
    "고객 맞춤형 설계 및 커스터마이징",
    "기획부터 제작까지 일괄 진행",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
  		<img src="/logo.png" alt="BMP TECH Logo" className="h-50 w-auto" />
  			<div>
    				<div className="text-xl font-bold tracking-tight">비엠피테크 (BMP TECH)</div>
  			</div>
		</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-600">회사소개</a>
            <a href="#services" className="hover:text-slate-600">서비스</a>
            <a href="#strength" className="hover:text-slate-600">강점</a>
            <a href="#contact" className="hover:text-slate-600">문의</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full border px-3 py-1 text-sm text-slate-600">
            신뢰할 수 있는 기업 홈페이지 시작안
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            고객의 아이디어를
            <br />
            현실로 만드는 기업
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            회사의 핵심 서비스, 기술력, 포트폴리오를 한눈에 보여주는 반응형 메인 홈페이지입니다.
            첫 방문자에게 신뢰를 주고, 문의로 자연스럽게 연결되도록 구성했습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
            >
              상담 문의하기
            </a>
            <a
              href="#services"
              className="rounded-2xl border px-5 py-3 text-sm font-medium transition hover:bg-slate-50"
            >
              서비스 보기
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-slate-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">프로젝트</div>
              <div className="mt-2 text-3xl font-bold">120+</div>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">협업 고객사</div>
              <div className="mt-2 text-3xl font-bold">45+</div>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:col-span-2">
              <div className="text-sm text-slate-500">핵심 메시지</div>
              <div className="mt-2 text-lg font-semibold leading-7">
                정밀한 설계, 빠른 개발, 안정적인 양산 대응을 통해 고객의 제품 경쟁력을 높입니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-slate-500">ABOUT US</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">회사소개</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              비엠피테크(BMP TECH)는 "Make Beauty, Make Pretty"라는 슬로건 아래 하드웨어 설계와 펌웨어 개발을 기반으로 제품의 완성도를 높이는 기술 기업입니다. 고객의 아이디어를 실제 동작하는 제품으로 구현하며, 설계부터 검증, 제품화까지 전 과정을 정밀하게 연결합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold text-slate-500">SERVICES</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">주요 서비스</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="strength" className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-300">WHY US</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">왜 우리 회사를 선택해야 할까요?</h2>
            <p className="mt-6 leading-8 text-slate-300">
              홈페이지에서 가장 중요한 부분 중 하나는 차별점입니다.
              고객이 경쟁사 대신 우리를 선택할 이유를 분명하게 보여줘야 합니다.
            </p>
          </div>
          <div className="grid gap-4">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-500">CONTACT</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">문의하기</h2>
            <p className="mt-6 leading-8 text-slate-600">
              연락처, 이메일, 주소, 카카오톡 채널, 네이버 폼 등 실제 문의 채널로 연결되도록 넣으면 됩니다.
            </p>
            <div className="mt-8 space-y-3 text-slate-700">
              <div>이메일: yjh@bmpretty.com</div>
              <div>전화: 02-XXXX-XXXX</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="rounded-[2rem] border bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4">
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="이름" />
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="이메일" />
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="연락처" />
              <textarea className="min-h-[140px] rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="문의 내용을 입력하세요" />
              <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                문의 보내기
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 비엠피테크 (BMP TECH). All rights reserved.</div>
          <div>사업자등록번호 242-81-03731 · 대표자 김영식 · 법인등록번호 195511-0030730</div>
        </div>
      </footer>
    </div>
  );
}
