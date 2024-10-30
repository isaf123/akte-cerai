export default function LegalisirAkta() {
  return (
    <div className="flex flex-col  gap-5  mb-10">
      <div className="flex gap-5 text-white items-start">
        <div className="bg-[#a9efc3] max-md:size-6 size-8 text-center rounded-full text-black flex items-center justify-center font-semibold">
          1
        </div>

        <p className="w-full">
          Tidak boleh diwakilkan (wajib Pihak yang bersangkutan sendiri yang
          datang)
        </p>
      </div>
      <div className="flex gap-5 text-white items-start">
        <div className="bg-[#a9efc3] max-md:size-6 size-8 text-center rounded-full text-black flex items-center justify-center ">
          <p className="font-semibold">{2}</p>
        </div>

        <p className="w-full">
          Membawa akta cerai asli dan fotocopy sesuai yang dibutuhkan (max 5
          lembar)
        </p>
      </div>
      <div className="flex gap-5 text-white items-start">
        <div className="bg-[#a9efc3] max-md:size-6 size-8 text-center rounded-full text-black flex items-center justify-center ">
          <p className="font-semibold">{3}</p>
        </div>

        <p className="w-full">Membawa KTP Asli dan fotocopy KTP</p>
      </div>
      <div className="flex gap-5 text-white items-start">
        <div className="bg-[#a9efc3] max-md:size-6 size-8 text-center rounded-full text-black flex items-center justify-center ">
          <p className="font-semibold">{4}</p>
        </div>

        <p className="w-full">
          Membawa uang tunai sebesar Rp. 10.000,- (sepuluh ribu rupiah) per
          surat berdasarkan PP Nomor 5 Tahun 2019 tentang Jenis Dan Tarif Atas
          Jenis Penerimaan Negara Bukan Pajak Yang Berlaku Pada Mahkamah Agung
          Dan Badan Peradilan Yang Berada Di Bawahnya
        </p>
      </div>
    </div>
  );
}
