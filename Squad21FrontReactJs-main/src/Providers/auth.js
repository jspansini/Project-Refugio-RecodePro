import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState({
        email: ""
    })

    useEffect(() => {
        const userStorage = localStorage.getItem("user");
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        } else {
            setUser({
                email: ""
            })
        }
    }, [])

    return(
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(Context);
    const {user, setUser} = context;
    return {user, setUser}
}