import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                desc="Alexa was made by amazon."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="Cortana32"
                image={CortanaImage}
                desc="Cortana was made by Microsoft."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                desc="Siri was made by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
