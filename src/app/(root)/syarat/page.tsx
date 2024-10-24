import BlurFade from "@/components/ui/blur-fade";

// import Daftarkan from "@/assets/icons/daftarkan.svg";
export default function Syarat() {
  const syaratAktaCerai = [
    `Surat Keterangan dari desa yang menerangkan "Bahwa
    Akta Cerai tersebut belum pernah dipergunakan untuk
    menikah lagi"`,
    "Surat Tanda Lapor Kehilangan dari Kepolisian",
    "Fotocopy KTP yang bersangkutan",
  ];
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black text-gray-900">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
        <div className="relative w-full h-0 pb-[56.25%]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/paasampang.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0"></div>
            <div className="absolute max-md:-top-1/4 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 max-md:-translate-y-10">
              <BlurFade delay={0.25} inView>
                <div className="w-full m-auto min-h-screen flex items-center flex-col gap-5 justify-center max-md:mt-10 ">
                  <div className="">
                    <div className="text-white w-[520px] max-md:w-[330px] px-4 mb-10">
                      <p className="text-5xl max-md:text-3xl ">
                        Syarat Pengajuan Duplikat{" "}
                        <span className="italic font-semibold text-[#a9efc3]">
                          Akta Cerai
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col text-start gap-5 ">
                      {syaratAktaCerai.map((val, idx) => {
                        return (
                          <div
                            key={idx}
                            className="flex gap-5 text-white items-start"
                          >
                            <div className="bg-[#a9efc3] max-md:size-6 size-8 text-center rounded-full text-black flex items-center justify-center ">
                              <p className="font-semibold">{idx + 1}</p>
                            </div>
                            <p className="w-full">{val}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
