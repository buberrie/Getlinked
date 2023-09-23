import Footer from "../../components/footer/Footer";
import "./home-page.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import fireIcon from "../../assets/fireIcon.png";
import global from "../../assets/globel.png";
import chainLink from "../../assets/chainlink.png";
import curvey from "../../assets/Vector-4.svg";
import purplelens from "../../assets/Purple-Lens-Flare.png";
import purplelens2 from "../../assets/Purple-Lens-Flare2.png";
import purplelens3 from "../../assets/Purple-Lens-Flare3.png";
import creativeBulb from "../../assets/creative.png";
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";
import curley from "../../assets/arrow.png";
import bigIdea from "../../assets/the-big-idea.png";
import rules from "../../assets/rules.png";
import criteia from "../../assets/criteria.png";
import cwokCasual from "../../assets/cwok_casual.png";
import prizeCup from "../../assets/prize-cup.png";
import awards from "../../assets/Rewards.png";
import padlock from "../../assets/padlock.png";
import LibertyAssured from "../../assets/LibertyAssured.svg";
import LibertyPay from "../../assets/LibertyPay.png";
import Paybox from "../../assets/Paybox.svg";
import Vuzual from "../../assets/Vuzual.svg";
import Winwise from "../../assets/Winwise.png";
import wisper from "../../assets/wisper.png";
import checkIcon from "../../assets/check-icon.svg";
import question1 from "../../assets/question1.svg";
import question2 from "../../assets/question2.svg";

