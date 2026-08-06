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
        label="Grid View"
        isLabelHidden
        iconName="grid"
        iconPosition="before"
        />
      <Button
        label="List View"
        isLabelHidden
        iconName="list"
        iconPosition="before"
      />
    </div>
  )
}

export default ViewToggle