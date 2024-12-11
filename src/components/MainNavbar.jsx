import { Chip, Link } from "@nextui-org/react";

function MainNavbar() {
  return (
    <>
      <header className="bg-white flex flex-col justify-center gap-3 px-5 py-3">
        <div>
          <Link href="" className="text-lg font-semibold text-black">
            Abhiassa Studio
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="#">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg">
                  Home
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg">
                  Pricing
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#portofolio">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg">
                  Portofolio
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#faq">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg">
                  Faq
                </Chip>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavbar;
