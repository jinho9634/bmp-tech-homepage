export default function CompanyHomepage() {
  const products = [
    {
      number: "PRODUCT 01",
      title: "RF PCB Design",
      subtitle: "고주파 RF PCB 설계·제작",
      desc: "고주파 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응을 수행합니다.",
      image: "/product-rf-pcb.jpg",
    },
    {
      number: "PRODUCT 02",
      title: "RF Development",
      subtitle: "RF 회로 및 제어 개발",
      desc: "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 개발합니다.",
      image: "/product-rf-dev.jpg",
    },
    {
      number: "PRODUCT 03",
      title: "RF System",
      subtitle: "시제품·제품화 지원",
      desc: "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 안정적인 제품화를 지원합니다.",
      image: "/product-system.jpg",
    },
  ];

  const quickLinks = [
    "RF PCB",
    "RF Development",
    "Productization",
    "Technical Support",
  ];

  return (
    <div className="bg-[#fbf7f4] text-[#3f3f3f]">
      <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-20 items-center overflow-visible">
              <img
                src="/logo.png"
                alt="BMP TECH Logo"
                className="h-24 w-auto translate-y-1"
              />
            </div>
            <span className="text-sm font-semibold tracking-wide text-[#3f3f3f]">
              BMP TECH
            </span>
          </a>

          <nav className="hidden gap-10 text-sm font-semibold text-[#555] md:flex">
            <a href="#about" className="hover:text-[#8ea8cf]">회사소개</a>
            <a href="#products" className="hover:text-[#8ea8cf]">제품소개</a>
            <a href="#rnd" className="hover:text-[#8ea8cf]">R&D</a>
            <a href="#contact" className="hover:text-[#8ea8cf]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden pt-20">
        <img
          src="/hero-pcb.jpg"
          alt="RF PCB Main Visual"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,226,216,0.95)_0%,rgba(238,213,205,0.75)_45%,rgba(255,255,255,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.85),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.25)] md:text-7xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-6 text-lg font-medium text-white drop-shadow md:text-2xl">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/95 drop-shadow">
              RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#about"
                className="border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#8ea8cf]"
              >
                ABOUT BMP TECH
              </a>
              <a
                href="#products"
                className="bg-[#9fb6d8] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8ea8cf]"
              >
                PRODUCT VIEW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden bg-[#fbf7f4] py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.9),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(233,215,227,0.45),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="bg-[#9fb6d8] p-10 text-white md:min-h-[520px]">
              <p className="text-lg font-semibold">제품소개</p>
              <h2 className="mt-3 text-4xl font-bold">PRODUCT</h2>
              <div className="my-10 h-px w-14 bg-white/70" />
              <p className="leading-8 text-white/95">
                비엠피테크는 고주파 RF 기술을 기반으로 PCB 설계, 회로 개발,
                시제품 및 제품화 지원을 수행합니다.
              </p>
              <a
                href="#contact"
                className="mt-12 inline-flex border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#8ea8cf]"
              >
                CONTACT US →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((item, index) => (
                <div
                  key={item.number}
                  className={`bg-white shadow-[0_20px_45px_rgba(70,70,70,0.08)] ${
                    index === 1 ? "md:-translate-y-10" : index === 2 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="h-72 overflow-hidden bg-[#f3f0ee]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-xs font-bold text-slate-400">
                      {item.number}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-[#3f3f3f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-semibold text-[#8ea8cf]">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rnd" className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8ea8cf]">
              R&D Capability
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#3f3f3f] md:text-5xl">
              RF 회로와 PCB 구조를
              <br />
              함께 고려하는 개발
            </h2>
            <p className="mt-7 text-lg leading-9 text-slate-600">
              고주파 회로는 회로 설계뿐 아니라 PCB 패턴, 부품 배치, 접지 구조,
              제어 로직, 검증 환경까지 함께 고려해야 안정적인 제품 성능을 확보할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "고주파 RF PCB 설계 및 제작 대응",
              "회로·제어·제품화 통합 개발",
              "의료·뷰티 디바이스 개발 기반",
              "시제품부터 양산 검토까지 연계 지원",
            ].map((item, index) => (
              <div key={item} className="border-l-4 border-[#9fb6d8] bg-[#fbf7f4] p-6">
                <div className="text-sm font-bold text-[#8ea8cf]">0{index + 1}</div>
                <div className="mt-2 text-xl font-bold text-[#3f3f3f]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f0ee] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8ea8cf]">
                About BMP TECH
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#3f3f3f] md:text-5xl">
                기술을 제품으로 연결하는
                <br />
                RF 엔지니어링 파트너
              </h2>
            </div>

            <div className="text-lg leading-9 text-slate-600">
              비엠피테크(BMP TECH)는 고주파 RF PCB 제작 및 개발을 중심으로
              의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
              RF 회로 구조, PCB 설계, 제어 개발, 검증 대응을 유기적으로 연결하여
              고객의 아이디어를 실제 제품으로 구현합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-5xl font-bold text-[#555]">
            QUICK LINK
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {quickLinks.map((item, index) => (
              <a
                key={item}
                href={index === 0 ? "#products" : index === 3 ? "#contact" : "#rnd"}
                className="group relative h-56 overflow-hidden bg-[#9fb6d8]"
              >
                <img
                  src={
                    index === 0
                      ? "/product-rf-pcb.jpg"
                      : index === 1
                      ? "/product-rf-dev.jpg"
                      : index === 2
                      ? "/product-system.jpg"
                      : "/hero-pcb.jpg"
                  }
                  alt={item}
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-6 left-6 text-xl font-bold text-white">
                  {item}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#9fb6d8] py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              프로젝트 문의 및
              <br />
              기술 상담
            </h2>
            <p className="mt-7 leading-8 text-white/90">
              RF PCB 설계, RF 회로 개발, 제품화 지원 관련 문의를 남겨주시면 확인 후 연락드리겠습니다.
            </p>

            <div className="mt-8 space-y-3 text-white/95">
              <div>이메일 : bmp@bmpretty.com</div>
              <div>전화 : 070-4027-3667</div>
              <div>주소 : 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="bg-white p-8 text-slate-900 shadow-xl">
            <input className="mb-3 w-full border p-3" placeholder="이름" />
            <input className="mb-3 w-full border p-3" placeholder="이메일" />
            <input className="mb-3 w-full border p-3" placeholder="연락처" />
            <textarea className="mb-3 min-h-[150px] w-full border p-3" placeholder="문의내용" />

            <button className="w-full bg-[#8ea8cf] py-3 font-semibold text-white hover:bg-[#7898c4]">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#3f3f3f] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-sm leading-7 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-14 w-auto" />
              <span className="font-semibold text-white">BMP TECH</span>
            </div>
            <p className="text-slate-400">
              Make Beauty, Make Pretty
              <br />
              High Frequency RF Engineering
            </p>
          </div>

          <div>
            <div className="mb-4 font-semibold text-white">COMPANY</div>
            (본사) 대전광역시 대덕구 신일동로17번길 5 807호
            <br />
            사업자등록번호 : 242-81-03731
            <br />
            대표자 : 김영식
          </div>

          <div>
            <div className="mb-4 font-semibold text-white">CUSTOMER CENTER</div>
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