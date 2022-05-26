import { useQuery } from 'react-query';
import Spinner from "../pages/Shared/Spinner";

const useProduct = id => {
    const { isLoading, data: product, refetch } = useQuery(['product', id], () =>
        fetch(`https://enigmatic-reef-93908.herokuapp.com/product/${id}`).then(res =>
            res.json()
        )
    )
    return { product, refetch, isLoading };
}

export default useProduct;