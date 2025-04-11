import "./contact.css";

const Contact = () => {
  // const redirectToLink = "https://bit.ly/3vNNbkZ";

  return (
    <div className="contact" id="contact">
      <img
        className="contact-img"
        src="./assets/avinyalogo2.png"
        alt="contact"
      />
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <div className="cont">
          <h2 className="cnthead">Faculty Coordinators</h2>
          <h4 className="name">Prof. Chitralekha Dwivedi</h4>
          <h4 className="name">9039527283</h4>
          <h4 className="name">Prof. Pooja Sakunde</h4>
          <h4 className="name">8380853950</h4>
          <h4 className="name">Prof. Pradnya Randive</h4>
          <h4 className="name">9158878178</h4>
          <h2 className="cnthead">Student Coordinators</h2>
          <h4 className="name">Riya Gadekar</h4>
          <h4 className="name">9561703764</h4>
          <h4 className="name">Bhavesh Rathod</h4>
          <h4 className="name">7666838821</h4>
          <h4 className="name">Satej Patil</h4>
          <h4 className="name">9518511218</h4>
          <h4 className="name">Kartik Gaikwad</h4>
          <h4 className="name">7028938880</h4>
        </div>
        <h3 className="copyright">Design and Developed by Team Avinya &copy; 2025</h3>
    </div>
    </div>
  );
};

export default Contact;
