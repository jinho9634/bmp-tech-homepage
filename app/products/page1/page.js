export default function ProductPage1() {
  return (
    <main className="bg-white text-[#5b4a47]">
      <section className="bg-[#fff0e9] px-6 pt-3 pb-2 md:pt-5 md:pb-2">
        <div className="mx-auto max-w-[1200px]">
          <a href="/#products" className="text-sm font-bold text-[#d88986]">
            ← PRODUCT LIST
          </a>

          <p className="mt-6 text-sm font-bold tracking-[0.25em] text-[#d88986]">
            PRODUCT 01
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-[#5b4a47] md:text-6xl">
            RF PCB Design
          </h1>

          <p className="mt-5 text-2xl font-bold text-[#9b6a65]">
            고주파 RF PCB 설계·제작
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div className="overflow-hidden bg-[#fbf3ef] shadow-xl">
            <img
              src="/product01.png"
              alt="RF PCB Design"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#5b4a47]">
              RF 특성을 고려한 PCB 설계
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#6d5b57]">
              고주파 RF 회로에서는 일반 PCB 설계와 달리 패턴 길이, 임피던스,
              GND 구조, 부품 배치, 신호 경로가 제품 성능에 직접적인 영향을 줍니다.
              비엠피테크는 RF 특성을 고려한 PCB 구조 설계와 제작 대응을 지원합니다.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                "고주파 신호 경로를 고려한 PCB 패턴 설계",
                "GND 구조 및 노이즈 저감 설계",
                "RF 출력부 부품 배치 최적화",
                "시제품 제작 및 PCB 제작 대응",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l-4 border-[#d88986] bg-[#fbf3ef] p-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="mt-10 inline-flex bg-[#d88986] px-8 py-4 font-bold text-white hover:bg-[#c87976]"
            >
              문의하기 →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}