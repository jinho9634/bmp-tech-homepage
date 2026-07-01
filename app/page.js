"use client";

import { useState } from "react";

export default function CompanyHomepage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const products = [
    {
      number: "01",
      title: "RF PCB Design",
      subtitle: "고주파 RF PCB 설계·제작",
      desc: "고주파 특성을 고려한 PCB 구조 설계, 패턴 최적화, 부품 배치 및 제작 대응을 수행합니다.",
    },
    {
      number: "02",
      title: "RF Development",
      subtitle: "RF 회로 및 제어 개발",
      desc: "RF 회로 구성, 제어 로직 설계, 인터페이스 연동 및 제품 동작 검증까지 개발합니다.",
    },
    {
      number: "03",
      title: "RF System",
      subtitle: "시제품·제품화 지원",
      desc: "시제품 검증, 설계 보완, 양산 검토 및 기술 대응까지 안정적인 제품화를 지원합니다.",
    },
  ];

  const strengths = [
    {
      title: "고주파 RF PCB 설계 및 제작 대응",
      desc: "고주파 특성을 고려한 PCB 구조 설계와 제작 대응",
    },
    {
      title: "회로·제어·제품화 통합 개발",
      desc: "회로 설계, 제어 개발, 제품 동작 검증까지 통합 대응",
    },
    {
      title: "의료·뷰티 디바이스 개발 기반",
      desc: "의료·뷰티 분야의 제품 개발 경험을 기반으로 한 기술 지원",
    },
    {
      title: "시제품부터 양산 검토까지 연계 지원",
      desc: "시제품 검증, 설계 보완, 양산 전 기술 검토 지원",
    },
  ];

  const quickLinks = [
    { title: "회사소개", href: "#about" },
    { title: "제품소개", href: "#products" },
    { title: "R&D", href: "#rnd" },
    { title: "고객지원", href: "#contact" },
  ];

  const closeMobile = () => setMobileOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`[BMP TECH 문의] ${name}`);
    const body = encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n연락처: ${phone}\n\n문의내용:\n${message}`
    );

    window.location.href = `mailto:bmp@bmpretty.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="scroll-smooth bg-white text-[#5b4a47]">
      <header className="fixed left-0 top-0 z-50 w-full bg-white/82 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-6 md:h-24 md:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" onClick={closeMobile}>
            <img
              src="/logo.png"
              alt="BMP TECH Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
            />
            <span className="text-sm font-bold tracking-tight text-[#4f4441] sm:text-base">
              BMP TECH
            </span>
          </a>

          <nav className="hidden h-full items-center gap-10 text-sm font-bold text-[#4f4441] lg:flex xl:gap-12">
            <div className="group flex h-full items-center">
              <a href="#about" className="transition hover:text-[#d88986]">
                회사소개
              </a>
              <div className="fixed left-0 top-24 hidden w-full bg-white/95 shadow-xl group-hover:block">
                <div className="mx-auto flex max-w-[1500px] gap-16 px-12 py-7 text-sm font-medium text-[#5b4a47]">
                  <a href="#about" className="transition hover:text-[#d88986]">
                    회사개요
                  </a>
                  <a href="#rnd" className="transition hover:text-[#d88986]">
                    R&D 역량
                  </a>
                </div>
              </div>
            </div>

            <div className="group flex h-full items-center">
              <a href="#products" className="transition hover:text-[#d88986]">
                제품소개
              </a>
              <div className="fixed left-0 top-24 hidden w-full bg-white/95 shadow-xl group-hover:block">
                <div className="mx-auto flex max-w-[1500px] gap-16 px-12 py-7 text-sm font-medium text-[#5b4a47]">
                  <a href="#products" className="transition hover:text-[#d88986]">
                    RF PCB Design
                  </a>
                  <a href="#products" className="transition hover:text-[#d88986]">
                    RF Development
                  </a>
                  <a href="#products" className="transition hover:text-[#d88986]">
                    RF System
                  </a>
                </div>
              </div>
            </div>

            <a href="#rnd" className="transition hover:text-[#d88986]">
              R&D
            </a>
            <a href="#contact" className="transition hover:text-[#d88986]">
              고객지원
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-md border border-[#d88986]/50 px-4 py-2 text-sm font-bold text-[#d88986] lg:hidden"
          >
            MENU
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#ead2cd] bg-white px-5 py-5 shadow-xl lg:hidden">
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
                className="block py-3 text-sm font-bold text-[#5b4a47]"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="scroll-mt-24 bg-[#fff0e9] pt-20 md:pt-24">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-5 py-10 sm:px-6 md:px-8 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12 lg:py-0">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#9b6a65] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mt-5 text-lg font-bold text-[#9b6a65] sm:text-xl md:text-2xl">
              고주파 RF PCB 제작 및 개발 전문 기업
            </p>

            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#6d5b57] md:text-lg md:leading-9">
              RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#about"
                className="border border-[#d88986] px-6 py-3 text-center text-sm font-bold text-[#d88986] transition hover:bg-[#d88986] hover:text-white"
              >
                ABOUT BMP TECH →
              </a>
              <a
                href="#products"
                className="bg-[#d88986] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#c87976]"
              >
                PRODUCT VIEW
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="/beauty-hero.png"
              alt="Beauty Tech Main Visual"
              className="mx-auto block h-auto w-full max-w-[780px]"
            />
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#d88986] p-8 text-white md:p-10">
              <p className="text-lg font-semibold">제품소개</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                PRODUCT
              </h2>
              <div className="my-8 h-px w-14 bg-white/70 md:my-10" />
              <p className="leading-8 text-white/95">
                비엠피테크는 고주파 RF 기술을 기반으로 PCB 설계, 회로 개발, 시제품 및 제품화 지원을 수행합니다.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex border border-white/70 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#d88986]"
              >
                CONTACT US →
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((item) => (
                <div
                  key={item.number}
                  className="bg-white p-7 shadow-[0_20px_45px_rgba(120,80,80,0.12)] md:p-8"
                >
                  <div className="mb-7 flex h-32 items-center justify-center bg-[#fbf3ef] md:h-40">
                    <div className="text-5xl font-bold text-[#d88986]/25">
                      {item.number}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#caa6a3]">
                    PRODUCT {item.number}
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

      <section id="rnd" className="scroll-mt-24 bg-[#fbf3ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-6 md:grid-cols-2 md:px-8 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">
              R&D Capability
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#5b4a47] md:text-5xl">
              RF 기술의 내일을
              <br />
              설계합니다
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6d5b57] md:text-lg">
              회로 설계부터 PCB 구조, 제품화까지 통합적으로 연구·개발하여 최적의 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="border-l-4 border-[#d88986] bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-bold text-[#d88986]">
                  0{index + 1}
                </div>
                <div className="mt-2 text-lg font-bold text-[#5b4a47]">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#6d5b57]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">
              About BMP TECH
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#5b4a47] md:text-5xl">
              기술을 제품으로 연결하는
              <br />
              RF 엔지니어링 파트너
            </h2>
          </div>
          <div className="text-base leading-8 text-[#6d5b57] md:text-lg md:leading-9">
            비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
            RF 회로 구조, PCB 설계, 제어 개발, 검증 대응을 유기적으로 연결하여 고객의 아이디어를 실제 제품으로 구현합니다.
          </div>
        </div>
      </section>

      <section className="bg-[#fbf3ef] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-12">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-[#9b6a65] md:text-5xl">
            QUICK LINK
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex min-h-[150px] items-end bg-[#d88986] p-6 text-xl font-bold text-white transition hover:-translate-y-1 hover:bg-[#c87976]"
              >
                {item.title}
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#FFF0E4] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">
              Contact
            </p>
            <h2 className="mt-5 text-4xl font-bold text-[#d88986] md:text-5xl">
              프로젝트 문의 및
              <br />
              기술 상담
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[#6d5b57]">
              문의하시면 빠르게 답변드리겠습니다.
            </p>
            <div className="mt-8 space-y-3 text-[#d88986]">
              <div>이메일 : bmp@bmpretty.com</div>
              <div>전화 : 070-4027-3667</div>
              <div>주소 : 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 shadow-xl md:p-8"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                className="w-full border border-[#ead2cd] p-3 outline-none focus:border-[#d88986]"
                placeholder="이름"
              />
              <input
                name="phone"
                className="w-full border border-[#ead2cd] p-3 outline-none focus:border-[#d88986]"
                placeholder="연락처"
              />
            </div>
            <input
              name="email"
              required
              className="mt-3 w-full border border-[#ead2cd] p-3 outline-none focus:border-[#d88986]"
              placeholder="이메일"
            />
            <textarea
              name="message"
              required
              className="mt-3 min-h-[160px] w-full border border-[#ead2cd] p-3 outline-none focus:border-[#d88986]"
              placeholder="문의 내용을 입력해주세요."
            />
            <button
              type="submit"
              className="mt-3 w-full bg-[#d88986] py-3 font-semibold text-white transition hover:bg-[#c87976]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <footer id="footer" className="bg-[#5b4a47] text-slate-200">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 text-sm leading-7 sm:px-6 md:grid-cols-3 md:px-8 lg:px-12">
          <div>
            <img
              src="/logo.png"
              alt="BMP TECH Logo"
              className="mb-4 h-12 w-auto"
            />
            Make Beauty, Make Pretty
            <br />
            High Frequency RF Engineering
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
            <div className="mb-4 font-semibold text-white">
              CUSTOMER CENTER
            </div>
            전화 : 070-4027-3667
            <br />
            평일 09:00 - 18:00
            <br />
            이메일 : bmp@bmpretty.com
          </div>
        </div>
      </footer>
    </main>
  );
}