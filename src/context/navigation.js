import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect( () => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);// handler whenever path changed this "handler" is called

        return () => {
            window.removeEventListener("popstate", handler);
        };

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "" , to);
        setCurrentPath(to);
    }

    return(
        <NavigationContext.Provider value={{currentPath, navigate}} >
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;
