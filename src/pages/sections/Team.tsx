// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import member1 from "../../assets/images/team/Sandro_Cabral.webp";
import member2 from "../../assets/images/team/Yeda_Se.webp";
import member3 from "../../assets/images/team/Weber_Jatahy.webp";
import member4 from "../../assets/images/team/Eric_Falcao.webp";
import dots from "../../assets/images/dots.png";

// Icons
import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Data
import teamData from "../../data/team.json";

// ------------------

function Team() {
  const images: string[] = [member1, member2, member3, member4];

  return (
    <section
      id="team"
      className="section"
      style={{ backgroundImage: `url(${dots})` }}
    >
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <p className="up-title-text">{teamData.id}</p>
          <h2 className="entry-title">{teamData.title}</h2>
          <p className="page-description">{teamData.description}</p>
        </div>

        <div className="content-wrapper">
          {teamData.members.map((member, i) => (
            <div
              key={"team-member-" + i}
              className={"member " + member.className}
            >
              <div className="member-wrapper">
                <div className="member-image-holder">
                  <img src={images[i]} alt="" />
                </div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <p className="member-postition">{member.position}</p>
                  <div className="member-content">
                    <p>{member.desc}</p>
                    <div className="member-social-holder">
                      <div className="social">
                        <a href={member.Linkedin} target='_blank'>
                          <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                      </div>
                      <div className="social">
                      <a href={member.Instagram} target='_blank'>                        
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Team;


