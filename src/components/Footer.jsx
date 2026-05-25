import { external_links } from '../constants/External.ts';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            {external_links && (
                <div className='external_links'>
                    {external_links?.map((link, link_index) => {
                        return (
                            <div className='link' key={link_index}>
                                <a href={link.url}>
                                    <img src={link.icon} alt={link.link_name} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}