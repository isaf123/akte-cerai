import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

export default function TableCek() {
  return (
    <div className="text-md">
      <p className="text-lg mb-10">Halo nama</p>
      <p>
        {" "}
        Terimakasih telah melakukan pendaftaran Online, Data yang anda kirim kan
        telah
        <span className="font-semibold text-green-400"> valid</span>,
      </p>
      <p className="mb-5">
        anda bisa datang pada tanggal booking anda:{" "}
        <span className="font-bold">20/12/2024</span>{" "}
      </p>
      <Card className="w-[440px] mb-16">
        <CardHeader>
          <CardTitle>Data Diri Pendaftar</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell>Agus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tanggal lahir</TableCell>
                <TableCell>12/10/1997</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nomer Akta</TableCell>
                <TableCell>6098890</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NIK</TableCell>
                <TableCell>3576098890</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nomer Akta</TableCell>
                <TableCell>8921321</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex gap-6 text-xs w-[520px]">
        <img src="/images/logo-pa-sampang-ori2.jpg" className="w-14 h-14" />
        <div>
          <p className="font-semibold text-sm">Pengadilan Agama Sampang</p>
          <p className="mb-2">
            Jl. Jaksa Agung Suprapto No.86, Rw. I, Gn. Sekar, Kec. Sampang,
            Kabupaten Sampang, Jawa Timur 69216
          </p>
          <p>(0323) 321025</p>
        </div>
      </div>
    </div>
  );
}
