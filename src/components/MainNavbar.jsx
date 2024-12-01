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

function MainNavbar() {
  return (
    <>
      <Navbar className="bg-transparent border-b border-gray-5300 sm:px-10">
        <NavbarBrand>
          <Link
            href="#"
            className="text-xl font-semibold text-black sm:text-2xl"
          >
            Abhiassa Studio
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <div className="hidden justify-center items-center gap-5 sm:flex">
            <NavbarItem>
              <Link href="#about">Tentang Kami</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#priceList">Daftar Harga</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#contacts">Kontak</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#faq">FAQ</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="https://wa.me/6283133793060">
                <Button color="primary" as="a">
                  Order
                </Button>
              </Link>
            </NavbarItem>
          </div>
          <Dropdown className="sm:hidden">
            <DropdownTrigger className="sm:hidden">
              <Button color="primary" className="sm:hidden">
                <i className="bi bi-list text-2xl"></i>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="Home">
                <Link href="#about">Tentang Kami</Link>
              </DropdownItem>
              <DropdownItem key="Home">
                <Link href="#priceList">Daftar Harga</Link>
              </DropdownItem>
              <DropdownItem key="Home">
                <Link href="#contacts">Kontak</Link>
              </DropdownItem>
              <DropdownItem key="Home">
                <Link href="#faq">FAQ</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default MainNavbar;
