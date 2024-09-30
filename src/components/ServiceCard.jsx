const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className=" flex-1 shadow-3xl sm:w-[380px] sm:min-w-[380px] w-full rounded-[20px] px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-bold font-palanquin  text-3xl leading-normal">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-slate-gray leading-normal text-lg ">{subtext}</p>
    </div>
  )
}

export default ServiceCard