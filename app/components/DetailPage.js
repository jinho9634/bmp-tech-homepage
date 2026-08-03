function GeneralDetailPage({ item }) {
  return (
    <>
      <section className="bg-[#fff7f3] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#d88986]">
              {item.type}
            </p>

            <p className="mt-4 text-sm font-bold text-[#ad8f8b]">
              {item.num}
            </p>

            <h1 className="mt-5 text-4xl font-extrabold text-[#3f3432] md:text-6xl">
              {item.title}
            </h1>

            <p className="mt-4 text-xl font-bold text-[#d88986]">
              {item.sub}
            </p>

            <p className="mt-7 max-w-2xl leading-8 text-[#746360]">
              {item.overview}
            </p>
          </div>

          <div className="flex min-h-[350px] items-center justify-center bg-white p-8 shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[550px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#d88986]">
              Key Features
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#3f3432]">
              주요 특징
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {(item.features || []).map((feature, index) => (
                <div key={feature} className="rounded-xl bg-[#fbf3ef] p-5">
                  <span className="text-sm font-bold text-[#d88986]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-bold">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#d88986]">
              Specifications
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#3f3432]">
              기본 사양
            </h2>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#eadbd7]">
              {(item.specs || []).map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[120px_1fr] gap-4 px-5 py-4 ${
                    index !== (item.specs || []).length - 1
                      ? "border-b border-[#eadbd7]"
                      : ""
                  }`}
                >
                  <span className="font-bold text-[#d88986]">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf3ef] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#d88986]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#3f3432]">
            적용 분야
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(item.applications || []).map((application) => (
              <div key={application} className="bg-white p-6 text-lg font-bold shadow-sm">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRows({ rows }) {
  return (
    <div className="mt-3">
      {rows.map(([label, value], index) => (
        <div
          key={`${label}-${value}`}
          className={`grid grid-cols-[128px_1fr] gap-3 py-2.5 text-xs ${
            index !== rows.length - 1 ? "border-b border-[#eadbd7]" : ""
          }`}
        >
          <span className="font-bold leading-5 text-[#8d6864]">{label}</span>
          <span className="text-right leading-5 text-[#4f4543]">{value}</span>
        </div>
      ))}
    </div>
  );
}

function TechnicalBoardPage({ item }) {
  const generalInfo = item.generalInfo || [];
  const environment = item.environment || [];
  const applications = item.applications || [];
  const specGroups = item.specGroups || [];

  return (
    <section className="bg-[#fff7f3] py-8 md:py-12">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8 lg:px-12">
        <article className="overflow-hidden border border-[#eadbd7] bg-white shadow-[0_24px_65px_rgba(95,61,57,0.12)]">
          <div className="grid lg:grid-cols-[34%_66%]">
            <aside className="border-b border-[#eadbd7] bg-[#fbf3ef] p-6 md:p-9 lg:border-b-0 lg:border-r">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d88986]">
                {item.type}
              </p>
              <p className="mt-3 text-xs font-bold tracking-[0.18em] text-[#b99692]">
                {item.num}
              </p>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#3f3432] md:text-4xl">
                {item.title}
              </h1>
              <p className="mt-3 text-base font-bold leading-7 text-[#d88986] md:text-lg">
                {item.sub}
              </p>

              <div className="mt-8 flex min-h-[330px] items-center justify-center bg-white p-5 md:min-h-[420px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[480px] w-full object-contain drop-shadow-[0_22px_28px_rgba(95,61,57,0.18)]"
                />
              </div>

              <section className="mt-8">
                <h2 className="border-b-2 border-[#d88986] pb-2 text-lg font-extrabold text-[#3f3432]">
                  General Information
                </h2>
                <InfoRows rows={generalInfo} />
              </section>

              <section className="mt-8">
                <h2 className="border-b-2 border-[#d88986] pb-2 text-lg font-extrabold text-[#3f3432]">
                  Applications
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-[#6d5b57]">
                  {applications.map((application) => (
                    <li key={application} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d88986]" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="border-b-2 border-[#d88986] pb-2 text-lg font-extrabold text-[#3f3432]">
                  General Environment Condition
                </h2>
                <InfoRows rows={environment} />
              </section>
            </aside>

            <div className="p-6 md:p-9 lg:p-10">
              <div className="mb-8 border-b border-[#eadbd7] pb-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d88986]">
                  Technical Specifications
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#3f3432] md:text-4xl">
                  기술 사양
                </h2>
              </div>

              <div className="space-y-8">
                {specGroups.map((group) => (
                  <section key={group.title} className="break-inside-avoid">
                    <div className="border-b-2 border-[#d88986] pb-2">
                      <h3 className="text-sm font-extrabold uppercase tracking-[0.05em] text-[#5b4a47]">
                        {group.title}
                      </h3>
                    </div>

                    <div className="mt-2">
                      {group.rows.map(([label, value], index) => (
                        <div
                          key={`${group.title}-${label}`}
                          className={`grid grid-cols-[145px_1fr] gap-4 py-2.5 text-xs md:grid-cols-[180px_1fr] ${
                            index !== group.rows.length - 1
                              ? "border-b border-[#eee3e0]"
                              : ""
                          }`}
                        >
                          <span className="font-bold leading-5 text-[#8d6864]">
                            {label}
                          </span>
                          <span className="text-right leading-5 text-[#4f4543]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#eadbd7] bg-white px-6 py-5 md:px-9">
            <p className="text-[9px] leading-5 text-[#786966] md:text-xs">
              ※ 기술 사양은 사전 예고 없이 변경될 수 있습니다. 본 페이지에 기재된 기능 및 기술적 특징은 게시 시점을 기준으로 하며, 법적 구속력이나 성능 보증을 의미하지 않습니다. 모든 사양은 별도의 예고 없이 변경될 수 있으며, 관련 사항은 비엠피테크로 문의해 주시기 바랍니다.
            </p>
            <p className="mt-2 text-[8px] leading-4 text-[#9a8884] md:text-[11px]">
              Technical specifications are subject to change without prior notice. The functions and technical features described on this page are valid at the time of publication. They are neither legally binding nor guaranteed. All specifications are subject to change without prior notice. For any related inquiries, please contact BMP TECH.
            </p>
          </div>

          <footer className="flex flex-col justify-between gap-3 border-t border-[#eadbd7] bg-[#fbf3ef] px-6 py-5 text-xs text-[#8d7773] md:flex-row md:px-9">
            <span>© BMP TECH. All rights reserved.</span>
            <span>BMP TECH · RF Control & Embedded Hardware Solution</span>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default function DetailPage({ item, backHref = "/#products" }) {
  const isTechnicalBoard = Boolean(item?.specGroups && item?.generalInfo);

  return (
    <main className="min-h-screen bg-white text-[#5b4a47]">
      <header className="sticky top-0 z-50 border-b border-[#eadbd7] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:h-24 lg:px-12">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BMP TECH Logo" className="h-12 w-auto md:h-16" />
            <span className="font-bold">BMP TECH</span>
          </a>

          <a
            href={backHref}
            className="border border-[#d88986] px-4 py-2.5 text-xs font-bold text-[#d88986] transition hover:bg-[#d88986] hover:text-white md:px-5 md:py-3 md:text-sm"
          >
            목록으로 돌아가기
          </a>
        </div>
      </header>

      {isTechnicalBoard ? <TechnicalBoardPage item={item} /> : <GeneralDetailPage item={item} />}
    </main>
  );
}
