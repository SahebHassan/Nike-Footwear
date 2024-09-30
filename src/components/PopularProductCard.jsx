import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL,name,price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} 
        className="h-[280px] w-[280px]"
        />
        <div className="mt-8 justify-start flex gap-2.5">
            <img src={star} alt="star Icons" 
            width={24}
            height={24}
            />
            <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
        </div>
        <h3 className="font-palanquin text-2xl font-semibold mt-2 leading-normal">{name}</h3>
        <p className="text-coral-red font-montserrat font-semibold leading-normal mt-2 text-2xl">{price}</p>
    </div>
  )
}

export default PopularProductCard