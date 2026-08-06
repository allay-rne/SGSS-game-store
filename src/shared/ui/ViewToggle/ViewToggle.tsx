import './ViewToggle.scss'
import classNames from 'classnames'
import Button from "@/shared/ui/Button";

interface ViewToggleProps {
  className?: string,
}

const ViewToggle = (props: ViewToggleProps) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'view-toggle')}
    >
      <Button
        className="view-toggle__btn view-toggle__btn--active"
        mode="transparent"
        label="Grid View"
        isLabelHidden
        iconName="grid"
        iconPosition="before"
        />
      <Button
        className="view-toggle__btn"
        mode="transparent"
        label="List View"
        isLabelHidden
        iconName="list"
        iconPosition="before"
      />
    </div>
  )
}

export default ViewToggle