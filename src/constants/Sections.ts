import max from '../assets/images/max_morton.png';

export const sections = [
    {
        section_index: 1,
        title: "",
        paragraphs: [
            { content: "Neo Surf Waves accompagne les artistes dans leur développement, de la création à la scène. À travers une direction artistique forte, des collaborations et des projets sur mesure, le collectif fait émerger une nouvelle génération d'artistes." },
            { content: `Neo Surf Waves développe des artistes émergents, structure des projets et accompagne les artistes à chaque étape de leur évolution. Une approche centrée sur l’ADN, la progression et le passage du “behind the scenes” à la scène.` }
        ],
        buttons: [
            {
                name: "En savoir plus",
                url: "/team"
            }
        ]
    },
    {
        section_index: 2,
        title: "Services",
        paragraphs: [
            { content: "Accompagner plutôt que produire à la chaîne. Neo Surf Waves construit des trajectoires artistiques, en liant direction artistique, développement et mise en mouvement. La scène devient une extension naturelle du travail réalisé en amont." }
        ],
        buttons: [
            {
                name: "Notre offre de services",
                url: "/services"
            }
        ]
    },
    {
        section_index: 3,
        title: "On a collaboré avec eux",
        paragraphs: [
            { content: "Des artistes émergents aux univers singuliers. Chacun est accompagné pour affirmer son identité et construire une expression cohérente, sur scène comme en dehors." }
        ],
        artists: [
            {
                artist_index: 1,
                artist_name: "Max Morton",
                picture: max,
            },
            {
                artist_index: 2,
                artist_name: "Yotam",
                picture: ""
            }
        ],
        buttons: [
            {
                name: "Nos artistes",
                url: "/collaborations"
            }
        ],
    },
    {
        section_index: 4,
        title: "Agenda",
        paragraphs: [
            { content: "Les prochaines apparitions des artistes et projets Neo Surf Waves." }
        ],
        buttons: [
            {
                name: "Voir plus",
                url: "/agenda"
            }
        ]
    },
    {
        section_index: 5,
        paragraphs: [
            { content: "Tu es artiste et développes un projet ? Neo Surf Waves est ouvert aux collaborations et aux nouvelles rencontres. Chaque échange commence par une idée ! Viens faire le point gratuitement." },
        ],
        buttons: [
            {
                name: "Prends rendez-vous gratuitement",
                url: "/"
            }
        ]
    }
]