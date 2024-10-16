"use client";
import { Separator } from "@/components/ui/separator";
import { Files, Hammer, Scroll } from "lucide-react";

const gradientColors = [
  "rgba(255, 100, 100, 0.8)", // Light Red
  "rgba(100, 255, 100, 0.6)", // Light Green
  "rgba(100, 100, 255, 0.5)", // Light Blue
];

export default function InformationSection() {
  return (
    <div className="w-full h-fit bg-white py-20">
      <div className="w-full m-auto max-md:px-2 px-80">
        <h4 className="text-5xl font-bold text-center">Informasi</h4>
        <p className="text-lg text-center text-[#17a34a]">
          Informasi surat penting dalam proses pengurusan perceraian
        </p>
        <Separator className="mt-6" />
        {[
          {
            value: "item-1",
            title: "Akte Cerai",
            icon: Scroll,
            color: "#64ff64",
            penjelasan:
              "Akta cerai merupakan akta otentik yang dikeluarkan oleh pengadilan agama sebagai bukti telah terjadi perceraian. Akta cerai bisa diterbitkan jika gugatan dikabulkan oleh majelis hakim dan perkara tersebut telah memperoleh kekuatan hukum tetap (inkracht). erkara dikatakan telah berkekuatan hukum tetap jika dalam waktu 14 hari sejak putusan dibacakan (dalam hal para pihak hadir), salah satu atau para pihak tidak mengajukan upaya hukum banding. Dalam hal pihak tidak hadir, maka perkara baru inkracht terhitung 14 hari sejak pemberitahuan isi putusan disampaikan kepada pihak yang tidak hadir dan yang bersangkutan tidak melakukan upaya hukum banding (putusan kontradiktoir) atau verzet (putusan verstek).",
          },
          {
            value: "item-2",
            title: "Salinan Putusan",
            icon: Files,
            color: "#64ff644d",
          },
          {
            value: "item-3",
            title: "Salinan Penetapan",
            icon: Hammer,
            color: "#6464ff",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex max-md:flex-col justify-between max-md:gap-8 gap-24 items-start relative overflow-hidden p-6 max-md:px-6 px-20"
          >
            <div
              className="gradient-circle"
              style={{
                background: `radial-gradient(circle, ${gradientColors[index]}, transparent 70%)`,
              }}
            ></div>

            <div className="relative">
              <item.icon
                className={`w-20 h-20 relative z-10 text-[${item.color}]`}
              />
            </div>
            <div className="items-start gap-5 text-lg relative z-10">
              <h5 className="text-2xl font-bold">{item.title}</h5>
              <p className="text-[16px]">{item.penjelasan}</p>

              <p className="font-semibold text-[16px] mt-10">Syarat</p>
              <ol className=" text-[16px] list-decimal">
                <li>Menyerahkan nomor perkara yang dimaksud.</li>
                <li>Memperlihatkan KTP Asli dan menyerahkan fotokopinya.</li>
                <li>
                  Membayar Penerimaan Negara Bukan Pajak (PNBP) Akta Cerai
                  Rp.10.000,- (sepuluh ribu rupiah).
                </li>
                <li>
                  Jika menguasakan kepada orang lain (orang tua kandung, anak
                  kandung, dan saudara kandung) untuk mengambil akta cerai, maka
                  di samping fotokopi KTP pemberi dan penerima kuasa, juga
                  menyerahkan Asli Surat Kuasa bermeterai 10000 yang diketahui
                  oleh Kepala Desa/Lurah setempat.
                </li>
              </ol>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .gradient-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(50px);
          z-index: 0;
          bottom: -150px;
          left: 50px;
        }
      `}</style>
    </div>
  );
}
