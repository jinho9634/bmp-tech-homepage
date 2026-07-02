export default function ProductPage2() {
  return (
    <main className="bg-white text-[#5b4a47]">
      <section className="bg-[#fff0e9] px-6 pt-3 pb-2 md:pt-5 md:pb-2">
        <div className="mx-auto max-w-[1200px]">
          <a href="/#products" className="text-sm font-bold text-[#d88986]">← PRODUCT LIST</a>
          <p className="mt-6 text-sm font-bold tracking-[0.25em] text-[#d88986]">PRODUCT 02</p>
          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">RF Development</h1>
          <p className="mt-5 text-2xl font-bold text-[#9b6a65]">RF 회로 및 제어 개발</p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div className="overflow-hidden bg-[#fbf3ef] shadow-xl">
            <img src="/product02.png" alt="RF Development" className="h-full w-full object-contain" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">RF 회로 구성과 동작 검증</h2>
            <p className="mt-6 text-lg leading-9 text-[#6d5b57]">
              RF 회로 구성, 출력 제어, 신호 검증, 인터페이스 연동까지 제품 동작에 필요한 회로 개발을 지원합니다.
            </p>

            <div className="mt-10 grid gap-4">
              {["RF 출력 회로 개발", "출력 제어 로직 구성", "신호 검증 및 튜닝", "시스템 인터페이스 연동"].map((item) => (
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