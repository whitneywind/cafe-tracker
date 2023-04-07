import { useContext, useReducer, createContext } from "react";
import { DISPLAY_ALERT } from "./actions";
import reducer from "./reducers";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: ''
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleShowAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
    }

    return (
        <AppContext.Provider
            value={{ 
                ...state, 
                handleShowAlert 
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext };
