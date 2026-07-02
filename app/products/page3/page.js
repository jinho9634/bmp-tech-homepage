export default function ProductPage3() {
  return (
    <main className="bg-white text-[#5b4a47]">
      <section className="bg-[#fff0e9] px-6 pt-16 pb-2 md:pt-20 md:pb-2">
        <div className="mx-auto max-w-[1200px]">
          <a href="/#products" className="text-sm font-bold text-[#d88986]">← PRODUCT LIST</a>
          <p className="mt-10 text-sm font-bold tracking-[0.25em] text-[#d88986]">PRODUCT 03</p>
          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">RF System</h1>
          <p className="mt-5 text-2xl font-bold text-[#9b6a65]">시제품·제품화 지원</p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div className="overflow-hidden bg-[#fbf3ef] shadow-xl">
            <img src="/product03.png" alt="RF System" className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">시제품부터 제품화까지</h2>
            <p className="mt-6 text-lg leading-9 text-[#6d5b57]">
              시제품 제작, 동작 검증, 설계 보완, 제품화 검토까지 개발 단계별 기술 대응을 지원합니다.
            </p>

            <div className="mt-10 grid gap-4">
              {["시제품 제작 지원", "제품 동작 검증", "설계 보완 및 개선", "양산 전 기술 검토"].map((item) => (
                <div key={item} className="border-l-4 border-[#d88986] bg-[#fbf3ef] p-4 font-semibold">{item}</div>
              ))}
            </div>

            <a href="/#contact" className="mt-10 inline-flex bg-[#d88986] px-8 py-4 font-bold text-white hover:bg-[#c87976]">문의하기 →</a>
          </div>
        </div>
      </section>
    </main>
  );
}