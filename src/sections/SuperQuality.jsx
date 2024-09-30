import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
            <h2 className="text-4xl font-bold capitalize lg:max-w-lg ">
                We Provide You
                <span className="text-coral-red "> Super </span> 
                <span className="text-coral-red "> Quality </span>
                Shoes
            </h2>
            <p className="mt-10 lg:max-w-lg info-text ">Ensuring premium comfort and style,our meticulously crafted footwear is designed to be elevated your experience providing you with unmatched quality,innovation and a touch of elegance </p>
            <p className="mt-6 lg:max-w-lg info-text">
                Our dedication to detail and excellence ensure your satisfaction
            </p>
            <div className="mt-11">
            <Button label="View details" />
            </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoe8"
                height={570}
                width={522}
                className="object-contain"
                />
            </div>
   </section>
  )
}

export default SuperQuality