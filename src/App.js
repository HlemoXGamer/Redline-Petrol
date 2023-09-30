import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Components
import TheHeader from "./components/UI/TheHeader/TheHeader";
import HomePage from "./pages/HomePage/HomePage";
import TheFooter from "./components/UI/TheFooter/TheFooter";
import { RingLoader } from "react-spinners";

// Assets
import "./App.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    return (
        <ThemeProvider theme={darkTheme}>
            {loading ? (
                <div className="Loader">
                    <RingLoader color="#ff6b00" size={100} />
                </div>
            ) : (
                <>
                    <TheHeader />
                    <HomePage />
                    <TheFooter />
                </>
            )}
        </ThemeProvider>
    );
}

export default App;
