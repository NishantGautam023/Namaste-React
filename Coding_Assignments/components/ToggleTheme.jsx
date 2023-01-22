
import {react, useState} from "react";

const ToggleTheme = () => {
    const [settings, setSettings] = useState({
        dark_theme: true
    })

    function handleToggleClick() {
        setSettings({
            ...settings,
            dark_theme: !settings.dark_theme
        })
    }

    const className = settings.dark_theme ? "dark" : "light"


    return (
        <>
                <button onClick={handleToggleClick} className={className}>Login</button>

        </>
    )
}

export default ToggleTheme;