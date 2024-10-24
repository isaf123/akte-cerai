import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

// import Daftarkan from "@/assets/icons/daftarkan.svg";
export default function Home() {
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
            <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 max-md:-translate-y-10">
              <div className="w-fit m-auto min-h-screen flex items-center flex-col gap-5 justify-center max-md:mt-10 mt-[600px]">
                <BlurFade delay={0.25} inView>
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/images/logosirakyat.png"}
                      alt=""
                      width={500}
                      height={300}
                      className="max-md:w-[320px] max-md:h-fit"
                    />
                    <div className="text-white max-md:w-fit px-2 w-[620px] text-justify md:text-xl mt-5">
                      <p>Assalmualaikum Wr Wb</p>
                      <p className="">
                        Selamat datang dilayanan penyerahan produk Pengadilan
                        Agama Sampang. Layanan ini diberi nama{" "}
                        <span className="font-semibold text-[#a9efc3] italic">
                          SIRAKYAT
                        </span>{" "}
                        yang diambil dari 6 tahapan gagasan kreatif dan inovatif
                        rancangan aktualisasi.
                      </p>
                    </div>
                    <p className="text-white max-md:text-sm mt-4">
                      <span className="text-[#a9efc3]">Oleh :</span>Belinda Dwi
                      Tamara, S.H.
                    </p>

                    <Link href={"/menu"}>
                      <Button className="bg-[#a9efc3] text-black mt-5 mb-10 hover:text-white">
                        lanjut
                        <MoveRight className="size-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                  <div className="text-white max-md:text-sm text-xl max-md:w-screen w-[550px] flex flex-col gap-5">
                    <div className="flex gap-6  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        SI
                      </h3>
                      <p>Sistem Informasi</p>
                    </div>
                    <Separator className="opacity-30" />
                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        R
                      </h3>
                      <p>
                        sosialisasi masya
                        <span className="font-extrabold text-[#a9efc3]">R</span>
                        akat untuk pentingnya layananan digital di era
                        digitalisasi
                      </p>
                    </div>

                    <Separator className="opacity-30" />
                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        A
                      </h3>
                      <p>
                        melakukan kolaborasi dengan{" "}
                        <span className="font-extrabold text-[#a9efc3]">A</span>
                        hli IT bidang coding
                      </p>
                    </div>
                    <Separator className="opacity-30" />

                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        K
                      </h3>
                      <p>
                        membuat rancangan isi web dalam bentu
                        <span className="font-extrabold text-[#a9efc3]">
                          K
                        </span>{" "}
                        scan barcode
                      </p>
                    </div>
                    <Separator className="opacity-30" />

                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        Y
                      </h3>
                      <p>
                        mensinkronkan data dalam pen
                        <span className="font-extrabold text-[#a9efc3]">Y</span>
                        usunan isi web{" "}
                      </p>
                    </div>
                    <Separator className="opacity-30" />

                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        A
                      </h3>
                      <p>
                        membuat notifik
                        <span className="font-extrabold text-[#a9efc3]">A</span>
                        si kepada para pihak pencari keadilan didalam web
                        layanan penyerahan produk pengadilan{" "}
                      </p>
                    </div>
                    <Separator className="opacity-30" />

                    <div className="flex gap-8  items-center px-4">
                      <h3 className="text-[#a9efc3] text-4xl font-semibold">
                        T
                      </h3>
                      <p>
                        membuat notifik membuat formulir iden
                        <span className="font-extrabold text-[#a9efc3]">T</span>
                        itas diri dalam penyerahan surat kuasa secara digital
                        dalam web e-akta cerai
                      </p>
                    </div>
                    <Separator className="opacity-30" />
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
