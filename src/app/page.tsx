"use client";
import { Button } from "@/components/ui/button";
import InformationSection from "./desktop/information";
import PriceList from "./desktop/price";
import SyaratSurat from "./desktop/syarat";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
        <div className="min-h-screen m-auto z-10">
          <h3 className="font-extrabold text-7xl w-[890px] text-center m-auto mb-10 text-white">
            Pendaftaran Pengambilan Akta Cerai
          </h3>
          <div className="w-fit m-auto">
            <Button className="m-auto text-lg px-8 py-6 ">Daftar</Button>
          </div>
        </div>
        {/* <Image src="/images/kantor-depan1.jpg" width={190} height={72} alt="" /> */}
        <InformationSection />
        <PriceList />
        <SyaratSurat />
      </main>
    </div>
  );
}
