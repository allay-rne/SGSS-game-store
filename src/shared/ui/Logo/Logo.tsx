import {Link} from "react-router-dom";
import classNames from 'classnames'
import './Logo.scss'

interface LogoProps {
  className?: string;
  loading?: 'lazy' | 'eager';
}

const Logo = (props: LogoProps) => {
  const {
    className,
    loading = 'lazy',
  } = props

  const title = "Home"

  return (
 <Link
   className={classNames(className, 'logo')}
  to="/"
  title={title}
  aria-label={title}
 >
   <img
    className='logo__img'
    src="/SGSSLogo.svg"
    alt=""
    width={80}
    height={50}
    loading={loading}
   />
 </Link>
  )
}

export default Logo