export default function ProductPage4() {
  return (
    <main className="bg-white text-[#5b4a47]">
      <section className="bg-[#fff0e9] px-6 pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="mx-auto max-w-[1200px]">
          <a href="/#products" className="text-sm font-bold text-[#d88986]">← PRODUCT LIST</a>
          <p className="mt-10 text-sm font-bold tracking-[0.25em] text-[#d88986]">PRODUCT 04</p>
          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">Control Board</h1>
          <p className="mt-5 text-2xl font-bold text-[#9b6a65]">제어 보드 설계·개발</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div className="overflow-hidden bg-[#fbf3ef] shadow-xl">
            <img src="/product04.png" alt="Control Board" className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">MCU 기반 제어 보드 개발</h2>
            <p className="mt-6 text-lg leading-9 text-[#6d5b57]">
              MCU 기반 제어보드, 센서 인터페이스, 출력 제어 회로, 통신 회로를 제품 목적에 맞게 개발합니다.
            </p>

            <div className="mt-10 grid gap-4">
              {["MCU 제어 회로 설계", "센서 및 액추에이터 연동", "통신 인터페이스 구성", "전원 및 보호 회로 검토"].map((item) => (
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