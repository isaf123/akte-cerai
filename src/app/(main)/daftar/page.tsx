import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import { BookCheck, School, MailCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Submit() {
  return (
    <div className="min-h-screen m-auto z-10 flex flex-col justify-center items-center pt-28">
      <div>
        <WordPullUp
          words="Pendaftaran Pengambilan Akta Cerai"
          className="font-extrabold text-5xl max-md:w-[330px] w-[700px] text-center m-auto mb-10 h-fit max-md:text-2xl"
        ></WordPullUp>

        <div className="w-fit m-auto">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdw8Du6MVkSnPFLLJFG0zvZl1o32SznQTO5aJ-vS6oErNPotg/viewform?fbzx=-7886196831081016118">
            <Button className="m-auto text-lg px-8 py-6 bg-[#32b281]">
              Daftar
            </Button>
          </Link>
        </div>
        <h2 className="w-fit m-auto mt-20 text-lg text-gray-500 text-center px-2">
          Alur Pendaftaran Pengambilan Akta Cerai secara online
        </h2>
      </div>

      <div className="flex max-md:flex-col justify-between gap-20 text-center max-md:w-[330px] mt-16 m-auto max-md:items-center">
        <div className="flex flex-col items-center w-[265px]">
          <div className="w-28 h-28 bg-gradient-to-t from-white to-[#aaefc3] rounded-full flex justify-center items-center relative">
            <p className="absolute top-[-30px] text-xl font-bold">1</p>
            <BookCheck className="size-10" />
          </div>
          <h3 className="mt-10">Check SIPP, apakah telah terbit</h3>
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
    </div>
  );
}
