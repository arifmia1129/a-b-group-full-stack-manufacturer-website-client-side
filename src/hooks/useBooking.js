import { useQuery } from 'react-query';
import Spinner from "../pages/Shared/Spinner";

const useBooking = id => {
    const { isLoading, data: bookingProduct, refetch } = useQuery(['bookingProduct', id], () =>
        fetch(`https://enigmatic-reef-93908.herokuapp.com/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>
            res.json()
        )
    )

    return { bookingProduct, refetch, isLoading };
}

export default useBooking;