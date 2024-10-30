"use client";
import ButtonMorph from "@/components/ButtonMorph";
import Link from "next/link";
import { MonitorSmartphoneIcon, UsersRound } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

// import Daftarkan from "@/assets/icons/daftarkan.svg";
export default function Home() {
  const content = [
    {
      click: "Pengertian Akta Cerai, Salinan Putusan, dan Salinan Penetapan ",
      link: "/informasi",
    },
    {
      click:
        "Persyaratan Pengambilan Produk Pengadilan \n (Akta Cerai, Salinan Putusan, dan Salinan Penetapan)",
      link: "/syarat",
    },
    {
      click: "Informasi Tarif Penerimaan Bukan Pajak (PNBP) Produk Pengadilan",
      link: "/hargatarif",
    },
    // {
    //   click: "Sistem Booking Online Pengambilan Produk Pengadilan",
    //   link: "/daftar",
    // },
    // {
    //   click:
    //     "Pengisian Formulir Khusus pengambilan Produk Pengadilan melalui Kuasa Hukum/ Kuasa Insidentil",
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLSfbOZ-myoypA8yDnrNcYOqlwNvGuA140XeVJJE7p28w3wZxkA/viewform?usp=sf_link",
    // },
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
            <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 max-md:-translate-y-10 pb-10">
              <BlurFade delay={0.25} inView>
                <div className="w-fit m-auto min-h-screen flex items-center flex-col gap-5 justify-center ">
                  <h3 className="max-md:text-2xl text-5xl max-md:w-[320px] w-[700px] text-white text-center mb-10">
                    Layanan Pengambilan Produk Pengadilan{" "}
                    <span className="font-bold text-[#a9efc3] italic">
                      Agama Sampang
                    </span>{" "}
                    digital/online
                  </h3>
                  <div className="flex max-md:w-[330px] w-[580px] gap-4">
                    <Link href={"/daftar"} className="w-[50%]">
                      <button className="max-md:h-44 h-72  w-full max-md:text-sm  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl border border-white border-opacity-20 shadow-lg text-white   hover:bg-opacity-30 transition-all duration-300">
                        <MonitorSmartphoneIcon className="max-md:size-12 size-24 m-auto" />
                        <p className="max-md:text-xl text-2xl font-semibold text-[#a9efc3]">
                          Booking Mandiri
                        </p>
                        <p>Pengambilan Produk tanpa Kuasa Hukum</p>
                      </button>
                    </Link>
                    <Link
                      href={"https://forms.gle/tURVxF1tJFz2syDE7"}
                      className="w-[50%]"
                    >
                      <button className="max-md:h-44 h-72  w-full max-md:text-sm bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl border border-white border-opacity-20 shadow-lg text-white   hover:bg-opacity-30 transition-all duration-300 px-3">
                        <UsersRound className="max-md:size-14 size-24 m-auto" />
                        <p className="max-md:text-xl text-2xl font-semibold text-[#a9efc3]">
                          Daftar
                        </p>
                        <p className="max-md:text-xs">
                          Pengambilan Produk Oleh Kuasa Hukum/Kuasa Isidentil
                        </p>{" "}
                      </button>
                    </Link>
                  </div>
                  <h2 className=" italic mt-10 text-[#a9efc3] max-md:text-lg  text-2xl">
                    Informasi
                  </h2>
                  {content.map(
                    (item: { link: string; click: string }, idx: number) => {
                      return (
                        <Link href={item.link} key={idx}>
                          <ButtonMorph>{item.click}</ButtonMorph>
                        </Link>
                      );
                    }
                  )}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
