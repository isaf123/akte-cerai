import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PriceList() {
  const price = [
    {
      surat: "Pengesahan dan Pendaftaran Surat di Bawah Tangan",
      price: "10.000",
      per: "/surat",
    },
    {
      surat: "Penyerahan Salinan Putusan/Penetapan",
      price: "500",
      per: "/lembar",
    },
    {
      surat:
        "Akta/Surat Keterangan Asli yang Dibuat di Kepaniteraan di Luar Perkara",
      price: "10.000",
      per: "/akta per surat",
    },
    {
      surat:
        "Penerbitan dan Penyerahan Akta Cerai yang Dibuat di Kepaniteraan pada Pengadilan Agama",
      price: "10.000",
      per: "/akta",
    },
    {
      surat:
        "Pendaftaran Surat Kuasa/Kuasa Isidentil untuk Mewakili Pihak yang Berperkara di Pengadilan",
      price: "10.000",
      per: "/akta",
    },
  ];
  return (
    <div className="w-full py-20 ">
      <div className="w-fit m-auto mb-10">
        <h3 className="max-md:text-3xl text-4xl font-bold text-center">
          Daftar Tarif Penerimaan Bukan Pajak {`(PNBP)`}
        </h3>
        <h3 className="text-lg max-md:w-[330px] w-[750px] font-semibold text-center text-[#32b281] m-auto">
          Dalam Penyerahan Produk Pengadilan Agama Sampang Berdasarkan PP Nomor
          5 Tahun 2019 tentang Jenis dam Tarif Penerimaan Negara Bukan Pajak
          yang Berlaku pada Mahkamah Agung dan Badan Peradilan yang berada
          dibawahnya
        </h3>
      </div>
      <div className="max-w-[920px] m-auto ">
        <Card>
          <CardHeader className="bg-[#32b281] rounded-t-sm mb-8 flex justify-end items-end">
            <div className="bg-gray-200 w-3 h-3 rounded-full"></div>
          </CardHeader>
          <CardContent>
            {price.map(
              (
                item: { surat: string; price: string; per: string },
                idx: number
              ) => {
                return (
                  <>
                    <div
                      className="flex items-center justify-between gap-4"
                      key={idx}
                    >
                      <div className="flex gap-4 items-start text-lg ">
                        <p>{idx + 1}.</p>
                        <h2 className="max-md:text-sm">{item.surat}</h2>
                      </div>
                      <div className="flex items-end gap-1 w-[229px] max-md:justify-end">
                        <div className="flex items-start gap-2 font-extrabold justify-start">
                          <p className="max-md:text-[8px] text-sm font-thin">
                            RP
                          </p>
                          <p className="max-md:text-lg text-4xl hover:text-[#32b281]">
                            {item.price}
                          </p>
                        </div>
                        <div className="max-md:w-fit w-[71px]">
                          <p className="text-sm w-full max-md:text-[11px]">
                            {item.per}
                          </p>
                        </div>
                      </div>
                    </div>
                    {idx !== 4 && <Separator className="my-8" />}
                  </>
                );
              }
            )}
          </CardContent>
          <CardFooter className=" rounded-b-sm"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
