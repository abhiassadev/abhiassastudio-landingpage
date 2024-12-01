import { Chip } from "@nextui-org/react";

function Category() {
  return (
    <>
      <marquee>
        <div className="flex justify-center items-center gap-5 mt-5">
          <Chip color="primary" variant="bordered" className="text-xs">
            Landing Page
          </Chip>
          <Chip color="primary" variant="bordered" className="text-xs">
            E-Commerce
          </Chip>
          <Chip color="primary" variant="bordered" className="text-xs">
            Company Profile
          </Chip>
        </div>
      </marquee>
    </>
  );
}

export default Category;
