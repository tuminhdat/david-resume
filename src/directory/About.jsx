function About() {
  return (
    <div class="grid-container">
      <div class="left_screen_about">
        Hello to those viewing my pages,
        <br /><br /> 
        Hello, my name is David Tu and I am a motivated and enthusiastic individual with a passion for Computer programming. 
        I recently graduated from Simon Fraser University with a degree in Computer Science and 
        I am eager to put my education and skills to use in a challenging and rewarding role.
        <br /><br />
        I have a strong understanding of various technologies and programming languages, including web development, data structures and algorithms, databases(T-SQL), and object-oriented programming (OOP) languages.
        I'm constantly learning and staying up to date with the latest developments in my field.  
        <br /><br /> 
        I am confident in my skills and eager to grow as a Computer Programmer. I possess a strong ability to learn quickly and am always willing to go above and beyond to deliver high-quality results. 
        I am enthusiastic about starting my career in this field and am eager to contribute my skills and passion to a company that values hard work, creativity, and innovation.
        <br /><br />
        Thank you for taking the time to read my about me section. 
        I look forward to the opportunity to further discuss my qualifications and experience with you. 
        <br /><br />
      </div>

      <div class="right_screen">
        <img class="picture_image" src={ require("../image/nevergiveup.png") } alt="Never Give up" />
      </div>
    </div>
  );
}

export default About;
