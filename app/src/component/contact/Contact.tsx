import { Select } from "antd";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="bg-primary text-black sm:min-h-[600px] sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0 sm:grid">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* left content */}
          <div className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl">
              Best in city
            </h1>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              TRUSTED DELIVERY SERVICES IN UYO
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quibusdam veniam minima culpa similique? Dolorem minus quidem
              aliquam, quia adipisci, eius nihil, incidunt hic veniam eos a
              commodi itaque officia?
            </p>
            <button
              data-aos="fade-up"
              data-aos-offset="0"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300"
            >
              <Link href="/contact">Book Now</Link>
            </button>
          </div>
          {/* right form content */}
          <div data-aos="fade-up">
            <div className="md:max-w-[350px] mx-auto">
              <h1 className="uppercase text-2xl text-white bg-black px-5 py-3 ">
                Book Now
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5">
                <input
                  type="text"
                  id=""
                  name="name"
                  placeholder="FullName"
                  className=" col-span-2 inputFiled"
                />
                {/* <input
                  type="text"
                  id=""
                  name="name"
                  placeholder="LastName"
                  className="inputFiled"
                /> */}
                <input
                  type="text"
                  id=""
                  name="number"
                  placeholder="Phone Number"
                  className="col-span-2 inputFiled"
                />
                <input
                  type="date"
                  id=""
                  name="date"
                  placeholder="pick date"
                  className="col-span-2 inputFiled"
                />
                <input
                  type="text"
                  id=""
                  name="start"
                  placeholder="Start"
                  className="inputFiled"
                />
                <input
                  type="text"
                  id=""
                  name="end"
                  placeholder="End"
                  className="inputFiled"
                />

                <input
                  type="text"
                  id=""
                  name="vehcle"
                  placeholder="Choose vehicle"
                  className="col-span-2 inputFiled"
                />

                <button className="col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg hover:bg-primary transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
