import Button from "@/shared/ui/Button";
import useCountdown from "@/widgets/PromoSale/model/useCountdown.ts";
import './PromoSale.scss'

const PromoSale = () => {

  const targetDate = new Date('2026-10-05T00:00:00');
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdown(targetDate);

  return (
    <section
      className='promo-sale'
    >
      <div className="promo-sale__inner">
        <div className="promo-sale__info">
          <p className="promo-sale__title">LIMITED OFFER</p>
          <h2 className="promo-sale__sale">Up to 80% off selected games</h2>
          <p className="promo-sale__description">Limited time offer</p>
          <Button
            className="promo-sale__btn"
            label="View Sale"
          />
        </div>
        <div className="promo-sale__counter">
          <p className="promo-sale__counter-title">OFFER ENDS IN</p>
          <div className="promo-sale__counter-items">
            <div className="promo-sale__counter-item">
              {days.toString().padStart(2, '0')}
              <p>DAYS</p>
            </div>
            <div className="promo-sale__counter-item">
              {hours.toString().padStart(2, '0')}
              <p>HOURS</p>
            </div>
            <div className="promo-sale__counter-item">
              {minutes.toString().padStart(2, '0')}
              <p>MINUTES</p>
            </div>
            <div className="promo-sale__counter-item">
              {seconds.toString().padStart(2, '0')}
              <p>SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSale