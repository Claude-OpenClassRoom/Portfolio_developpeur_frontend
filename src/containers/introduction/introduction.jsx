import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/moi.webp'
import GitHub from '../../assets/icones/github.png'
import DarkGitHub from '../../assets/icones/darkgithub.png'
import LinkedIn from '../../assets/icones/linkedin.png'
import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
        <p>
          Je suis un développeur full-stack,  j' ai développé des sites web  
          en équipe ou individuellement  
          de zéro à la production. Mon objectif  
          s'agit de réaliser des sites web dynamiques bien intégrées. 
         
        <p> 
          <br />
          En fonctionnel, j'ai travaillé dans différents secteurs, notamment la 
          banque, l'agriculture, le transport, la logistique,e-commerce.
        </p>
          <br />
          Je voulais poursuivre ma passion pour la programmation et d'acquérir de
          nouvelles compétences qui viennent compléter celles acquises pendant
          mes années d'expériences dans différents domaines.
        </p>
        <p>
          Afin de me développer dans le domaine du développement web, j’ ai
          intégré la formation certifiante intégrateur web niveau Bac +2
          d’OpenClassrooms au cours de laquelle j’ai acquis des compétences
          solides en HTML, CSS, JavaScript et React.
        </p>

        <div className="intro__desc-liens">
          <a href="https://github.com/Claude-OpenClassRoom" target="blank">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/claude-erick-rakotoarisoa/"
            target="blank"
          >
            <img
              src={darkMode ? DarkLinkedIn : LinkedIn}
              alt="Lien vers mon profil LinkedIn"
            />
          </a>

        </div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Claude Erick Rakotoarisoa"
        />
        <h3>Claude Erick Rakotoarisoa</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction
