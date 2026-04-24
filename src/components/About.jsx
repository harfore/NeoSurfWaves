function About() {
    const paragraph_1 = "Neo Surf Waves accompagne les artistes dans leur développement, de la création à la scène. À travers une direction artistique forte, des collaborations et des projets sur mesure, le collectif fait émerger une nouvelle génération d'artistes.";
    const paragraph_2 = `Neo Surf Waves développe des artistes émergents, structure des projets et accompagne les artistes à chaque étape de leur évolution. Une approche centrée sur l’ADN, la progression et le passage du “behind the scenes” à la scène.`;

    const services_pres = "Accompagner plutôt que produire à la chaîne. Neo Surf Waves construit des trajectoires artistiques, en liant direction artistique, développement et mise en mouvement. La scène devient une extension naturelle du travail réalisé en amont."

    const collab_pres = "Des artistes émergents aux univers singuliers. Chacun est accompagné pour affirmer son identité et construire une expression cohérente, sur scène comme en dehors.";
    return (
        <div className="about-nsw generic-page">
            <div className="page-section">
                <div className="about-paragraph">
                    <p>{paragraph_1}</p>
                </div>
                <div className="about-paragraph">
                    <p>{paragraph_2}</p>
                </div>
                <div className="about-paragraph">
                    <p>Envie de savoir qui est derrière Neo Surf Waves ?</p>
                    <a href="/team"><button>En savoir plus</button></a>
                </div>
                <div className="page-section">
                    <h2 className="section-title">Services</h2>
                    <p>{services_pres}</p>
                    <a href="/services"><button>Notre offre de services</button></a>
                </div>
                <div className="page-section">
                    <h2 className="section-title">On a collaboré avec eux</h2>
                    <p>{collab_pres}</p>
                    <div className="image-visual">
                        <div className="image_placeholder"></div>
                        <div className="image_placeholder"></div>
                        <div className="image_placeholder"></div>
                    </div>
                    <a href="/collaborations"><button>Nos artistes</button></a>
                </div>
                <div className="page-section">
                    <h2 className="section-title">Agenda</h2>
                    <p>Les prochaines apparitions des artistes et projets Neo Surf Waves.</p>
                    <a href=""><button>Voir plus</button></a>
                </div>
                <div className="page-section">
                    <p className="">Tu es artiste et développes un projet ? Neo Surf Waves est ouvert aux collaborations et aux nouvelles rencontres.
                        Chaque échange commence par une idée ! Viens faire le point gratuitement.</p>
                    <a><button>Prends RDV gratuitement</button></a>
                </div>
            </div>
        </div>
    )
}

export default About;