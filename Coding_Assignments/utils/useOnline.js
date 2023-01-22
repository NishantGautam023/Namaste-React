import {useEffect, useState} from "react";


const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
            const handleOnlineNetwork = () => {
                setIsOnline(true)
            };

            const handleOfflineNetwork = () => {
                setIsOnline(false)
            }

            window.addEventListener("online",handleOnlineNetwork);
            window.addEventListener("offline", handleOfflineNetwork);

            // clear the eventListener
            return () => {
                window.removeEventListener("online", handleOnlineNetwork);
                window.removeEventListener("offline", handleOfflineNetwork);

            }

    },[])

    return isOnline;  // returns true or false
}


export default  useOnline;