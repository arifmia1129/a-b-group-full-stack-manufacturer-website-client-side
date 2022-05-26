import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import DeleteModal from './DeleteModal';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);
    const { isLoading, data: products, refetch } = useQuery('products', () =>
        fetch(`http://localhost:5000/product`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <h3 className="text-2xl text-primary font-bold mb-2">Manage Products</h3>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => <ManageProduct
                            key={product._id}
                            product={product}
                            index={index}
                            setDeleteProduct={setDeleteProduct}
                        />)
                    }
                </tbody>
            </table>
            {deleteProduct && <DeleteModal
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
                deleteProduct={deleteProduct}
            />}
        </div>
    );
};

export default ManageProducts;