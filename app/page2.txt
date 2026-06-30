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

  return (
    <div className="bg-[#fbf7f4] text-[#3f3f3f]">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-20 w-auto" />
            <span className="text-base font-bold text-white drop-shadow">
              BMP TECH
            </span>
          </a>

          <nav className="hidden gap-12 text-base font-bold text-white md:flex">
            <div className="group relative">
              <a href="#about" className="drop-shadow hover:text-[#dbeafe]">회사소개</a>
              <div className="absolute left-1/2 top-8 hidden w-40 -translate-x-1/2 bg-white/95 p-4 text-sm font-medium text-slate-700 shadow-xl group-hover:block">
                <a href="#about" className="block py-2 hover:text-[#8ea8cf]">회사개요</a>
                <a href="#rnd" className="block py-2 hover:text-[#8ea8cf]">R&D 역량</a>
              </div>
            </div>

            <div className="group relative">
              <a href="#products" className="drop-shadow hover:text-[#dbeafe]">제품소개</a>
              <div className="absolute left-1/2 top-8 hidden w-48 -translate-x-1/2 bg-white/95 p-4 text-sm font-medium text-slate-700 shadow-xl group-hover:block">
                <a href="#products" className="block py-2 hover:text-[#8ea8cf]">RF PCB Design</a>
                <a href="#products" className="block py-2 hover:text-[#8ea8cf]">RF Development</a>
                <a href="#products" className="block py-2 hover:text-[#8ea8cf]">RF System</a>
              </div>
            </div>

            <a href="#rnd" className="drop-shadow hover:text-[#dbeafe]">R&D</a>
            <a href="#contact" className="drop-shadow hover:text-[#dbeafe]">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          src="/hero-pcb.jpg"
          alt="RF PCB Main Visual"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,55,45,0.72)_0%,rgba(180,140,125,0.52)_45%,rgba(255,245,235,0.35)_100%)]" />
        <div className="absolute inset-0 bg-black/18" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-4xl pt-20">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-7 text-2xl font-semibold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
              RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
            </p>

            <div className="mt-10 flex gap-4">
              <a href="#about" className="border border-white/80 px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#8ea8cf]">
                ABOUT BMP TECH
              </a>
              <a href="#products" className="bg-[#9fb6d8] px-8 py-3 text-sm font-bold text-white hover:bg-[#8ea8cf]">
                PRODUCT VIEW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden bg-[#fbf7f4] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="bg-[#9fb6d8] p-10 text-white md:min-h-[520px]">
              <p className="text-lg font-semibold">제품소개</p>
              <h2 className="mt-3 text-4xl font-bold">PRODUCT</h2>
              <div className="my-10 h-px w-14 bg-white/70" />
              <p className="leading-8">
                비엠피테크는 고주파 RF 기술을 기반으로 PCB 설계, 회로 개발,
                시제품 및 제품화 지원을 수행합니다.
              </p>
              <a href="#contact" className="mt-12 inline-flex border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#8ea8cf]">
                CONTACT US →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((item, index) => (
                <div
                  key={item.number}
                  className={`bg-white shadow-[0_20px_45px_rgba(70,70,70,0.12)] ${
                    index === 1 ? "md:-translate-y-10" : index === 2 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="h-72 overflow-hidden bg-[#f3f0ee]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="text-xs font-bold text-slate-400">{item.number}</div>
                    <h3 className="mt-3 text-2xl font-bold text-[#3f3f3f]">{item.title}</h3>
                    <p className="mt-2 font-semibold text-[#8ea8cf]">{item.subtitle}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rnd" className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8ea8cf]">R&D Capability</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              RF 회로와 PCB 구조를<br />함께 고려하는 개발
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate-600">
            고주파 회로는 PCB 패턴, 부품 배치, 접지 구조, 제어 로직, 검증 환경까지 함께 고려해야 안정적인 제품 성능을 확보할 수 있습니다.
          </p>
        </div>
      </section>

      <section id="about" className="bg-[#f4f0ee] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold md:text-5xl">About BMP TECH</h2>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-600">
            비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#9fb6d8] py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Contact Us</h2>
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
            <button className="w-full bg-[#8ea8cf] py-3 font-semibold text-white hover:bg-[#7898c4]">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}