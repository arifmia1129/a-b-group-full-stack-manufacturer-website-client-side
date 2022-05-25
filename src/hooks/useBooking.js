import { useQuery } from 'react-query';
import Spinner from "../pages/Shared/Spinner";

const useBooking = id => {
    const { isLoading, data:bookingProduct, refetch } = useQuery(['bookingProduct', id], () =>
        fetch(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if(isLoading) {
        return <Spinner/>
    }
    return {bookingProduct, refetch};
}

export default useBooking;