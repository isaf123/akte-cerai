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
    <div className="w-full py-20">
      <div className="w-fit m-auto mb-10">
        <h3 className="text-4xl font-bold">
          Daftar Tarif Penerimaan Bukan Pajak {`(PNBP)`}
        </h3>
        <p className="text-lg text-center text-[#17a34a]">
          Informasi surat penting dalam proses pengurusan perceraian
        </p>
      </div>
      <div className="max-w-[920px] m-auto w-fit">
        <Card>
          <CardHeader className="bg-[#f97216] rounded-t-sm mb-8 flex justify-end items-end">
            <div className="bg-gray-200 w-3 h-3 rounded-full"></div>
          </CardHeader>
          <CardContent>
            {price.map((item: any, idx: number) => {
              return (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-4 items-start text-lg ">
                      <p>{idx + 1}.</p>
                      <h2 className="">{item.surat}</h2>
                    </div>
                    <div className="flex items-end gap-1 w-[229px]">
                      <div className="flex items-start gap-2 font-extrabold justify-start">
                        <p className="text-sm">RP</p>
                        <p className="text-4xl hover:text-[#f97216]">
                          {item.price}
                        </p>
                      </div>
                      <div className="w-[71px]">
                        <p className="text-sm w-full ">{item.per}</p>
                      </div>
                    </div>
                  </div>
                  {idx !== 4 && <Separator className="my-8" />}
                </>
              );
            })}
          </CardContent>
          <CardFooter className="bg-[#f97216] rounded-b-sm"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
