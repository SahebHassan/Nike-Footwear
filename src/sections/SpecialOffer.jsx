import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} width={773} height={687} className="object-contain w-full"/>
        </div>
        <div className="flex flex-1 flex-col">
            <h2 className="text-4xl font-bold capitalize lg:max-w-lg ">
                <span className="text-coral-red "> Special </span> 
                Offer
            </h2>
            <p className="mt-10 lg:max-w-lg info-text ">Embark on a shopping journey that redefines your experience with unbeatable deals. from premier selection to incredible savings, weoffer unparalleled value that sets us apart. </p>
            <p className="mt-6 lg:max-w-lg info-text">
                Navigate a realm of possiblities designed to fullfil your unique desires, surpassing the loftiest expectatio. your journey with us is  nothing short of expectational 
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
            label="Learn more"
            backgroundColor="bg-white "
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            ></Button>

            </div>
            </div>
    </section>
  )
}

export default SpecialOffer