const Homepage = () => {

  // Initialize state variables
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate the time remaining
  function calculateTimeRemaining() {
    // Set the date we're counting down to
    const countDownDate = new Date("September 27, 2023 00:00:00").getTime();
   // Set the date we're counting down from
    const now = new Date().getTime();
    // remaining time
    const distance = countDownDate - now;

    if (distance < 0) {
      return { hours: '00', minutes: '00', seconds: '00' };
    }

    const hours = String(Math.floor(distance / (1000 * 60 * 60 ))).padStart(2, '0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    return { hours, minutes, seconds };
  }

  // Update the countdown every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const { sectionId } = useParams();

  useEffect(() => {
    // Scroll to the appropriate section when the component mounts
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <>
      <div className="header-wrapper" id="homepage">
        <div className="top-title">
          <span className="header-title">
            Igniting a Revolution in HR Innovation
          </span>
          <img src={curvey} alt="" className="curvey" />
        </div>
        <div className="header">
          <div className="header-text">
            <img src={starWhite} alt="" className="star-odd star1" />
            <img src={purplelens} alt="" className="purple-lens1" />
            <div className="big-text">
              <img src={creativeBulb} alt="" className="bulb" />
              <h1 className="big-text1">Getlinked Tech</h1>
              <h1 className="big-text2">
                Hackathon <span className="colored-text">1.0</span>
              </h1>
              <img src={chainLink} alt="" className="big-text2-emoji" />
              <img src={fireIcon} alt="" className="big-text2-emoji2" />
            </div>
            <p className="small-text">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="button">Register</button>
            <img src={star} alt="" className="star-even star2" />
            <div className="timer-wrapper">
              <span className="timer" >
              {timeRemaining.hours}<span className="tinny">H</span>
              </span>
              <span className="timer" >
              {timeRemaining.minutes}<span className="tinny">M</span>
              </span>
              <span className="timer" >
              {timeRemaining.seconds}<span className="tinny">S</span>
              </span>
            </div>
          </div>
          <div className="header-image">
            <img src={star} alt="" className="star-odd star3" />
            <img src={purplelens2} alt="" className="purple-lens2" />
            <img src={global} alt="" className="global" />
          </div>
        </div>
      </div>

      {/* The big Idea begins */}

      <div className="big-idea">
        <div className="big-idea-img">
          <img src={starPink} alt="" className="star-odd star4" />
          <span className="the-big-idea-text">The Big Idea!</span>
          <img src={bigIdea} alt="" className="the-big-idea" />
          <img src={curley} alt="" className="curly" />
        </div>
        <div className="big-idea-text">
          <h2 className="big-idea-title">Introduction to getlinked</h2>
          <h2 className="big-idea-title big-idea-colored">
            tech Hackathon 1.0
          </h2>
          <img src={starPurple} alt="" className="star-even star5" />
          <p className="big-idea-content">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      {/* Rules and regulations begins */}

      <div className="rules">
        <div className="rules-text">
          <img src={star} alt="" className="star-even star6" />
          <img src={purplelens3} alt="" className="rules-lens1" />
          <h2 className="big-idea-title">Rules and</h2>
          <h2 className="big-idea-title big-idea-colored">Guidelines</h2>
          <img src={starWhite} alt="" className="star-odd star7" />
          <p className="big-idea-content">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="big-idea-img">
          {/* <div className="ellipse ellipse1"></div> */}
          <img src={rules} alt="" className="rules-img" />
          <img src={purplelens2} alt="" className="rules-lens2" />
        </div>
      </div>

      {/* Judging criterias begins */}

      <div className="big-idea" id="overview">
        <div className="big-idea-img">
          <img src={starPurple} alt="" className="star-odd star8" />
          <img src={criteia} alt="" className="criteria-img" />
          <img src={star} alt="" className="star-even star9" />
          <img src={purplelens3} alt="" className="criteria-lens1" />
        </div>
        <div className="big-idea-text">
          <h2 className="big-idea-title">Judging Criteria</h2>
          <h2 className="big-idea-title big-idea-colored">
          Key attributes
          </h2>
          <p className="criteria-content">
            <span className="criteria-colored">
            Innovation and Creativity: 
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
          </p>
          <p className="criteria-content">
            <span className="criteria-colored">
            Functionality: 
            </span>
            Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
          </p>
          <p className="criteria-content">
            <span className="criteria-colored">
            Impact and Relevance: 
            </span>
            Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
          </p>
          <p className="criteria-content">
            <span className="criteria-colored">
            Technical Complexity: 
            </span>
            Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="criteria-content">
            <span className="criteria-colored">
            Adherence to Hackathon Rules: 
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
          </p>
          <button className="button read-more">Read More</button>
          <img src={purplelens2} alt="" className="criteria-lens2" />
          <img src={starWhite} alt="" className="star-odd star10" />
        </div>
      </div>

      {/* FAQs begins */}

      <div className="faqs" id="faqs">
        <img src={starPurple} alt="" className="star-even star11" />
        <div className="big-idea-text">
          <h2 className="big-idea-title">Frequently Asked</h2>
          <h2 className="big-idea-title big-idea-colored">Questions</h2>
          <p className="faqs-subtitle">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className="faqs-container">
            <p className="criteria-content">
              Can I work on a project I started before the hackathon?
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
          <div className="faqs-container">
            <p className="criteria-content">
              What happens if I need help during the hackathon?
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
          <div className="faqs-container">
            <p className="criteria-content">
              What happens if I don't have an idea for a project?
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
          <div className="faqs-container">
            <p className="criteria-content">
              Can I join a team or do I have to come with one?
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
          <div className="faqs-container">
            <p className="criteria-content">
              What happens after the hackathon ends
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
          <div className="faqs-container">
            <p className="criteria-content">
              Can I work on a project I started before the hackathon?
            </p>
            <img src={starPink} alt="" className="star-faq" />
          </div>
        </div>
        <div className="big-idea-img">
          <img src={starPink} alt="" className="star-odd star12" />
          <img src={starPink} alt="" className="star-even star13" />
          <img src={star} alt="" className="star-even star14" />
          <img src={question1} alt="" className="q-mark-big" />
          <img src={question2} alt="" className="q-mark-small" />
          <img src={question2} alt="" className="q-mark-small2" />
          <img src={cwokCasual} alt="" className="cwok-casual-img" />
          <img src={starWhite} alt="" className="star-odd star15" />
        </div>
      </div>

      {/* Timeline section begins */}

      <div id="timeline">
        <img src={starPurple} alt="" className="star-odd star16" />
        <img src={starWhite} alt="" className="star-even star17" />
        <img src={star} alt="" className="star-even star18" />
        <div className="timeline-heading">
          <h2 className="title">Timeline</h2>
          <p className="subtitle">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timelines">
          <div className="line line1"></div>
          <div className=" activity activity1">
            <div className="acti">
              <h3 className="acti-title">Hackathon Announcement</h3>
              <p className="acti-info odd">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="number">1</div>
            <div className="acti-date">November 18, 2023</div>
          </div>
          <div className="line"></div>
          <div className=" activity activity1">
            <div className="acti-date acti-date-even">November 18, 2023</div>
            <div className="number">2</div>
            <div className="acti acti-even">
              <h3 className="acti-title">Teams Registration begins</h3>
              <p className="acti-info">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className=" activity activity1">
            <div className="acti">
              <h3 className="acti-title">Teams Registration ends</h3>
              <p className="acti-info odd">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="number">3</div>
            <div className="acti-date">November 18, 2023</div>
          </div>
          <div className="line"></div>
          <div className=" activity activity1">
            <div className="acti-date acti-date-even">November 18, 2023</div>
            <div className="number">4</div>
            <div className="acti acti-even">
              <h3 className="acti-title">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="acti-info">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className=" activity activity1">
            <div className="acti">
              <h3 className="acti-title">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="acti-info odd">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="number">5</div>
            <div className="acti-date">November 18, 2023</div>
          </div>
          <div className="line"></div>
          <div className=" activity activity1">
            <div className="acti-date acti-date-even">November 18, 2023</div>
            <div className="number">6</div>
            <div className="acti acti-even">
              <h3 className="acti-title">Demo Day</h3>
              <p className="acti-info">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* prizes to be won */}

      <div className="prize-area">
        <img src={starPink} alt="" className="star-odd star19" />
        <img src={starPink} alt="" className="star-even star20" />
        <img src={starWhite} alt="" className="star-odd star21" />
        <img src={starWhite} alt="" className="star-even star22" />
        <img src={starWhite} alt="" className="star-odd star23" />
        <img src={starWhite} alt="" className="star-even star24" />
        <div className="prize">
          <div className="img1">
            <img src={prizeCup} alt="" className="prize-cup" />
          </div>
          <div className="img2">
            <div className="prize-text">
              <h2 className="big-idea-title">Prizes and</h2>
              <h2 className="big-idea-title big-idea-colored">Rewards</h2>
              <p className="big-idea-content">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <img src={awards} alt="" className="awards" />
            {/* <img src={purplelens2} alt="" /> */}
          </div>
        </div>
      </div>

      {/* partners and sponsership */}

      <div className="partner-wrapper">
        <img src={starPurple} alt="" className="star-odd star25" />
        <img src={starPurple} alt="" className="star-even star26" />
        <img src={starWhite} alt="" className="star-odd star27" />
        <img src={purplelens3} alt="" className="sponsor-lens" />
        <div className="timeline-heading">
          <h2 className="title">Partners and Sponsors</h2>
          <p className="subtitle">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="partner-logo">
          <div className="sta">
            <img src={LibertyAssured} alt="" className="sta-img" />
          </div>
          <div className="horizontal"></div>
          <div className="sta">
            <img src={LibertyPay} alt="" className="sta-img2" />
          </div>
          <div className="horizontal"></div>
          <div className="sta">
            <img src={Winwise} alt="" className="sta-img" />
          </div>
          <div className="vertical"></div>
          <div className="vertical"></div>
          <div className="vertical"></div>
          <div className="sta">
            <img src={wisper} alt="" className="sta-img" />
          </div>
          <div className="horizontal"></div>
          <div className="sta">
            <img src={Paybox} alt="" className="sta-img2" />
          </div>
          <div className="horizontal"></div>
          <div className="sta">
            <img src={Vuzual} alt="" className="sta-img2" />
          </div>
        </div>
        <img src={purplelens2} alt="" className="sponsor-lens2" />
      </div>

      {/* privacy policy */}

      <div className="policy">
        <div className="policy-text">
          <div className="policy-heading">
            <h2 className="big-idea-title">Privacy Policy and</h2>
            <h2 className="big-idea-title big-idea-colored">Terms</h2>
            <small className="small">Last updated on September 12, 2023</small>
            <p className="big-idea-content">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="privacy-policy">
            <p className="intro">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h4 className="licensing">Lisensing Policy</h4>
            <p className="subintro">Here are terms of our Standard License:</p>
            <div className="info">
              <img src={checkIcon} alt="" className="img" />
              <p className="detail">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="info">
              <img src={checkIcon} alt="" className="img" />
              <p className="detail">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="btn">
              <button className="button">Read More</button>
            </div>
          </div>
          <img src={purplelens3} alt="" className="policy-lens" />
        </div>
        <div className="policy-img">
          <img src={padlock} alt="" className="img" />
        </div>
        <img src={star} alt="" className="star-even star28" />
          <img src={starWhite} alt="" className="star-even star29" />
          <img src={starPurple} alt="" className="star-odd star30" />
          <img src={starPink} alt="" className="star-even star31" />
          <img src={starPurple} alt="" className="star-even star32" />
          <img src={starWhite} alt="" className="star-odd star33" />
          <img src={star} alt="" className="star-odd star34" />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
