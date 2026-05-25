import { sections } from "../constants/Sections.ts";
import '../styles/Home.css';

export const Home = () => {
    return (
        <div className="about_nsw generic_page">
            <div className="projects_grid">
                {sections?.map((section, section_index) => (
                    <div
                        key={section_index}
                        className="page_section"
                    >
                        <h2>{section?.title}</h2>

                        {section.paragraphs?.map((paragraph) => (
                            <p className="about_paragraph">{paragraph.content}</p>
                        ))}

                        {section.artists && (
                            <div className='image_visual'>
                                {section.artists.map((artist, artist_index) => (
                                    <div className="artist_home" key={artist_index}>
                                        <h4>{artist.artist_name}</h4>
                                        <div className="image_placeholder"></div>
                                    </div>
                                ))}
                            </div>
                        )
                        }

                        {section.buttons?.map((button, button_index) => (
                            <div className="home_button">
                                <a href={button?.url} key={button_index}><button>{button.name}</button></a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}