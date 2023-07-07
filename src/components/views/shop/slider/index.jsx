import { FaChevronCircleDown } from "react-icons/fa";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Slider() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className="text-start">
        <h1 className="pb-5 text-[30px] font-bold robotoFont">Categories</h1>
        <Fragment>
          <Accordion className="" open={open === 1}>
            <AccordionHeader
              className="border-none font-light"
              onClick={() => handleOpen(1)}
            >
              <div className="flex justify-between w-full">
                Gender
                <FaChevronCircleDown />
              </div>
            </AccordionHeader>
            <AccordionBody className="text-lg">
              Men <br /> Women
            </AccordionBody>
          </Accordion>
          <Accordion className="" open={open === 2}>
            <AccordionHeader
              className="border-none font-light"
              onClick={() => handleOpen(2)}
            >
              <div className="flex justify-between w-full">
                Sale
                <FaChevronCircleDown />
              </div>
            </AccordionHeader>
            <AccordionBody className="text-lg">
              Sport <br /> Luxury
            </AccordionBody>
          </Accordion>
          <Accordion className="" open={open === 3}>
            <AccordionHeader
              className="border-none font-light"
              onClick={() => handleOpen(3)}
            >
              <div className="flex justify-between w-full">
                Product
                <FaChevronCircleDown />
              </div>
            </AccordionHeader>
            <AccordionBody className="text-lg">
              Bag <br /> Sweather <br /> Sunglass
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
}

export default Slider;
