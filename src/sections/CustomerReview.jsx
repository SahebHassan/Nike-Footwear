import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
  return (
    <section className="max-container">
            <h3 className="text-4xl font-bold font-palanquin text-center">
                What Our 
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="text-center mt-4 m-auto max-w-lg info-text"> Hear genuine storiesfrom our satisfied customers about their exceptional with us</p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
            {reviews.map((review)=>(
                <ReviewCard 
                key={review.customerName}
                customerName={review.customerName}
                imgURL={review.imgURL} 
                rating={review.rating}
                feedback={review.feedback}
                />
            ))}
        </div>
    </section>
  )
}

export default CustomerReview