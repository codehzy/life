import { FiSunrise, FiSunset } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={changeTheme}>
            {theme === 'light' ? <FiSunrise /> : <FiSunset />}
        </button>
    )
}

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton