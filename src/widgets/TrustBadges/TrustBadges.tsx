import {trustItems} from "@/widgets/TrustBadges/model/trustItems.ts";
import './TrustBadges.scss'
import Icon from "@/shared/ui/Icon";

const TrustBadges = () => {

  return (
    <section
      className='trust-badges'
    >
      <div className="trust-badges__inner">
        {trustItems.map((trust) => (
          <div
            className="trust-badges__item"
            key={trust.title}
          >
            <Icon name={trust.iconName} />
            <div className="trust-badges__wrapper">
              <h2 className="trust-badges__title">{trust.title}</h2>
              <p className="trust-badges__subtitle">{trust.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges