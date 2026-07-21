"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegEdit } from "react-icons/fa";

const commercialProducts = [
  {
    num: "PRODUCT 01",
    title: "RF Beauty Device",
    sub: "Professional RF Beauty System",
    image: "/product01.png",
    link: "/products/product01",
    description: "전문적인 피부 관리 환경을 위해 설계된 고주파 RF 기반 상용 장비입니다.",
    features: ["정밀 RF 출력 제어", "사용자 중심 인터페이스", "안정적인 장시간 운용", "제품 맞춤형 구성 지원"],
    specs: ["RF 기반 에너지 출력", "디지털 제어 시스템", "전문가용 장비", "상세 사양 협의 가능"],
  },
  {
    num: "PRODUCT 02",
    title: "RF Handpiece System",
    sub: "Multi-Frequency RF Handpiece",
    image: "/product02.png",
    link: "/products/product02",
    description: "다양한 시술 환경에 적용할 수 있도록 설계된 전문 RF 핸드피스 시스템입니다.",
    features: ["다중 주파수 대응", "안정적인 에너지 전달", "교체형 핸드피스 구성", "인체공학적 외형 설계"],
    specs: ["RF Handpiece Platform", "다중 출력 모드", "장비 연동형", "상세 사양 협의 가능"],
  },
  {
    num: "PRODUCT 03",
    title: "LED Care System",
    sub: "Professional LED Care Device",
    image: "/product03.png",
    link: "/products/product03",
    description: "다양한 LED 파장과 밝기 제어 기능을 적용한 전문가용 케어 시스템입니다.",
    features: ["다중 LED 파장 지원", "단계별 광량 제어", "프로그램 모드 운용", "제품 맞춤형 외형 적용"],
    specs: ["Multi-Wavelength LED", "Digital Intensity Control", "Program Mode", "상세 사양 협의 가능"],
  },
];

const pcbBoards = [
  { num: "BOARD 01", title: "RF Generator Board", sub: "RF 신호 생성 및 출력 제어", image: "/board01.png", link: "/boards/board01", description: "고주파 RF 신호 생성과 출력 제어를 위한 핵심 회로 보드입니다.", features: ["RF 주파수 생성", "출력 레벨 제어", "보호 로직 연동", "시스템 통신 지원"], specs: ["RF Generator", "Digital Control", "Custom Frequency", "Prototype / Mass Production"] },
  { num: "BOARD 02", title: "RF Power Board", sub: "High-Power RF Amplifier", image: "/board02.png", link: "/boards/board02", description: "RF 신호를 목표 출력으로 증폭하기 위한 고출력 전력 보드입니다.", features: ["고출력 RF 증폭", "출력 안정화", "전류·온도 보호", "임피던스 조건 대응"], specs: ["RF Power Stage", "Protection Circuit", "Power Monitoring", "Custom Design"] },
  { num: "BOARD 03", title: "Main Control Board", sub: "Embedded Main Controller", image: "/board03.png", link: "/boards/board03", description: "장비의 동작 순서와 입출력, 통신을 통합 제어하는 메인 제어 보드입니다.", features: ["MCU 기반 제어", "다중 입출력", "상태 모니터링", "펌웨어 맞춤 개발"], specs: ["Embedded MCU", "UART / CAN / RS485", "Sensor Interface", "Custom Firmware"] },
  { num: "BOARD 04", title: "LED Driver Board", sub: "RGB LED Control Platform", image: "/board04.png", link: "/boards/board04", description: "RGB LED 및 LED Bar의 색상, 밝기, 동작 모드를 제어하는 보드입니다.", features: ["RGB 색상 제어", "PWM 밝기 제어", "다양한 표시 모드", "상태 표시 기능"], specs: ["RGB LED Driver", "PWM Control", "Multi-Mode", "Board Communication"] },
  { num: "BOARD 05", title: "Sensor Interface Board", sub: "Sensor & ADC Interface", image: "/board05.png", link: "/boards/board05", description: "온도, IMU, ADC 등 다양한 센서 신호를 수집하고 처리하는 인터페이스 보드입니다.", features: ["다중 센서 입력", "아날로그 신호 수집", "디지털 필터링", "메인보드 연동"], specs: ["Temperature / IMU", "ADC Interface", "I2C / SPI", "Signal Conditioning"] },
  { num: "BOARD 06", title: "Communication Board", sub: "UART / CAN / RS485 Interface", image: "/board06.png", link: "/boards/board06", description: "장비 내부 및 외부 시스템과 안정적으로 통신하기 위한 전용 인터페이스 보드입니다.", features: ["다중 통신 규격", "절연 설계 대응", "프로토콜 변환", "시스템 확장 지원"], specs: ["UART", "CAN", "RS485", "Custom Protocol"] },
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
            <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">PCB Solutions</p><h3 className="mt-3 text-3xl font-extrabold md:text-4xl">제작 보드</h3><p className="mt-3 text-[#6d5b57]">RF, 제어, LED, 센서 및 통신 분야의 자체 설계·제작 PCB 보드입니다.</p></div>
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
