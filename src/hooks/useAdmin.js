import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import Spinner from "../pages/Shared/Spinner";

const useAdmin = () => {
    const [admin, setAdmin] = useState(false);
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosPrivate.get(`http://localhost:5000/user/${user?.email}`);
            if (data?.role === "admin") {
                setAdmin(true);
            }
        }
        getData();
    }, [user])
    if (loading) {
        return <Spinner />
    }
    return [admin];

}

export default useAdmin;