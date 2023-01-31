const DarkMode = (props) => {

    return (
        <div>
            <h3>Dark Mode</h3>
            <input
                type='checkbox'
                className="darkMode-selector"
                checked={props.isDarkMode}
                onChange={() => props.toggleDarkMode()} />
        </div>
    );
}

export default DarkMode;
