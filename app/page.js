"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegEdit } from "react-icons/fa";

const commercialProducts = [
  {
    num: "PRODUCT 01",
    title: "Not yet",
    sub: "-",
    image: "/product01.png",
    link: "/products/product01",
    description: "-.",
    features: ["-"],
    specs: ["-"],
  },
  {
    num: "PRODUCT 02",
    title: "Not yet",
    sub: "-",
    image: "/product02.png",
    link: "/products/product02",
    description: "-.",
    features: ["-"],
    specs: ["-"],
  },
  {
    num: "PRODUCT 03",
    title: "Not yet",
    sub: "-",
    image: "/product03.png",
    link: "/products/product03",
    description: "-.",
    features: ["-"],
    specs: ["-"],
  },
];

const pcbBoards = [
  { num: "BOARD 01", title: "Cooling Mono RF Board", sub: "6.78 MHz RF Control Platform", image: "/board01.png", link: "/boards/board01", description: "6.78 MHz RF 출력 제어와 실시간 계측·보호 기능을 통합한 고정밀 제어 보드입니다.", features: ["RF 주파수 생성", "출력 레벨 제어", "보호 로직 연동", "시스템 통신 지원"], specs: ["RF Generator", "Digital Control", "Custom Frequency", "Prototype / Mass Production"] },
  {
  num: "BOARD 02",
  title: "Dynamic Bipolar RF Board",
  sub: "Quad-Channel Bipolar RF Generator Platform",
  image: "/board02.png",
  link: "/boards/board02",
  description:
    "4개의 독립 RF 출력 채널을 기반으로 채널당 최대 50 W의 Bipolar RF 출력을 지원하며, 각 채널에서 1 MHz와 2 MHz 주파수를 선택할 수 있도록 설계된 멀티채널 RF Generator Board입니다.",
  features: [
    "4채널 독립 Bipolar RF 출력",
    "채널당 최대 50 W 출력",
    "채널별 1 MHz / 2 MHz 선택",
    "실시간 전류 모니터링"
  ],
  specs: [
    "4-Channel Bipolar RF",
    "50 W per Channel",
    "1 MHz / 2 MHz",
    "250 Ω Nominal Load"
  ]
},
  {
  num: "BOARD 03",
  title: "HKC Board",
  sub: "Multi-Frequency Mono / Bipolar RF Platform",
  image: "/board03.png",
  link: "/boards/board03",
  description:
    "1 MHz, 1.5 MHz, 2 MHz 주파수를 지원하며 Monopolar 및 Bipolar 핸드피스를 모두 연결할 수 있도록 설계된 RF Generator Board입니다.",
  features: [
    "1 MHz / 1.5 MHz / 2 MHz 지원",
    "Monopolar 및 Bipolar 출력",
    "RF 출력 전류 모니터링",
    "RS232 / UART 통신"
  ],
  specs: [
    "Mono / Bipolar RF",
    "Multi-Frequency Control",
    "STM32F405 Controller",
    "Current Monitoring"
  ]
},
  {
  num: "BOARD 04",
  title: "Not yet",
  sub: "-",
  image: "/board04.png",
  link: "/boards/board04",
  description: "-",
  features: ["-"],
  specs: ["-"]
},

{
  num: "BOARD 05",
  title: "Not yet",
  sub: "-",
  image: "/board05.png",
  link: "/boards/board05",
  description: "-",
  features: ["-"],
  specs: ["-"]
},

{
  num: "BOARD 06",
  title: "Not yet",
  sub: "-",
  image: "/board06.png",
  link: "/boards/board06",
  description: "-",
  features: ["-"],
  specs: ["-"]
},
];

const strengths = [
  "고주파 RF PCB 설계 및 제작 대응",
  "회로·제어·제품화 통합 개발",
  "의료·뷰티 디바이스 개발 기반",
  "시제품부터 양산 검토까지 연계 지원",
];

function ProductCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-[0_20px_45px_rgba(120,80,80,0.12)] transition duration-300 hover:-translate-y-2">
      <div className="h-56 overflow-hidden bg-[#fbf3ef]">
        <img src={item.image} alt={item.title} className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-7">
        <div className="text-xs font-bold tracking-[0.18em] text-[#caa6a3]">{item.num}</div>
        <h3 className="mt-3 text-2xl font-bold text-[#333333]">{item.title}</h3>
        <p className="mt-2 font-semibold text-[#d88986]">{item.sub}</p>
        <p className="mt-4 min-h-[56px] text-sm leading-7 text-[#6d5b57]">{item.description}</p>
        <a href={item.link} className="mt-6 inline-flex border border-[#d88986] px-5 py-3 text-sm font-bold text-[#d88986] transition hover:bg-[#d88986] hover:text-white">
          자세히보기 →
        </a>
      </div>
    </article>
  );
}

