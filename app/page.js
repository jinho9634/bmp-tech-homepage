"use client";

import { useState } from "react";

export default function CompanyHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const products = [
  ["PRODUCT 01", "RF PCB Design", "고주파 RF PCB 설계·제작"],
  ["PRODUCT 02", "RF Development", "RF 회로 및 제어 개발"],
  ["PRODUCT 03", "RF System", "시제품·제품화 지원"],
  ["PRODUCT 04", "Control Board", "제어 보드 설계·개발"],
  ["PRODUCT 05", "Firmware", "임베디드 펌웨어 개발"],
  ["PRODUCT 06", "Prototype Support", "시제품 검증·양산 지원"],
];

  const strengths = [
    "고주파 RF PCB 설계 및 제작 대응",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "시제품부터 양산 검토까지 연계 지원",
  ];

  const closeMobile = () => setMobileOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const subject = encodeURIComponent(`[BMP TECH 문의] ${f.name.value}`);
    const body = encodeURIComponent(
      `이름: ${f.name.value}\n이메일: ${f.email.value}\n연락처: ${f.phone.value}\n\n문의내용:\n${f.message.value}`
    );
    window.location.href = `mailto:bmp@bmpretty.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white text-[#5b4a47]">
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:h-24 lg:px-12">
          <a href="#home" onClick={closeMobile} className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BMP TECH Logo"
              className="h-12 w-auto md:h-16 lg:h-20"
            />
            <span className="text-sm font-bold md:text-base">BMP TECH</span>
          </a>

          <nav className="hidden h-24 items-center gap-10 text-base font-bold lg:flex">
            {[
              ["회사소개", "about", ["회사개요", "R&D 역량"]],
              ["제품소개", "products", ["RF PCB Design", "RF Development", "RF System"]],
              ["고객지원", "contact", ["문의하기", "회사정보"]],
            ].map(([title, id, items]) => (
              <div key={title} className="group relative flex h-24 items-center">
                <a href={`#${id}`} className="hover:text-[#d88986]">
                  {title}
                </a>

                <div className="absolute left-0 top-full hidden min-w-[180px] rounded-md bg-white shadow-xl group-hover:block">
                  <div className="flex flex-col py-2 text-sm font-medium">
                    {items.map((item) => (
                      <a
                        key={item}
                        href={`#${id}`}
                        className="whitespace-nowrap px-5 py-3 hover:bg-[#fbf3ef] hover:text-[#d88986]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <a href="#rnd" className="hover:text-[#d88986]">
              R&D
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md border border-[#d88986]/50 px-4 py-2 text-sm font-bold text-[#d88986] lg:hidden"
          >
            MENU
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-white px-5 py-5 shadow-xl lg:hidden">
            {[
              ["HOME", "#home"],
              ["회사소개", "#about"],
              ["제품소개", "#products"],
              ["R&D", "#rnd"],
              ["고객지원", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={closeMobile}
                className="block py-3 text-sm font-bold"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HOME - ONE RESPONSIVE HERO */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#fff0e9] pt-20 lg:pt-24"
      >
        <img
          src="/beauty-hero.png"
          alt="Beauty Tech Main Visual"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-[#fff0e9]/70 md:bg-[linear-gradient(90deg,rgba(255,242,238,0.75)_0%,rgba(255,232,227,0.45)_45%,rgba(255,255,255,0.05)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] items-center px-6 py-12 md:px-8 lg:min-h-[calc(100vh-96px)] lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-tight text-[#9b6a65] md:text-6xl lg:text-7xl xl:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-6 text-xl font-bold text-[#9b6a65] md:text-2xl">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#6d5b57] md:text-lg md:leading-9">
              RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="border border-[#d88986] px-6 py-3 text-center text-sm font-bold text-[#d88986] hover:bg-[#d88986] hover:text-white"
              >
                ABOUT BMP TECH →
              </a>

              <a
                href="#products"
                className="bg-[#d88986] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#c87976]"
              >
                PRODUCT VIEW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
<section id="products" className="bg-white py-20 md:py-28">
  <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
    <div className="mb-12 text-center">
      <p className="text-lg font-bold text-[#d88986]">제품소개</p>
      <h2 className="mt-3 text-4xl font-extrabold text-[#5b4a47] md:text-5xl">
        PRODUCT
      </h2>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(([num, title, sub], i) => (
        <div
          key={num}
          className="bg-white p-8 shadow-[0_20px_45px_rgba(120,80,80,0.12)]"
        >
          <div className="mb-8 flex h-32 items-center justify-center bg-[#fbf3ef] md:h-40">
            <div className="text-5xl font-bold text-[#d88986]/25">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="text-xs font-bold text-[#caa6a3]">{num}</div>
          <h3 className="mt-3 text-2xl font-bold text-[#333333]">{title}</h3>
          <p className="mt-2 font-semibold text-[#d88986]">{sub}</p>
          <p className="mt-4 text-sm leading-7 text-[#6d5b57]">
            고주파 특성을 고려한 설계, 개발, 검증 및 제품화 대응을 수행합니다.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* R&D */}
      <section id="rnd" className="bg-[#fbf3ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:grid-cols-2 md:px-8 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">
              R&D Capability
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              RF 회로와 PCB 구조를
              <br />
              함께 고려하는 개발
            </h2>
          </div>

          <div className="grid gap-5">
            {strengths.map((s, i) => (
              <div key={s} className="border-l-4 border-[#d88986] bg-white p-6">
                <div className="text-sm font-bold text-[#d88986]">
                  0{i + 1}
                </div>
                <div className="mt-2 text-xl font-bold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold md:text-5xl">About BMP TECH</h2>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#6d5b57]">
            비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#FFF0E4] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <h2 className="text-4xl font-bold text-[#d88986] md:text-5xl">
              프로젝트 문의 및
              <br />
              기술 상담
            </h2>
            <div className="mt-8 space-y-3 text-[#d88986]">
              <div>이메일 : bmp@bmpretty.com</div>
              <div>전화 : 070-4027-3667</div>
              <div>주소 : 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl md:p-8">
            <input name="name" required className="mb-3 w-full border p-3" placeholder="이름" />
            <input name="email" required className="mb-3 w-full border p-3" placeholder="이메일" />
            <input name="phone" className="mb-3 w-full border p-3" placeholder="연락처" />
            <textarea name="message" required className="mb-3 min-h-[150px] w-full border p-3" placeholder="문의내용" />
            <button type="submit" className="w-full bg-[#d88986] py-3 font-semibold text-white hover:bg-[#c87976]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
<footer
  id="footer"
  className="border-t border-gray-200 bg-white"
>
  <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-14 text-sm leading-7 text-[#555555] md:grid-cols-3 md:px-8 lg:px-12">
    {/* 회사 로고 */}
    <div>
      <img
        src="/logo.png"
        alt="BMP TECH Logo"
        className="mb-5 h-14 w-auto"
      />
      <div className="text-lg font-bold text-[#333333]">
        (주)비엠피테크
      </div>

      <div className="mt-2 text-[#888888]">
        High Frequency RF Engineering
      </div>
    </div>
    {/* 회사 정보 */}
    <div>
      <div className="mb-5 text-base font-bold text-[#5B4A47]">
        COMPANY
      </div>
      <div>
        (본사) 대전광역시 대덕구 신일동로17번길 5 807호
      </div>
      <div>
        사업자등록번호 : 242-81-03731
      </div>
      <div>
        대표자 : 김영식
      </div>
    </div>
    {/* 고객센터 */}
    <div>
      <div className="mb-5 text-base font-bold text-[#5B4A47]">
        CUSTOMER CENTER
      </div>
      <div>전화 : 070-4027-3667</div>
      <div>평일 09:00 ~ 18:00</div>
      <div>이메일 : bmp@bmpretty.com</div>
    </div>
  </div>
</footer>
    </div>
  );
}