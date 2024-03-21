import { useState } from "react"
import toast from "react-hot-toast";

const useSignup = () => {
 const [loading, setLoading] = useState(false);

 const signup = async({fullName, username, password, confirmPassword, gender}) => {
    const success = handleInputErros({fullName, username, password, confirmPassword, gender});
    if(!success) return;

    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({fullName, username, password, confirmPassword, gender})
        })

        const data = await res.json();
        console.log(data)
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false);
    }

 };

 return {loading, signup};
}

export default useSignup

function handleInputErros({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields")
        return false
    }
    if(password !== confirmPassword)
    {
        toast.error("Passwords do nor match")
        return false
    }
    if(password.lenght < 6)
    {
        toast.error("Password must be at least 6 digits")
        return false;
    }
    return true;
}