import classNames from 'classnames'
import Button from "@/shared/ui/Button";
import './ViewToggle.scss'

interface ViewToggleProps {
  className?: string,
  activeView: 'grid' | 'list',
  onChange: (view: 'grid' | 'list') => void,
}

const ViewToggle = (props: ViewToggleProps) => {
  const {
    className,
    activeView,
    onChange,
  } = props

  return (
    <div
      className={classNames(className, 'view-toggle')}
    >
      <Button
        className={classNames('view-toggle__btn', {
          'view-toggle__btn--active': activeView === 'grid'
        })}
        mode="transparent"
        label="Grid View"
        isLabelHidden
        iconName="grid"
        iconPosition="before"
        onClick={() => onChange('grid')}
      />
      <Button
        className={classNames('view-toggle__btn', {
          'view-toggle__btn--active': activeView === 'list'
        })}
        mode="transparent"
        label="List View"
        isLabelHidden
        iconName="list"
        iconPosition="before"
        onClick={() => onChange('list')}
      />
    </div>
  )
}

export default ViewToggle