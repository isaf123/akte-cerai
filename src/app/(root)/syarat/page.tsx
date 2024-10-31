import AkteCerai from "./view/akte";
import SalinanPutusan from "./view/salinanPutusan";
import LegalisirAkta from "./view/Legalisir";
import Duplikat from "./view/Duplikat";
import BlurFade from "@/components/ui/blur-fade";
// import Daftarkan from "@/assets/icons/daftarkan.svg";
export default function Syarat() {
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
            <div className="pb-20 m-auto max-md:w-[330px] w-[720px] py-40 z-50 absolute left-1/2 -translate-x-1/2">
              <div className=" mx-auto flex items-center flex-col gap-5 justify-center max-md:mt-10 ">
                <div className="">
                  <div className="text-white  mb-10">
                    <p className="text-5xl max-md:text-3xl text-center">
                      Syarat Pengambilan Produk{" "}
                      <span className="italic font-semibold text-[#a9efc3]">
                        Pengadilan
                      </span>
                    </p>
                  </div>

                  <div className="w-[720px] max-md:w-[330px] m-auto mt-10">
                    <BlurFade delay={0.2} inView>
                      <h2 className="text-[#a9efc3] font-semibold text-3xl mb-4">
                        Akta Cerai
                      </h2>
                      <AkteCerai />
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                      <h2 className="text-[#a9efc3] font-semibold text-3xl mb-4">
                        Salinan Putusan/Salinan Penetapan
                      </h2>
                      <SalinanPutusan />
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                      <h2 className="text-[#a9efc3] font-semibold text-3xl mb-4">
                        Legalisir Akta Cerai{" "}
                      </h2>
                      <LegalisirAkta />
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                      <h2 className="text-[#a9efc3] font-semibold text-3xl mb-4">
                        Duplikat Akta Cerai
                      </h2>
                      <Duplikat />
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
