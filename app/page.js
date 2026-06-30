export default function CompanyHomepage() {
  const products = [
    {
      number: "PRODUCT 01",
      title: "RF PCB Design",
      subtitle: "고주파 RF PCB 설계·제작",
      desc: "고주파 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응까지 정밀하게 수행합니다.",
      image: "/product-rf-pcb.jpg",
    },
    {
      number: "PRODUCT 02",
      title: "RF Development",
      subtitle: "RF 회로 및 제어 개발",
      desc: "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 실제 제품화 기준으로 개발합니다.",
      image: "/product-rf-dev.jpg",
    },
    {
      number: "PRODUCT 03",
      title: "RF System",
      subtitle: "시제품·제품화 지원",
      desc: "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 후속 단계까지 연결하여 안정적인 제품화를 지원합니다.",
      image: "/product-system.jpg",
    },
  ];

  const strengths = [
    "고주파 RF PCB 설계 및 제작 대응",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "시제품부터 양산 검토까지 연계 지원",
  ];

  return (
    <div className="bg-white text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071526]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-20 items-center overflow-visible">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-24 w-auto translate-y-1" />
            </div>
            <span className="translate-y-[2px] text-sm font-semibold tracking-wide text-white">
              BMP TECH
            </span>
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#home" className="hover:text-[#00aeef]">HOME</a>
            <a href="#products" className="hover:text-[#00aeef]">PRODUCT</a>
            <a href="#rnd" className="hover:text-[#00aeef]">R&D</a>
            <a href="#about" className="hover:text-[#00aeef]">ABOUT</a>
            <a href="#contact" className="hover:text-[#00aeef]">CONTACT</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-[#071526] pt-20">
        <img src="/hero-pcb.jpg" alt="RF PCB Main Visual" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,38,0.95)_0%,rgba(7,21,38,0.72)_45%,rgba(7,21,38,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,174,239,0.25),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex border-l-4 border-[#00aeef] pl-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#78dfff]">
              High Frequency RF Engineering
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
              고주파 RF PCB 제작 및 개발을 중심으로 제품의 성능과 완성도를 높이는 엔지니어링 기업
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="rounded-sm bg-[#00aeef] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#008fc7]">
                PRODUCT VIEW
              </a>
              <a href="#contact" className="rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#00aeef] hover:text-[#78dfff]">
                CONTACT US
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="border border-white/15 bg-white/10 p-8 backdrop-blur-md">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#78dfff]">
                RF PCB · RF Development · Productization
              </div>
              <div className="mt-5 text-3xl font-bold leading-tight text-white">
                제품의 완성도는
                <br />
                정밀한 RF 기술에서 시작됩니다.
              </div>
              <p className="mt-5 leading-8 text-slate-200">
                RF 회로, PCB 구조, 제어 안정성, 제품화 가능성을 함께 고려해 실제 제품 개발에 필요한 엔지니어링을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00aeef]">
                Product & Technology
              </p>
              <h2 className="mt-5 text-4xl font-bold text-[#071526] md:text-5xl">
                제품 및 개발 영역
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              RF PCB 설계부터 회로 개발, 제품화 지원까지 제품 중심의 개발 흐름으로 구성했습니다.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((item) => (
              <div key={item.number} className="group overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="text-sm font-bold text-[#00aeef]">{item.number}</div>
                  <h3 className="mt-4 text-3xl font-bold text-[#071526]">{item.title}</h3>
                  <div className="mt-2 text-lg font-semibold text-slate-700">{item.subtitle}</div>
                  <p className="mt-5 leading-8 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rnd" className="bg-[#f3f7fb] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00aeef]">
              R&D Capability
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#071526] md:text-5xl">
              RF 회로와 PCB 구조를
              <br />
              함께 고려하는 개발
            </h2>
            <p className="mt-7 text-lg leading-9 text-slate-600">
              고주파 회로는 단순 회로 설계만으로 완성되지 않습니다. PCB 패턴, 부품 배치,
              접지 구조, 제어 로직, 검증 환경까지 함께 고려해야 안정적인 제품 성능을 확보할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-5">
            {strengths.map((item, index) => (
              <div key={item} className="border-l-4 border-[#00aeef] bg-white p-6 shadow-sm">
                <div className="text-sm font-bold text-[#00aeef]">0{index + 1}</div>
                <div className="mt-2 text-xl font-bold text-[#071526]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00aeef]">
                About BMP TECH
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#071526] md:text-5xl">
                기술을 제품으로 연결하는
                <br />
                RF 엔지니어링 파트너
              </h2>
            </div>

            <div className="text-lg leading-9 text-slate-600">
              비엠피테크(BMP TECH)는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
              RF 회로 구조, PCB 설계, 제어 개발, 검증 대응을 유기적으로 연결하여 고객의 아이디어를 실제 제품으로 구현합니다.
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071526] py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#78dfff]">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              프로젝트 문의 및
              <br />
              기술 상담
            </h2>
            <p className="mt-7 leading-8 text-slate-300">
              RF PCB 설계, RF 회로 개발, 제품화 지원 관련 문의를 남겨주시면 확인 후 연락드리겠습니다.
            </p>

            <div className="mt-8 space-y-3 text-slate-300">
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

            <button className="w-full bg-[#00aeef] py-3 font-semibold text-white hover:bg-[#008fc7]">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#04101f] text-slate-300">
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