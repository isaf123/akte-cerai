"use client";
import ButtonMorph from "@/components/ButtonMorph";
import Link from "next/link";

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
      link: "/",
    },
    {
      click: "Informasi Tarif Penerimaan Bukan Pajak (PNBP) Produk Pengadilan",
      link: "/hargatarif",
    },
    {
      click: "Sistem Booking Online Pengambilan Produk Pengadilan",
      link: "/daftar",
    },
    {
      click:
        "Pengisian Formulir Khusus pengambilan Produk Pengadilan melalui Kuasa Hukum/ Kuasa Insidentil",
      link: "/https://docs.google.com/forms/d/e/1FAIpQLSfbOZ-myoypA8yDnrNcYOqlwNvGuA140XeVJJE7p28w3wZxkA/viewform?usp=sf_link",
    },
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
            <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 max-md:-translate-y-10">
              <div className="w-fit m-auto min-h-screen flex items-center flex-col gap-5 justify-center ">
                <h3 className="max-md:text-2xl text-5xl max-md:w-[320px] w-[700px] text-white text-center mb-10">
                  Layanan Pengurusan{" "}
                  <span className="font-bold text-[#a9efc3] italic">
                    Akta Cerai
                  </span>{" "}
                  Pengadilan Agama Sampang
                </h3>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
