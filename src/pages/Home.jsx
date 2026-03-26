import Header from '../components/Header';
import Footer from '../components/Footer';
import useTypingEffect from '../hooks/useTypingEffect';
import profilePhoto from '../assets/images/FB_IMG_1756519957571.jpg';
import '../styles/global.css';

const Home = () => {
  const roles = ["UI/UX Designer", "Graphic Designer", "Web Designer", "Creative Thinker"];
  const typingText = useTypingEffect(roles, 110, 75, 1000);

  const handleLetsTalk = () => {
    window.location.href = 'mailto:gabionzalawrencejay@gmail.com?subject=Project Inquiry&body=Hi Lawrence, I\'d like to discuss...';
  };

  return (
    <>
      <Header />
      <section className="hero">
        <div className="intro-text">
          <h1>I'm <span>LJAY T GABIO</span></h1>
          <h3 className="typing-text">And I'm a <span>{typingText}</span></h3>
          <p>
            I specialize in creating visually engaging, user-friendly digital designs that bring ideas to life.
          </p>
          <br />
          <button className="btn-primary" onClick={handleLetsTalk}>
            Let's Talk
          </button>
        </div>

        <div className="profile-photo">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
      </section>
      <section className="services">
        <h3>My Services</h3>
        <h2>What I Do</h2>

        <div className="service-boxes">
          <div className="service-card">
            <div className="icon">🧩</div>
            <h4>UI/UX Designer</h4>
            <p>I design intuitive and engaging interfaces to enhance user experience and satisfaction.</p>
          </div>

          <div className="service-card">
            <div className="icon">🎨</div>
            <h4>Graphic Designer</h4>
            <p>From logos to full brand identity, I create cohesive and visually striking designs.</p>
          </div>

          <div className="service-card">
            <div className="icon">💻</div>
            <h4>Web Designer</h4>
            <p>I build modern and responsive websites that look great on every device.</p>
          </div>
        </div>
        <br />
      </section>

      <Footer />
    </>
  );
};

export default Home;
