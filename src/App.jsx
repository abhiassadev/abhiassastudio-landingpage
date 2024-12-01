import { useEffect, useState } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip, Button, Link } from "@nextui-org/react";

import MainNavbar from "./components/MainNavbar";
import Category from "./components/Category";

import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/packages.json")
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <MainNavbar />
      <Category />
      <main className="px-5 sm:px-16">
        <section className="flex flex-col gap-10 mt-32 mb-[50vh] sm:mt-44">
          <div className="flex flex-col justify-center items-center text-wrap text-center">
            <h1 className="text-3xl font-bold text-black tracking-wide sm:text-6xl">
              Mudahkan Pelanggan Dengan Website
            </h1>
            <p className="text-base font-normal text-black opacity-80 mt-2 sm:text-2xl">
              Mudahkan pelanggan mengetahui Informasi tentang Produk, Layanan,
              dan Jasa yang anda miliki dengan Website.
            </p>
            <Link href="https://wa.me/6283133793060">
              <Button
                color="primary"
                className="text-base font-medium mt-10 sm:h-12"
              >
                Buat Sekarang
              </Button>
            </Link>
          </div>
        </section>
        <section id="priceList">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-black sm:text-3xl">
              Daftar Harga
            </h1>
            <div className="flex flex-col gap-10 mt-10 sm:grid sm:grid-cols-2">
              {data?.map((data) => {
                return (
                  <Card key={data.id} className="p-3 sm:w-80">
                    <CardHeader className="flex-col items-start">
                      <h1 className="text-md font-bold text-black opacity-80">
                        {data.name}
                      </h1>
                      <h1 className="text-2xl font-bold text-black">
                        IDR {data.price}/Tahun
                      </h1>
                    </CardHeader>
                    <CardBody className="gap-3">
                      {data.banefits.map((banefit, index) => {
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                              <i className="bi bi-check text-white"></i>
                            </div>
                            <p className="text-sm font-normal text-black opacity-80">
                              {banefit}
                            </p>
                          </div>
                        );
                      })}
                    </CardBody>
                    <CardFooter className="gap-3">
                      <Link href={data.redirect_link}>
                        <Button
                          color="primary"
                          className="text-base font-medium"
                        >
                          Order
                        </Button>
                      </Link>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button className="" variant="bordered">
                            Fitur
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                          {data.features?.map((feature, index) => {
                            return (
                              <DropdownItem key={index}>
                                <div className="flex items-center gap-2">
                                  <div className="bg-blue-500 w-5 h-5 flex justify-center items-center rounded-full">
                                    <i className="bi bi-check text-white"></i>
                                  </div>
                                  <p className="text-sm font-normal text-black opacity-80">
                                    {feature}
                                  </p>
                                </div>
                              </DropdownItem>
                            );
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section id="about">
          <div className="mt-20 sm:text-center sm:mt-44">
            <h1 className="text-base font-medium text-black opacity-80 sm:text-lg">
              Kenapa Harus Pilih?
            </h1>
            <h1 className="text-2xl font-bold text-black sm:text-3xl">
              ABHIASSA STUDIO
            </h1>
            <div className="flex flex-col mt-10 gap-10 sm:flex-row">
              <Card className="p-3 sm:w-52">
                <CardHeader>
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center">
                    <i className="bi bi-currency-dollar text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-md font-semibold text-black">
                    Harga Terjangkau
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Mulai dari Rp.269.900 anda sudah bisa memiliki Landing Page.
                  </p>
                </CardBody>
              </Card>
              <Card className="p-3 sm:w-52">
                <CardHeader>
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center">
                    <i className="bi bi-clock text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-md font-semibold text-black">
                    Pengerjaan Cepat
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Waktu pengerjaan minimal 4 hari, maksimal 7 hari.
                  </p>
                </CardBody>
              </Card>
              <Card className="p-3 sm:w-52">
                <CardHeader>
                  <div className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center">
                    <i className="bi bi-tools text-xl text-white"></i>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h1 className="text-md font-semibold text-black">
                    Pemeliharaan
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Kami siap membantu jika terjadi masalah pada website.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-20 sm:text-center sm:mt-44">
            <p className="text-base font-medium text-black opacity-80 sm:text-lg">
              Website Karya
            </p>
            <h1 className="text-2xl font-bold text-black sm:text-3xl">
              ABHIASSA STUDIO
            </h1>
            <div className="flex flex-col gap-5 mt-10 sm:grid sm:grid-cols-2">
              <Link href="" className="w-full">
                <Card className="bg-gradient-to-tr from-blue-500 to-white h-32 w-full shadow-sm sm:w-64">
                  <CardBody className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold text-white">
                      Toko Online
                    </h1>
                  </CardBody>
                </Card>
              </Link>
              <Link href="" className="w-full">
                <Card className="bg-gradient-to-tr from-blue-500 to-white h-32 w-full shadow-sm sm:w-64">
                  <CardBody className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold text-white">
                      Restaurant Menu
                    </h1>
                  </CardBody>
                </Card>
              </Link>
              <Link href="" className="w-full">
                <Card className="bg-gradient-to-tr from-blue-500 to-white h-32 w-full shadow-sm sm:w-64">
                  <CardBody className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold text-white">
                      Community Profile
                    </h1>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="mt-20 sm:mt-44">
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
                  title="Kapan melakukan pembayaran?"
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
      <footer
        id="contacts"
        className="bg-gray-50 flex flex-col px-5 py-12 gap-5 mt-20 sm:px-16 sm:gap-16"
      >
        <div>
          <h1 className="text-xl font-bold text-black">ABHIASSA STUDIO</h1>
        </div>
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-lg font-medium text-black">Kontak</h1>
            <Link href="" className="text-black opacity-80">
              +62 831 3379 3060
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
