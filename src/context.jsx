import React from "react"

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value="Martin">
        {children}
    </AppContext.Provider>
}

export{AppContext, AppProvider}