function Team() {
    const about_us = "Un collectif animé par la volonté de créer, structurer et faire émerger. Une vision commune : offrir un cadre libre et exigeant pour permettre aux artistes de se développer et de connecter avec leur public.";
    return (
        <div className="generic-page">
            <h1 className="page-title">Qui est derrière Neo Surf Waves ?</h1>
            <p className="about_paragraph">{about_us}</p>
        </div>
    )
}

export default Team;