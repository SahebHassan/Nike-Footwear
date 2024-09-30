import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-palanquin ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival{" "}
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg mt-6 mb-14 text-slate-gray sm:max-w-sm leading-8 ">
          Discover stylish Nike arrivals, quality comfort ,and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.lebel}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="Shoe showcase"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className=" sm:gap-6 gap-4 absolute flex -bottom-[5%] sm:left-[10%] max-sm:p-4 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
