import Logo from "@/shared/ui/Logo";
import Icon from "@/shared/ui/Icon";
import {footerLinks, socialLinks} from "@/widgets/Footer/lib/footerLinks.ts";
import './Footer.scss'


const Footer = () => {
  const { title, socialLinks: socialItems } = socialLinks[0]

  return (
    <footer
      className='footer'
    >
      <div className='footer__inner container'>
        <div className='footer__copyright'>
          <Logo
            className="footer__logo"
            loading='lazy'
          />
          <p>© 2025 SGSS. All rights reserved.</p>
        </div>


      <div className="footer__links">
        {footerLinks.map(({title, links}, index) => (
          <div
            className="footer__column"
            key={index}
          >
            <h3 className="footer__column-title">
              {title}
            </h3>
            <ul className="footer__list">
              {links.map((link, linkIndex) => (
                <li
                  className="footer__item"
                  key={linkIndex}
                >
                  <span className="footer__item-text">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__social">
        <h3 className="footer__social-title">{title}</h3>
        <div className="footer__social-list">
          {socialItems.map(({ label, iconName, href }) => (
            <a
            className="footer__social-link"
            href={href}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            >
            <Icon name={iconName} />
            </a>
            ))}
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer