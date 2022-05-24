import { useState } from 'react';
const useToken = (user) => {
    const [token, setToken] = useState("");
    const email = user?.user?.email;
    if (email) {
        fetch(`http://localhost:5000/user`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
            })
    }

    return [token];
}

export default useToken;