export default function CompanyHomepage() {
  const services = [
    {
      number: "01",
      title: "RF PCB 설계",
      desc: "고주파 특성을 고려한 정밀 PCB 설계",
    },
    {
      number: "02",
      title: "RF 회로 개발",
      desc: "회로 및 제어 시스템 통합 개발",
    },
    {
      number: "03",
      title: "제품화 지원",
      desc: "시제품부터 양산까지 전 과정 지원",
    },
  ];

  const strengths = [
    "고주파 RF 특성을 고려한 정밀 설계",
    "회로·제어·제품화 통합 개발",
    "의료·뷰티 디바이스 개발 기반",
    "빠른 커뮤니케이션과 실무 중심 대응",
  ];

  return (
    <div className="bg-white text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-14 w-auto" />
            <div>
              <div className="text-lg font-semibold tracking-tight">
                비엠피테크 (BMP TECH)
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Make Beauty, Make Pretty
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#22b8cf]">
              회사소개
            </a>
            <a href="#services" className="transition hover:text-[#22b8cf]">
              사업분야
            </a>
            <a href="#location" className="transition hover:text-[#22b8cf]">
              오시는 길
            </a>
            <a href="#contact" className="transition hover:text-[#22b8cf]">
              문의
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,184,207,0.22),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_60%_75%,rgba(14,165,164,0.14),transparent_20%),linear-gradient(135deg,#081018_0%,#0f172a_38%,#111827_68%,#0a0f1a_100%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-[#22b8cf]/20 blur-[120px]" />
        <div className="absolute right-[-5%] bottom-[5%] h-80 w-80 rounded-full bg-[#3b82f6]/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#67e8f9] backdrop-blur-sm">
              High Frequency RF Engineering
            </p>

            <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:text-8xl">
              Make Beauty,
              <br />
              Make Pretty
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">
              고주파 RF PCB 제작 및 개발을 중심으로 제품의 성능과 완성도를 높이는 엔지니어링 기업
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#22b8cf] px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(34,184,207,0.35)] transition hover:bg-[#1699ae]"
              >
                상담 문의
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#22b8cf] hover:text-[#67e8f9]"
              >
                사업분야 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
              About BMP TECH
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              기술의 완성도를 높이는
              <br />
              RF 엔지니어링 파트너
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-lg leading-9 text-slate-600">
                비엠피테크(BMP TECH)는 <span className="font-semibold text-slate-900">고주파 RF PCB 제작 및 개발</span>을
                중심으로 의료·뷰티 디바이스와 전자 제품 개발을 지원하는 기술 중심 기업입니다.
                RF 회로 설계, PCB 구조 최적화, 제어 시스템 연동, 검증 및 제품화 대응까지
                실제 제품 구현에 필요한 핵심 기술을 유기적으로 연결합니다.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f7fbfd] p-5">
                  <div className="text-sm font-semibold text-[#22b8cf]">Core 01</div>
                  <div className="mt-2 text-lg font-semibold leading-7">
                    RF PCB 설계와 제작 대응
                  </div>
                </div>
                <div className="rounded-2xl bg-[#f7fbfd] p-5">
                  <div className="text-sm font-semibold text-[#22b8cf]">Core 02</div>
                  <div className="mt-2 text-lg font-semibold leading-7">
                    회로 및 제어 개발 통합 수행
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#f5fbfe_0%,#dff5fa_45%,#ffffff_100%)] p-8 shadow-sm md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22b8cf]">
                Why BMP TECH
              </div>

              <div className="mt-6 grid gap-4">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur"
                  >
                    <div className="text-base font-medium leading-7 text-slate-800">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7fbfd] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-4xl font-bold">사업분야</h2>

          <div className="grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.number}
                className="group rounded-3xl border bg-white p-8 transition hover:shadow-xl"
              >
                <div className="text-sm font-semibold text-[#22b8cf]">{s.number}</div>
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-slate-600">{s.desc}</p>
                <div className="mt-6 h-1 w-0 bg-[#22b8cf] transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#22b8cf]">
              Location
            </p>
            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">오시는 길</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              대전광역시 대덕구 신일동로17번길 5 807호
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <iframe
              title="BMP TECH Location"
              src="https://www.google.com/maps?q=대전광역시%20대덕구%20신일동로17번길%205%20807호&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">문의하기</h2>
            <p className="mt-6 text-slate-600">프로젝트 문의 및 기술 상담 가능합니다.</p>

            <div className="mt-8 space-y-2">
              <div>이메일: yjh@bmpretty.com</div>
              <div>전화: 02-XXXX-XXXX</div>
              <div>주소: 대전광역시 대덕구 신일동로17번길 5 807호</div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow">
            <input className="mb-3 w-full rounded border p-3" placeholder="이름" />
            <input className="mb-3 w-full rounded border p-3" placeholder="이메일" />
            <input className="mb-3 w-full rounded border p-3" placeholder="연락처" />
            <textarea className="mb-3 w-full rounded border p-3" placeholder="문의내용" />

            <button className="w-full rounded-full bg-[#22b8cf] py-3 text-white hover:bg-[#1699ae]">
              보내기
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#0a0f1a] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-sm leading-7 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="BMP TECH Logo" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-white">
                비엠피테크 (BMP TECH)
              </span>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-slate-400">주소</span>
                <br />
                대전광역시 대덕구 신일동로17번길 5 807호
              </div>

              <div className="pt-4">
                사업자등록번호 : 242-81-03731
                <br />
                대표자 : 김영식
                <br />
                법인등록번호 : 195511-0030730
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-lg font-semibold text-white">Customer Center</div>

            <div className="space-y-2">
              <div>전화 : 02-XXXX-XXXX</div>

              <div>
                평일 09:00 - 18:00
                <br />
                (주말, 공휴일 휴무)
              </div>

              <div className="pt-4">
                이메일
                <br />
                yjh@bmpretty.com
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
          © 2026 BMP TECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}