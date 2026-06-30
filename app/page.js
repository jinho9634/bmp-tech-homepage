export default function CompanyHomepage() {
  const products = [
    {
      number: "PRODUCT 01",
      title: "RF PCB Design",
      subtitle: "고주파 RF PCB 설계·제작",
      desc: "고주파 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응을 수행합니다.",
    },
    {
      number: "PRODUCT 02",
      title: "RF Development",
      subtitle: "RF 회로 및 제어 개발",
      desc: "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 개발합니다.",
    },
    {
      number: "PRODUCT 03",
      title: "RF System",
      subtitle: "시제품·제품화 지원",
      desc: "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 안정적인 제품화를 지원합니다.",
    },
  ];

  const strengths = [
    "고주파 RF PCB 설계 및 제작 대응",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "시제품부터 양산 검토까지 연계 지원",
  ];

  return (
    <div className="bg-[#fbf3ef] text-[#5b4a47]">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-20 w-auto" />
            <span className="text-base font-bold text-[#5b4a47]">
              BMP TECH
            </span>
          </a>

          <nav className="hidden gap-12 text-base font-bold text-[#5b4a47] md:flex">
            <div className="group relative">
              <a href="#about" className="hover:text-[#d88986]">회사소개</a>
              <div className="absolute left-1/2 top-8 hidden w-40 -translate-x-1/2 bg-white/95 p-4 text-sm font-medium text-[#5b4a47] shadow-xl group-hover:block">
                <a href="#about" className="block py-2 hover:text-[#d88986]">회사개요</a>
                <a href="#rnd" className="block py-2 hover:text-[#d88986]">R&D 역량</a>
              </div>
            </div>

            <div className="group relative">
              <a href="#products" className="hover:text-[#d88986]">제품소개</a>
              <div className="absolute left-1/2 top-8 hidden w-48 -translate-x-1/2 bg-white/95 p-4 text-sm font-medium text-[#5b4a47] shadow-xl group-hover:block">
                <a href="#products" className="block py-2 hover:text-[#d88986]">RF PCB Design</a>
                <a href="#products" className="block py-2 hover:text-[#d88986]">RF Development</a>
                <a href="#products" className="block py-2 hover:text-[#d88986]">RF System</a>
              </div>
            </div>

            <a href="#rnd" className="hover:text-[#d88986]">R&D</a>
            <a href="#contact" className="hover:text-[#d88986]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          src="/beauty-hero.png"
          alt="Beauty Tech Main Visual"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,242,238,0.72)_0%,rgba(255,232,227,0.52)_46%,rgba(255,255,255,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl pt-20">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-[#9b6a65] md:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-7 text-2xl font-bold text-[#9b6a65]">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 font-medium text-[#6d5b57]">
              RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#about"
                className="border border-[#d88986] px-8 py-3 text-sm font-bold text-[#d88986] hover:bg-[#d88986] hover:text-white"
              >
                ABOUT BMP TECH →
              </a>
              <a
                href="#products"
                className="bg-[#d88986] px-8 py-3 text-sm font-bold text-white hover:bg-[#c87976]"
              >
                PRODUCT VIEW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden bg-[#fbf3ef] py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.9),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(238,202,210,0.42),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
            <div className="bg-[#d88986] p-10 text-white md:min-h-[520px]">
              <p className="text-lg font-semibold">제품소개</p>
              <h2 className="mt-3 text-4xl font-bold">PRODUCT</h2>
              <div className="my-10 h-px w-14 bg-white/70" />
              <p className="leading-8 text-white/95">
                비엠피테크는 고주파 RF 기술을 기반으로 PCB 설계, 회로 개발,
                시제품 및 제품화 지원을 수행합니다.
              </p>
              <a
                href="#contact"
                className="mt-12 inline-flex border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#d88986]"
              >
                CONTACT US →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((item, index) => (
                <div
                  key={item.number}
                  className={`bg-white p-8 shadow-[0_20px_45px_rgba(120,80,80,0.12)] ${
                    index === 1 ? "md:-translate-y-8" : index === 2 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-8 flex h-40 items-center justify-center bg-[#fbf3ef]">
                    <div className="text-5xl font-bold text-[#d88986]/25">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                  </div>

                  <div className="text-xs font-bold text-[#caa6a3]">
                    {item.number}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-[#5b4a47]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-semibold text-[#d88986]">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#6d5b57]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rnd" className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">
              R&D Capability
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#5b4a47] md:text-5xl">
              RF 회로와 PCB 구조를
              <br />
              함께 고려하는 개발
            </h2>
          </div>

          <div className="grid gap-5">
            {strengths.map((item, index) => (
              <div key={item} className="border-l-4 border-[#d88986] bg-[#fbf3ef] p-6">
                <div className="text-sm font-bold text-[#d88986]">
                  0{index + 1}
                </div>
                <div className="mt-2 text-xl font-bold text-[#5b4a47]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4ebe8] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-[#5b4a47] md:text-5xl">
            About BMP TECH
          </h2>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#6d5b57]">
            비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
            RF 회로 구조, PCB 설계, 제어 개발, 검증 대응을 유기적으로 연결하여 고객의 아이디어를 실제 제품으로 구현합니다.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#d88986] py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              프로젝트 문의 및
              <br />
              기술 상담
            </h2>
            <div className="mt-8 space-y-3">
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
            <button className="w-full bg-[#d88986] py-3 font-semibold text-white hover:bg-[#c87976]">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#5b4a47] text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-sm leading-7 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-14 w-auto" />
              <span className="font-semibold text-white">BMP TECH</span>
            </div>
            <p className="text-slate-300">
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