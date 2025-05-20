import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks/index'
import LogoMb from '../../assets/logo/logo.webp'
import DarkLogoMb from '../../assets/logo/darklogo.webp'
import '../../sass/components/_logo.scss'

const Logo = () => {
  const { darkMode } = useTheme()
  return (
    <div className="header__logo">
      <Link to="/">
        <img width="119" height="118"   src={darkMode ? DarkLogoMb : LogoMb} alt="Mon logo personnel" />
      </Link>
    </div>
  )
}

export default Logo
