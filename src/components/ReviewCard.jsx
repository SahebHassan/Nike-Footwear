import { star } from "../assets/icons"

const ReviewCard = ({ imgURL,customerName,rating,feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer review" 
        className="object-cover rounded-full w-[120px] h-[120px]"
        />
        <p className="mt-6 text-center m-w-sm info-text">{feedback}</p>
        <div className="flex justify-center items-center gap-2.5">
            <img src={star} width={24} height={24} />
            <p className="font-montserrat text-slate-gray ">({rating})</p>
            
        </div>
        <p className="mt-1 font-palanquin text-3xl text-center font-bold" >{customerName}</p>
        </div>
  )
}

export default ReviewCard