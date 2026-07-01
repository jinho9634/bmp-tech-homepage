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
    "고주파 RF PCB 설계 및 제작 대응",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "시제품부터 양산 검토까지 연계 지원",
  ];

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
    <div className="bg-white text-[#5b4a47]">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full bg-white/65 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:h-24 md:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BMP TECH Logo"
              className="h-12 w-auto md:h-16 lg:h-20"
            />
            <span className="text-sm font-bold md:text-base">BMP TECH</span>
          </a>

          <nav className="hidden h-full items-center gap-10 text-base font-bold lg:flex">
            <div className="group flex h-full items-center">
              <a href="#about" className="hover:text-[#d88986]">
                회사소개
              </a>
              <div className="fixed left-0 top-24 hidden w-full bg-white/95 shadow-xl group-hover:block">
                <div className="mx-auto flex max-w-[1500px] gap-16 px-12 py-7 text-sm font-medium">
                  <a href="#about" className="hover:text-[#d88986]">회사개요</a>
                  <a href="#rnd" className="hover:text-[#d88986]">R&D 역량</a>
                </div>
              </div>
            </div>

            <div className="group flex h-full items-center">
              <a href="#products" className="hover:text-[#d88986]">
                제품소개
              </a>
              <div className="fixed left-0 top-24 hidden w-full bg-white/95 shadow-xl group-hover:block">
                <div className="mx-auto flex max-w-[1500px] gap-16 px-12 py-7 text-sm font-medium">
                  <a href="#products" className="hover:text-[#d88986]">RF PCB Design</a>
                  <a href="#products" className="hover:text-[#d88986]">RF Development</a>
                  <a href="#products" className="hover:text-[#d88986]">RF System</a>
                </div>
              </div>
            </div>

            <a href="#rnd" className="hover:text-[#d88986]">R&D</a>
            <a href="#contact" className="hover:text-[#d88986]">고객지원</a>
          </nav>

          <button
            type="button"
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
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-bold"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

     {/* HERO */}
<section id="home" className="bg-[#fff0e9] pt-20 lg:pt-24">
  <div className="relative w-full overflow-hidden">
    <img
      src="/beauty-hero.png"
      alt="Beauty Tech Main Visual"
      className="block w-full h-auto"
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,242,238,0.58)_0%,rgba(255,232,227,0.36)_45%,rgba(255,255,255,0.05)_100%)]" />

    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[46%] sm:max-w-[50%] md:max-w-[52%]">
          <h1 className="text-[7vw] font-extrabold leading-tight text-[#9b6a65] md:text-[6vw] lg:text-[5.4vw] xl:text-8xl">
            Make Beauty,
            <br />
            Make Pretty
          </h1>

          <p className="mt-3 text-[2.4vw] font-bold text-[#9b6a65] md:mt-5 md:text-xl lg:text-2xl">
            고주파 RF PCB 제작 및 개발 전문 기업
          </p>

          <p className="mt-3 max-w-2xl text-[1.7vw] font-medium leading-relaxed text-[#6d5b57] md:mt-5 md:text-base lg:text-lg">
            RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를 높이는 엔지니어링 서비스를 제공합니다.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-8 md:gap-4">
            <a
              href="#about"
              className="border border-[#d88986] px-3 py-2 text-[1.5vw] font-bold text-[#d88986] hover:bg-[#d88986] hover:text-white md:px-6 md:py-3 md:text-sm"
            >
              ABOUT BMP TECH →
            </a>

            <a
              href="#products"
              className="bg-[#d88986] px-3 py-2 text-[1.5vw] font-bold text-white hover:bg-[#c87976] md:px-6 md:py-3 md:text-sm"
            >
              PRODUCT VIEW
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* PC */}
  <div className="relative hidden min-h-screen overflow-hidden lg:block">
    <img
      src="/beauty-hero.png"
      alt="Beauty Tech Main Visual"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,242,238,0.75)_0%,rgba(255,232,227,0.48)_45%,rgba(255,255,255,0.05)_100%)]" />

    <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center px-12">
      <div className="max-w-3xl pt-24">
        <h1 className="text-8xl font-extrabold leading-tight text-[#9b6a65]">
          Make Beauty,
          <br />
          Make Pretty
        </h1>

        <p className="mt-7 text-2xl font-bold text-[#9b6a65]">
          고주파 RF PCB 제작 및 개발 전문 기업
        </p>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-9 text-[#6d5b57]">
          RF PCB 설계, RF 회로 개발, 제품화 지원까지 제품의 성능과 완성도를
          높이는 엔지니어링 서비스를 제공합니다.
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
  </div>
</section>

      {/* PRODUCTS */}
      <section id="products" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#d88986] p-8 text-white md:p-10">
              <p className="text-lg font-semibold">제품소개</p>
              <h2 className="mt-3 text-5xl font-bold">PRODUCT</h2>
              <div className="my-10 h-px w-14 bg-white/70" />
              <p className="leading-8">
                비엠피테크는 고주파 RF 기술을 기반으로 PCB 설계, 회로 개발,
                시제품 및 제품화 지원을 수행합니다.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#d88986]"
              >
                CONTACT US →
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((item) => (
                <div
                  key={item.number}
                  className="bg-white p-8 shadow-[0_20px_45px_rgba(120,80,80,0.12)]"
                >
                  <div className="mb-8 flex h-32 items-center justify-center bg-[#fbf3ef] md:h-40">
                    <div className="text-5xl font-bold text-[#d88986]/25">
                      {item.number}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#caa6a3]">
                    PRODUCT {item.number}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">
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
            {strengths.map((item, index) => (
              <div
                key={item}
                className="border-l-4 border-[#d88986] bg-white p-6"
              >
                <div className="text-sm font-bold text-[#d88986]">
                  0{index + 1}
                </div>
                <div className="mt-2 text-xl font-bold">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold md:text-5xl">
            About BMP TECH
          </h2>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#6d5b57]">
            비엠피테크는 고주파 RF PCB 제작 및 개발을 중심으로 의료·뷰티
            디바이스와 전자 제품 개발을 지원하는 기술 기업입니다.
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
            <button
              type="submit"
              className="w-full bg-[#d88986] py-3 font-semibold text-white hover:bg-[#c87976]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#5b4a47] text-slate-200">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 text-sm leading-7 md:grid-cols-3 md:px-8 lg:px-12">
          <div>
            <img src="/logo.png" alt="BMP TECH Logo" className="mb-4 h-12 w-auto" />
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