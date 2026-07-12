export default function DetailPage({ item, backHref = "/#products" }) {
  return (
    <main className="min-h-screen bg-white text-[#5b4a47]">
      <header className="border-b border-[#eadbd7] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8 lg:h-24 lg:px-12">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-12 w-auto md:h-16" />
            <span className="font-bold">BMP TECH</span>
          </a>
          <a href={backHref} className="border border-[#d88986] px-5 py-3 text-sm font-bold text-[#d88986] hover:bg-[#d88986] hover:text-white">목록으로 돌아가기</a>
        </div>
      </header>

      <section className="bg-[#fff7f3] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="flex min-h-[380px] items-center justify-center rounded-3xl bg-white p-8 shadow-[0_20px_45px_rgba(120,80,80,0.10)]">
            <img src={item.image} alt={item.title} className="max-h-[520px] w-full object-contain" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">{item.type}</p>
            <p className="mt-4 text-sm font-bold tracking-[0.18em] text-[#caa6a3]">{item.num}</p>
            <h1 className="mt-4 text-4xl font-extrabold text-[#333] md:text-6xl">{item.title}</h1>
            <p className="mt-4 text-xl font-semibold text-[#d88986]">{item.sub}</p>
            <p className="mt-8 text-base leading-8 text-[#6d5b57] md:text-lg">{item.overview}</p>
            <a href="/#contact" className="mt-9 inline-flex bg-[#d88986] px-7 py-4 font-bold text-white hover:bg-[#c87976]">제품 및 개발 문의 →</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">Key Features</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">주요 특징</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {item.features.map((feature, index) => <div key={feature} className="rounded-2xl bg-[#fbf3ef] p-5"><span className="text-sm font-bold text-[#d88986]">0{index + 1}</span><p className="mt-2 font-bold">{feature}</p></div>)}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">Specifications</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">기본 사양</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#eadbd7]">
              {item.specs.map(([label, value], index) => <div key={label} className={`grid grid-cols-[120px_1fr] gap-4 px-5 py-4 ${index !== item.specs.length - 1 ? "border-b border-[#eadbd7]" : ""}`}><span className="font-bold text-[#d88986]">{label}</span><span>{value}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf3ef] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d88986]">Applications</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">적용 분야</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{item.applications.map((application) => <div key={application} className="bg-white p-6 text-lg font-bold shadow-sm">{application}</div>)}</div>
        </div>
      </section>

      <footer className="border-t border-[#eadbd7] bg-white py-10 text-center text-sm text-[#777]">© BMP TECH. All rights reserved.</footer>
    </main>
  );
}
