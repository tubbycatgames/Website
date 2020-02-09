import Typography from "typography"
import lawtonTheme from "typography-theme-lawton"
lawtonTheme.overrideThemeStyles = () => ({
    img: {}
});

export default new Typography(lawtonTheme)
