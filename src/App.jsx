import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar className="bg-transparent border-b border-black border-opacity-80 justify-between">
        <NavbarBrand>
          <Link href="" className="text-xl font-semibold text-black">
            Abhiassa Studio
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="hidden">
          <NavbarItem>
            <Link href="">Home</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button color="primary" className="hidden">
            Order
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button color="primary">
                <i className="bi bi-list text-2xl"></i>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="Home">
                <Link href="">Daftar Harga</Link>
              </DropdownItem>
              <DropdownItem key="Home">
                <Link href="">Kontak</Link>
              </DropdownItem>
              <DropdownItem key="Home">
                <Link href="">FAQ</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <main className="px-5">
        <section className="h-screen flex flex-col justify-center items-center gap-10">
          <div>
            <Chip color="primary" variant="bordered">
              Dapatkan potongan harga di awal pemesanan
            </Chip>
          </div>
          <div className="flex flex-col justify-center items-center text-wrap text-center">
            <h1 className="text-3xl font-semibold text-black">
              Perbanyak Pelanggan Dengan Website
            </h1>
            <p className="text-base font-normal text-black opacity-80 mt-2">
              Mudahkan pelanggan mengetahui Informasi tentang Produk, Layanan,
              dan Jasa yang anda miliki dengan Website.
            </p>
            <Button color="primary" className="text-base font-medium mt-5">
              Buat Sekarang
            </Button>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold text-black">Daftar Harga</h1>
            <div className="flex flex-col gap-10 mt-10">
              <Card className="p-3 hover:scale-105 hover:duration-500">
                <CardHeader className="flex-col items-start">
                  <h1 className="text-md font-bold text-black opacity-80">
                    LANDING PAGE
                  </h1>
                  <h1 className="text-2xl font-bold text-black">
                    IDR 100.000/Tahun
                  </h1>
                  <p className="text-xs font-normal text-black opacity-80">
                    Di tahun pertama. 50.000/Tahun di tahun selanjutnya.
                  </p>
                </CardHeader>
                <CardBody className="gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      OTOMATIS ONLINE
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      1 HALAMAN
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      TAMPILAN MODERN
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      DESAIN RESPONSIF 3 PERANGKAT
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      1 DOMAIN (.cloud, .online, .shop, .site)
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="text-base font-medium">
                    Order
                  </Button>
                </CardFooter>
              </Card>
              <Card className="p-3 hover:scale-105 hover:duration-500">
                <CardHeader className="flex-col items-start">
                  <h1 className="text-md font-bold text-black opacity-80">
                    E-COMMERCE
                  </h1>
                  <h1 className="text-2xl font-bold text-black">
                    IDR 200.000/Tahun
                  </h1>
                  <p className="text-xs font-normal text-black opacity-80">
                    Di tahun pertama. 100.000/Tahun di tahun selanjutnya.
                  </p>
                </CardHeader>
                <CardBody className="gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      OTOMATIS ONLINE
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      3 HALAMAN
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      TAMPILAN MODERN
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      DESAIN RESPONSIF 3 PERANGKAT
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                      <i className="bi bi-check text-white"></i>
                    </div>
                    <p className="text-base font-normal text-black opacity-80">
                      1 DOMAIN (.cloud, .online, .shop, .site)
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="text-base font-medium">
                    Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20">
            <h1 className="text-base font-medium text-black opacity-80">
              Kenapa Harus Pilih?
            </h1>
            <h1 className="text-2xl font-bold text-black">ABHIASSA STUDIO</h1>
            <div className="flex flex-col mt-10 gap-10">
              <Card className="p-3">
                <CardHeader>
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex justify-center items-center">
                    <i className="bi bi-currency-dollar text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-lg font-semibold text-black">
                    Harga Terjangkau
                  </h1>
                  <p>
                    Mulai dari Rp.100.000 anda sudah bisa memiliki Landing Page.
                  </p>
                </CardBody>
              </Card>
              <Card className="p-3">
                <CardHeader>
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex justify-center items-center">
                    <i className="bi bi-clock text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-lg font-semibold text-black">
                    Pengerjaan Cepat
                  </h1>
                  <p>Waktu pengerjaan minimal 4 hari, maksimal 7 hari.</p>
                </CardBody>
              </Card>
              <Card className="p-3">
                <CardHeader>
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex justify-center items-center">
                    <i className="bi bi-tools text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-lg font-semibold text-black">
                    Pemeliharaan
                  </h1>
                  <p>Kami siap membantu jika terjadi masalah pada website.</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20">
            <p className="text-base font-medium text-black opacity-80">
              Website Karya
            </p>
            <h1 className="text-2xl font-bold text-black">ABHIASSA STUDIO</h1>
            <div className="mt-10">
              <Card className="h-44">
                <CardBody className="flex justify-center items-center">
                  <h1 className="text-2xl font-semibold text-blue-600">
                    Toko Skincare
                  </h1>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20">
            <h1 className="text-xl font-bold text-black">FAQ</h1>
            <div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Berapa biaya kustom domain?"
                >
                  <p className="text-base font-normal text-black opacity-80">
                    Harga kustom domain berbeda-beda tergantung kebutuhan dan
                    harga ekstensi domain.
                  </p>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Kapan melakukan pemmbayaran?"
                >
                  <p className="text-base font-normal text-black opacity-80">
                    Pembayaran dilakukan di awal order.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 flex flex-col p-5 gap-5 mt-20">
        <div>
          <h1 className="text-xl font-bold text-black">ABHIASSA STUDIO</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-lg font-medium text-black">Kontak</h1>
            <Link href="" className="text-black opacity-80">
              +62 888 0189 0805
            </Link>
            <Link href="" className="text-black opacity-80">
              abhiassastudio@gmail.com
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-medium text-black">Media Sosial</h1>
            <Link href="" className="text-black opacity-80">
              Facebook
            </Link>
            <Link href="" className="text-black opacity-80">
              Instagram
            </Link>
            <Link href="" className="text-black opacity-80">
              TikTok
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-medium text-black">Pembayaran</h1>
            <Link href="" className="text-black opacity-80">
              Gopay
            </Link>
            <Link href="" className="text-black opacity-80">
              M-Banking
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="text-sm font-normal text-black opacity-80">
            &copy; 2024 ABHIASSA STUDIO
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
