import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import { BookCheck, School, MailCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
export default function Submit() {
  return (
    <div className=" min-h-screen m-auto z-10 flex flex-col justify-center items-center max-md:mt-20">
      <div>
        <WordPullUp
          words="Pendaftaran Pengambilan Produk Pengadilan Agama Sampang"
          className="font-extrabold text-5xl max-md:w-[330px] w-[700px] text-center m-auto mb-10 h-fit max-md:text-2xl"
        ></WordPullUp>
        <BlurFade delay={0.5}>
          <div className="w-fit m-auto">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScIR3jOL1QI0Lrl7r3efb18o4UrQJVTEB2OtF0bAH47V-M5HA/viewform?usp=sf_link">
              <Button className="m-auto text-lg px-8 py-6 bg-[#32b281]">
                Daftar
              </Button>
            </Link>
          </div>
          <h2 className="w-fit m-auto mt-20 text-lg text-gray-500 text-center px-2">
            Alur Pendaftaran secara online
          </h2>
        </BlurFade>
      </div>
      <BlurFade inView delay={0.7}>
        <div className="flex max-md:flex-col justify-between gap-20 text-center max-md:w-[330px] mt-16 m-auto max-md:items-center">
          <div className="flex flex-col items-center w-[300px]">
            <div className="w-28 h-28 bg-gradient-to-t from-white to-[#aaefc3] rounded-full flex justify-center items-center relative">
              <p className="absolute top-[-30px] text-xl font-bold">1</p>
              <BookCheck className="size-10" />
            </div>
            <h3 className="mt-10">
              Check Nomor Perkara Dan Tanggal BHT (Berkekuatan Hukum Tetap) di
              SIPP.
            </h3>
            <Link
              href={
                "https://wa.me/6285183213278?text=Halo,%20apakah%20nomor%20perkara%20saya%20telah%20terbit?%20dengan:%0A%0Anama:%0A%0ANIK:%3A%0A1."
              }
            >
              <Button className="flex gap-2 mt-2 bg-[#32b281]">
                <p className="">klik disini untuk Check</p>
                <Image
                  src={"/images/waiconimg.png"}
                  alt=""
                  width={22}
                  height={22}
                  className="animate-bounce"
                />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center w-[265px]">
            <div className="w-28 h-28 bg-gradient-to-t from-white to-[#aaefc3] rounded-full flex justify-center items-center relative">
              <p className="absolute top-[-30px] text-xl font-bold">2</p>

              <Image
                src="/images/submitmonitor.png"
                alt=""
                width={140}
                height={140}
                className="w-12 h-12"
              />
            </div>
            <h3 className="mt-10">
              Daftarkan diri secara online untuk pengambilan {"\n"}
              <span className="font-semibold text-[#17a34a]">
                Akta Cerai, Salinan Putusan, dan Salinan Penetapan
              </span>
            </h3>
          </div>

          <div className="flex flex-col items-center w-[265px]">
            <div className="w-28 h-28 bg-gradient-to-t from-white to-[#aaefc3] rounded-full flex justify-center items-center relative">
              <p className="absolute top-[-30px] text-xl font-bold">3</p>

              <MailCheck className="size-10" />
            </div>
            <h3 className="mt-10">
              Cek email secara berkala untuk melihat hasil validasi pendaftaran
              oleh petugas
            </h3>
          </div>
          <div className="flex flex-col items-center w-[265px]">
            <div className="w-28 h-28 bg-gradient-to-t from-white to-[#aaefc3] rounded-full flex justify-center items-center relative">
              <p className="absolute top-[-30px] text-xl font-bold">4</p>

              <School className="size-10" />
            </div>
            <h3 className="mt-10">
              Jika pendaftaran tervalidasi, berkas dapat di ambil di Pengadilan
              Agama Sampang{" "}
            </h3>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
