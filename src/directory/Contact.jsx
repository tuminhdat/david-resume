function Contact() {
  function myFunction() {
    window.location.replace('https://www.linkedin.com/in/dat-tu/');
  }
  return (
    <div class="grid-container">
      <div class="left_screen">
        <h1>Contact</h1>
        <h2>LinkedIn</h2>
        <a onClick={myFunction}>David Tu</a>
        <br />
        <h2>Email</h2>
        <p id="email">davidtu1995@gmail.com</p>
      </div>
      
      <div class="right_screen">
        <img class="picture_image" src={ require("../image/contact.png") } alt="contact image" />
      </div>
    </div>
  );
}

export default Contact;
