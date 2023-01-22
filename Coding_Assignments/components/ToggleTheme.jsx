
import {react, useState} from "react";

const ToggleTheme = () => {
    const [settings, setSettings] = useState({
        dark_theme: true
    })
    const [isLogged, setIsLogged] = useState(false
    )

    function handleToggleClick() {
        setSettings({
            ...settings,
            dark_theme: !settings.dark_theme
        })
    }

    function handleLoginClick() {
        setIsLogged(!isLogged)


    }


    const className = settings.dark_theme ? "dark" : "light"


    return (
        <>
                <button onClick={() => {
                    handleLoginClick();
                    handleToggleClick();
                }
                } className={className}>{isLogged ? "Login" : "Logout"}</button>

        </>
    )
}

export default ToggleTheme;