export default function CompanyHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const f = e.currentTarget;

  const formData = {
    name: f.name.value,
    email: f.email.value,
    phone: f.phone.value,
    message: f.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("문의가 성공적으로 전달되었습니다.");
      f.reset();
    } else {
      alert(result.message || "메일 전송에 실패했습니다.");
    }
  } catch (err) {
    console.error(err);
    alert("메일 전송 중 오류가 발생했습니다.");
  }
};

  return (
    <div className="bg-white text-[#5b4a47]">
      <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:h-24 lg:px-12">
          <a href="#home" onClick={closeMobile} className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-12 w-auto md:h-16 lg:h-20" />
            <span className="text-sm font-bold md:text-base">BMP TECH</span>
          </a>
          <nav className="hidden h-24 items-center gap-10 text-base font-bold lg:flex">
            <div className="group relative flex h-24 items-center"><a href="#about" className="hover:text-[#d88986]">회사소개</a><div className="absolute left-0 top-full hidden min-w-[180px] rounded-md bg-white shadow-xl group-hover:block"><a href="#about" className="block px-5 py-3 text-sm hover:bg-[#fbf3ef]">회사개요</a><a href="#rnd" className="block px-5 py-3 text-sm hover:bg-[#fbf3ef]">R&D 역량</a></div></div>
            <div className="group relative flex h-24 items-center"><a href="#products" className="hover:text-[#d88986]">제품소개</a><div className="absolute left-0 top-full hidden min-w-[210px] rounded-md bg-white shadow-xl group-hover:block"><a href="#commercial-products" className="block px-5 py-3 text-sm hover:bg-[#fbf3ef]">상용 제품</a><a href="#pcb-solutions" className="block px-5 py-3 text-sm hover:bg-[#fbf3ef]">제작 보드</a></div></div>
            <a href="#contact" className="hover:text-[#d88986]">고객지원</a>
            <a href="#rnd" className="hover:text-[#d88986]">R&D</a>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-md border border-[#d88986]/50 px-4 py-2 text-sm font-bold text-[#d88986] lg:hidden">MENU</button>
        </div>
        {mobileOpen && <div className="bg-white px-5 py-5 shadow-xl lg:hidden">{[["HOME", "#home"], ["회사소개", "#about"], ["상용 제품", "#commercial-products"], ["제작 보드", "#pcb-solutions"], ["R&D", "#rnd"], ["고객지원", "#contact"]].map(([name, link]) => <a key={name} href={link} onClick={closeMobile} className="block py-3 text-sm font-bold">{name}</a>)}</div>}
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-[#fff0e9] pt-20 lg:pt-24">
        <img src="/beauty-hero.png" alt="Beauty Tech Main Visual" className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-center" />
        <div className="absolute inset-0 bg-[#fff0e9]/70 md:bg-[linear-gradient(90deg,rgba(255,242,238,0.75)_0%,rgba(255,232,227,0.45)_45%,rgba(255,255,255,0.05)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] items-center px-6 py-12 md:px-8 lg:min-h-[calc(100vh-96px)] lg:px-12">
          <div className="max-w-3xl"><h1 className="font-[var(--font-poppins)] text-5xl font-extrabold leading-tight tracking-tight text-[#9b6a65] md:text-6xl lg:text-7xl xl:text-8xl">Make Beauty,<br />Make Pretty</h1><p className="mt-6 text-xl font-bold text-[#9b6a65] md:text-2xl">고주파 RF PCB 제작 및 개발 전문 기업</p><p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#6d5b57] md:text-lg md:leading-9">RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#about" className="border border-[#d88986] px-6 py-3 text-center text-sm font-bold text-[#d88986] hover:bg-[#d88986] hover:text-white">ABOUT BMP TECH →</a><a href="#products" className="bg-[#d88986] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#c87976]">PRODUCT VIEW</a></div></div>
        </div>
      </section>

      <section id="products" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
          <div className="mb-16 text-center"><p className="text-lg font-bold text-[#d88986]">제품소개</p><h2 className="mt-3 text-4xl font-extrabold text-[#5b4a47] md:text-5xl">PRODUCT LINEUP</h2><p className="mx-auto mt-5 max-w-3xl leading-8 text-[#6d5b57]">비엠피테크의 상용 제품과 자체 설계·제작한 PCB 솔루션을 소개합니다.</p></div>

          <div id="commercial-products" className="scroll-mt-28">
            <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">Commercial Products</p><h3 className="mt-3 text-3xl font-extrabold md:text-4xl">상용 제품</h3><p className="mt-3 text-[#6d5b57]">비엠피테크에서 개발하여 공급하는 판매용 완제품입니다.</p></div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{commercialProducts.map((item) => <ProductCard key={item.num} item={item} />)}</div>
          </div>

          <div id="pcb-solutions" className="mt-24 scroll-mt-28 border-t border-[#eadbd7] pt-20">
            <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">PCB Solutions</p><h3 className="mt-3 text-3xl font-extrabold md:text-4xl">제작 보드</h3><p className="mt-3 text-[#6d5b57]">RF 자체 설계·제작 PCB 보드입니다.</p></div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{pcbBoards.map((item) => <ProductCard key={item.num} item={item} />)}</div>
          </div>
        </div>
      </section>

      <section id="rnd" className="bg-[#fbf3ef] py-20 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:grid-cols-2 md:px-8 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">R&D Capability</p><h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">RF 회로와 PCB 구조를<br />함께 고려하는 개발</h2></div><div className="grid gap-5">{strengths.map((s, i) => <div key={s} className="border-l-4 border-[#d88986] bg-white p-6"><div className="text-sm font-bold text-[#d88986]">0{i + 1}</div><div className="mt-2 text-xl font-bold">{s}</div></div>)}</div></div></section>

      <section id="about" className="bg-white py-20 md:py-28"><div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12"><h2 className="text-4xl font-bold md:text-5xl">About BMP TECH</h2><p className="mt-8 max-w-6xl text-lg leading-9 text-[#6d5b57]">비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.</p></div></section>

      <section id="contact" className="bg-[#FFF0E4] py-20 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12"><div><h2 className="text-4xl font-bold text-[#5B4A47] md:text-5xl">프로젝트 문의 및<br />기술 상담</h2><div className="mt-8 space-y-3 text-[#5B4A47]"><div>이메일 : bmp@bmpretty.com</div><div>전화 : 070-4027-3667</div><div>주소 : 대전광역시 대덕구 신일동로17번길 5 807호</div></div></div><form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl md:p-8"><div className="flex items-center border-b border-gray-300 py-4"><FaUser className="mr-4 text-xl text-[#5B4A47]" /><input name="name" required className="w-full outline-none" placeholder="이름을 입력해주세요." /></div><div className="flex items-center border-b border-gray-300 py-4"><FaPhoneAlt className="mr-4 text-xl text-[#5B4A47]" /><input name="phone" className="w-full outline-none" placeholder="연락처를 입력해주세요." /></div><div className="flex items-center border-b border-gray-300 py-4"><FaEnvelope className="mr-4 text-xl text-[#5B4A47]" /><input name="email" required className="w-full outline-none" placeholder="이메일 주소를 입력해주세요." /></div><div className="mt-6 flex rounded-2xl border border-gray-300 p-5"><FaRegEdit className="mr-4 mt-1 text-2xl text-[#5B4A47]" /><textarea name="message" required rows={7} className="w-full resize-none outline-none" placeholder="문의 내용을 입력해주세요." /></div><button type="submit" className="mt-6 w-full bg-[#d88986] py-4 font-semibold text-white hover:bg-[#c87976]">SEND MESSAGE</button></form></div></section>

      <footer id="footer" className="border-t border-gray-200 bg-white"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-14 text-sm leading-7 text-[#555555] md:grid-cols-3 md:px-8 lg:px-12"><div><img src="/logo.png" alt="BMP TECH Logo" className="mb-5 h-14 w-auto" /><div className="text-lg font-bold text-[#333333]">(주)비엠피테크</div><div className="mt-2 text-[#888888]">High Frequency RF Engineering</div></div><div><div className="mb-5 text-base font-bold text-[#5B4A47]">COMPANY</div><div>(본사) 대전광역시 대덕구 신일동로17번길 5 807호</div><div>사업자등록번호 : 242-81-03731</div><div>대표자 : 김영식</div></div><div><div className="mb-5 text-base font-bold text-[#5B4A47]">CUSTOMER CENTER</div><div>전화 : 070-4027-3667</div><div>평일 09:00 ~ 18:00</div><div>이메일 : bmp@bmpretty.com</div></div></div></footer>

    </div>
  );
}
