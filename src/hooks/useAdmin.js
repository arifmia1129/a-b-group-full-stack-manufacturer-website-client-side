import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import Spinner from "../pages/Shared/Spinner";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [aLoading, setALoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosPrivate.get(`http://localhost:5000/admin/${user?.email}`);
            setAdmin(data?.isAdmin);
            setALoading(false);
        }
        getData();
    }, [user])
    return [admin, aLoading];

}

export default useAdmin;