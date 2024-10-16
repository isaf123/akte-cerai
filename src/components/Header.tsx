import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50 shadow-lg w-full relative top-0 font-[family-name:var(--font-geist-sans)] text-sm">
      <div className="container mx-auto px-20 py-3 flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo-pa-sampang-ori2.jpg"
            alt="Logo Pengadilan Agama Sampang"
            width={24}
            height={24}
          />
          <h1 className=" font-semibold text-gray-800">PA Sampang</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/informasi"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Informasi
              </Link>
            </li>
            <li>
              <Link
                href="/tarif"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Tarif
              </Link>
            </li>
            <li>
              <Link
                href="/syarat"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Syarat
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
