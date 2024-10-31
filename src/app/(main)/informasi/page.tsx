"use client";
import { Separator } from "@/components/ui/separator";
import { Files, Scroll } from "lucide-react";

export default function InformationSection() {
  return (
    <div className="w-full h-fit bg-white py-20">
      <div className="w-full m-auto max-md:px-2 px-80">
        <h4 className="text-5xl font-bold text-center">Informasi</h4>
        <p className="text-lg text-center text-[#17a34a]">
          Informasi surat penting dalam proses pengurusan perceraian
        </p>
        <Separator className="mt-6" />
        <div className="flex max-md:flex-col justify-between max-md:gap-8 gap-24 items-start relative overflow-hidden p-6 max-md:px-6 px-28">
          <div className="relative">
            <Scroll className="w-20 h-20  " />
          </div>
          <div className="items-start gap-5 text-lg relative z-10">
            <h5 className="text-2xl font-bold text-[#17a34a]">
              Pengertian Akta Cerai
            </h5>
            <p className="text-[16px]">
              Akta cerai merupakan akta otentik yang dikeluarkan oleh pengadilan
              agama sebagai bukti telah terjadi perceraian. Akta cerai bisa
              diterbitkan jika gugatan dikabulkan oleh majelis hakim dan perkara
              tersebut telah memperoleh kekuatan hukum tetap (inkracht). Perkara
              dikatakan telah berkekuatan hukum tetap jika dalam waktu 14 hari
              sejak putusan dibacakan (dalam hal para pihak hadir), salah satu
              atau para pihak tidak mengajukan upaya hukum banding. Dalam hal
              pihak tidak hadir, maka perkara baru inkracht terhitung 14 hari
              sejak pemberitahuan isi putusan disampaikan kepada pihak yang
              tidak hadir dan yang bersangkutan tidak melakukan upaya hukum
              banding (putusan kontradiktoir) atau verzet (putusan verstek).
            </p>

            <p className="font-semibold text-2xl mt-10 text-[#17a34a]">
              Urgensi Akta Cerai
            </p>
            <p className="text-[16px]">
              Akta cerai merupakan dokumen hukum yang sangat penting bagi
              pasangan yang ingin mengakhiri perkawinan mereka secara resmi.
              Berikut ini adalah beberapa alasan mengapa akta cerai sangat
              penting:
            </p>
            <ol className=" text-[16px] list-decimal ml-8 list">
              <li>
                Mengakhiri hubungan perkawinan secara sah: Dengan adanya akta
                cerai, hubungan perkawinan antara pasangan dianggap telah resmi
                berakhir secara hukum dan sah di mata negara..
              </li>
              <li>
                Melindungi hak dan kewajiban pasangan: Akta cerai juga berisi
                informasi tentang hak dan kewajiban pasangan setelah perceraian,
                termasuk pembagian harta dan tanggung jawab atas anak-anak.
              </li>
              <li>
                Mempermudah proses administratif: Akta cerai diperlukan untuk
                mengurus berbagai administrasi setelah perceraian, seperti
                mengubah status perkawinan pada dokumen-dokumen resmi seperti
                KTP, KK, dan akta kelahiran anak.
              </li>
              <li>
                Mencegah perselisihan di masa depan: Dengan adanya akta cerai,
                pasangan dapat menghindari kemungkinan perselisihan di masa
                depan terkait status perkawinan dan tanggung jawab mereka
                sebagai mantan pasangan.
              </li>
            </ol>
          </div>
        </div>
        <Separator className="mt-6" />
        <div className="flex max-md:flex-col justify-between max-md:gap-8 gap-24 items-start relative overflow-hidden p-6 max-md:px-6 px-28">
          <div className="relative">
            <Files className="w-20 h-20  " />
          </div>
          <div className="items-start gap-5 text-lg relative z-10">
            <h5 className="text-2xl font-bold text-[#17a34a]">
              Salinan Putusan/Penetapan
            </h5>
            <p className="text-[16px] mb-4 ">
              Salinan Putusan/Penetapan merupakan turunan putusan/penetapan yang
              diterbitkan oleh pengadilan
            </p>
            <p className="text-[16px] mb-1">
              Surat Edaran Nomor 01 Tahun 2011 tentang Perubahan Surat Edaran
              Mahkamah Agung Nomor 02 Tahun 2010 tentang Penyampaian Salinan dan
              Petikan Putusan, yang dalam Poin 1 s.d. Poin 3 dikatakan:
            </p>

            <p className="text-[16px] mb-4 italic font-semibold">
              “Pengadilan yang memeriksa dan mengadili perkara Perdata sudah
              harus menyediakan salinan putusan untuk para pihak dalam waktu 14
              (empat belas) hari kerja sejak putusan diucapkan. Karena salinan
              putusan dalam perkara Perdata dikenakan biaya PNBP, maka
              penyampaian salinan putusan tersebut harus atas permintaan pihak
              yang bersangkutan”
            </p>
            <p className="text-[16px] mb-1">
              Lampiran I SK KMA 1-144/KMA/SK/I/2011 tentang Pedoman Pelayanan
              Informasi di Pengadilan huruf C.2.1. menyatakan:
            </p>
            <p className="text-[16px] mb-8 italic font-semibold">
              “Seluruh putusan dan penetapan Pengadilan, baik yang telah
              berkekuatan hukum tetap maupun yang belum berkekuatan hukum tetap
              (dalam bentuk fotokopi atau naskah elektronik, bukan salinan
              resmi) adalah termasuk sebagai informasi yang wajib tersedia
              setiap saat dan dapat diakses oleh publik.”
            </p>

            <p className="text-lg mb-2 font-semibold text-[#17a34a]">
              Salinan Putusan/Penetapan dalam Proses Persidangan Secara
              Elektronik
            </p>
            <p className="text-[16px] mb-4 ">
              Salinan putusan/penetapan yang dapat diunduh (download) melalui
              akun pengguna pada Sistem Informasi Pengadilan di mana ia
              berperkara. Hal tersebut merupakan bukti yang sah secara hukum,
              mempunyai akibat hukum yang sah, sehingga bisa langsung
              dipergunakan sesuai peruntukannya. Status hukum (sebagai bukti
              yang sah dan mempunyai akibat hukum yang sah) salinan
              putusan/penetapan elektronik ini tidak hanya melekat terbatas pada
              salinan putusan/penetapan yang diunduh yang biasanya dalam bentuk
              Portable Document Format (pdf), tetapi melekat pula pada hasil
              cetakannya yang juga mempunyai status hukum yang sama kuatnya.
            </p>

            <p className="font-semibold text-2xl mt-10 text-[#17a34a]">
              Urgensi Salinan Putusan/Penetapan
            </p>

            <ol className=" text-[16px] list-decimal ml-8 list">
              <li>
                Salinan putusan pengadilan memiliki peran yang vital dalam
                bersengketa di pengadilan.
              </li>
              <li>
                Lewat salinan putusan dapat diketahui legal reasoning dibalik
                keputusan hakim dalam menyelesaikan sebuah sengeketa.
              </li>
              <li>
                Salinan putusan pengadilan juga merupakan prasyarat bagi para
                pihak ketika hendak mengajukan upaya hukum.
              </li>
              <li>
                - Bahan utama dalam menyusun memori banding atau memori kasasi
                adalah salinan putusan pada tingkat pertama.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
