import './ShopSidebar.scss'
import classNames from 'classnames'

const ShopSidebar = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'shop-sidebar')}
    >
      ShopSidebar
    </div>
  )
}

export default ShopSidebar