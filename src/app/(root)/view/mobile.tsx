import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-[920px]">
      <h4 className="text-5xl font-bold">Informasi</h4>
      <p className="text-xl">
        Informasi surat penting dalam proses pengurusan perceraian
      </p>
      <Separator className="my-4" />
      <div className="flex items-start gap-5 text-xl">
        <h5 className="text-4xl font-bold">1.</h5>
        <h5 className="text-3xl font-bold">Akte Cerai</h5>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-start gap-5 text-xl">
        <h5 className="text-4xl font-bold">2.</h5>
        <h5 className="text-3xl font-bold">Akte Cerai</h5>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-start gap-8 text-xl">
        <h5 className="text-4xl font-bold">3.</h5>
        <h5 className="text-3xl font-bold w-[900px]">Akte Cerai</h5>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </p>
      </div>
    </div>
  );
}
