import { useQuery } from 'react-query';
import Spinner from "../pages/Shared/Spinner";

const useProduct = id => {
    const { isLoading, data:product, refetch } = useQuery(['product', id], () =>
        fetch(`http://localhost:5000/product/${id}`).then(res =>
            res.json()
        )
    )
    return {product, refetch, isLoading};
}

export default useProduct;