import { useState, useEffect } from "react";
import "./register-page.css";
import Modal from "../../components/modal/Modal";
import Process from "../../components/processing/Process";
import purplelens2 from "../../assets/Purple-Lens-Flare2.png";
import purplelens3 from "../../assets/Purple-Lens-Flare3.png";
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import graphicDesigner from "../../assets/graphic-designer.png";
import check from "../../assets/check.svg";

const baseUrl = "https://backend.getlinked.ai";

const RegisterPage = () => {
  // values for the form parameters
  const [values, setValues] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: 0,
    group_size: 0,
    privacy_policy_accepted: false,
  });

  // control / set the values of the form parameters
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // control / set the value of privacy policy accepted
  const accepted = () => {
    setValues((prevData) => ({
      ...prevData,
      privacy_policy_accepted: !prevData.privacy_policy_accepted,
    }));
  };

  const [focusedInputs, setFocusedInputs] = useState({
    team_name: false,
    phone_number: false,
    email: false,
    project_topic: false,
    category: false,
  });

  const handleFocus = (inputName) => {
    setFocusedInputs({ ...focusedInputs, [inputName]: true });
  };

  // console.log(values);
  const [error, setError] = useState("");

  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (error === "") {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
      window.location.reload(true);
  };

  const [loader, setLoader] = useState(false);

  const handleLoader = () => {
    setLoader(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl + "/hackathon/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle success here
      console.log("Registration successful");
      setLoader(false);
      openModal();
    } catch (error) {
      alert("Oops, Project entry already exists");
      setError(error);
      setLoader(false);
      console.error("Error registering:", error);
    }
  };

  // get category list from backend API
  const [data, setData] = useState([]);
  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl + "/hackathon/categories-list");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <>
       <Process />
      {modal && <Modal closeModal={closeModal} />}
      <div className="register">
        <img src={starPink} alt="" className="star-even star39" />
        <img src={star} alt="" className="star-odd star40" />
        <img src={starPurple} alt="" className="star-even star41" />
        <img src={starWhite} alt="" className="star-odd star42" />
        <img src={purplelens3} alt="" className="contact-lens" />
        <div className="register-img">
          <img src={graphicDesigner} alt="" />
        </div>
        <div className="form-container">
          <h2 className="heading">Register</h2>
          <div className="be-part">
            <span>Be part of this movement!</span>
            <div className="walking-emoji">
              <img src={girl} alt="" className="img" />
              <img src={boy} alt="" className="img" />
            </div>
          </div>
          <h3 className="subheading">CREATE YOUR ACCOUNT</h3>
          <form action="submit" onSubmit={handleSubmit}>
            <div
              className={`input-container ${
                focusedInputs.team_name ? "focused" : ""
              }`}>
              <label htmlFor="Name">Team's Name</label>
              <input
                required
                name="team_name"
                value={values.team_name}
                onChange={onChange}
                type="text"
                id="Name"
                onBlur={() => handleFocus("team_name")}
                placeholder="Enter the name of your group"
              />
              <span className="error-message">
                Team's Name can not be empty
              </span>
            </div>
            <div
              className={`input-container ${
                focusedInputs.phone_number ? "focused" : ""
              }`}>
              <label htmlFor="Number">Phone</label>
              <input
                required
                name="phone_number"
                value={values.phone_number}
                onChange={onChange}
                type=""
                id="Number"
                onBlur={() => handleFocus("phone_number")}
                placeholder="Enter your phone number"
              />
              <span className="error-message">Phone Number is required</span>
            </div>
            <div
              className={`input-container ${
                focusedInputs.email ? "focused" : ""
              }`}>
              <label htmlFor="email">Email</label>
              <input
                required
                name="email"
                value={values.email}
                onChange={onChange}
                type="email"
                id="email"
                onBlur={() => handleFocus("email")}
                placeholder="Enter your email address"
              />
              <span className="error-message">Email is required</span>
            </div>
            <div
              className={`input-container ${
                focusedInputs.project_topic ? "focused" : ""
              }`}>
              <label htmlFor="topic">Project Topic</label>
              <input
                required
                name="project_topic"
                value={values.project_topic}
                onChange={onChange}
                type="text"
                id="topic"
                onBlur={() => handleFocus("project_topic")}
                placeholder="What is your group project topic"
              />
              <span className="error-message">
                Project Name can not be empty
              </span>
            </div>
            <div
              className={`input-container select1 ${
                focusedInputs.category ? "focused" : ""
              }`}>
              <label htmlFor="category" className="select-label">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={values.category}
                onChange={onChange}>
                <option value="">Select your category</option>
                {data.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div
              className={`input-container select2 ${
                focusedInputs.group_size ? "focused" : ""
              }`}>
              <label htmlFor="size" className="select-label">
                Group Size
              </label>
              <select
                id="size"
                required
                name="group_size"
                value={values.group_size}
                onChange={onChange}
                onBlur={() => handleFocus("group_size")}>
                <option value="">Select</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <span className="error-message">Group size is required</span>
            </div>
            <span className="reminder">
              Please review your registration details before submitting
            </span>
            <div className="agree" onClick={accepted}>
              <div className="check-box">
                {values.privacy_policy_accepted && 
                  <img
                    src={check}
                    onClick={accepted}
                    alt=""
                    className="checker"
                  />
                }
              </div>
              <span>
                I agreed with the event terms and conditions and privacy policy
              </span>
            </div>
            <div className="btn">
              <button
                type="submit"
                className="button"
                onClick={handleLoader}
                disabled={
                  values.privacy_policy_accepted === false ||
                  values.email === "" ||
                  values.team_name === "" ||
                  values.group_size === 0 ||
                  values.project_topic === "" ||
                  values.phone_number === ""
                }>
                Register Now
              </button>
            </div>
          </form>
        </div>
        <img src={purplelens2} alt="" className="register-lens2" />
      </div>
    </>
  );
};

export default RegisterPage;
