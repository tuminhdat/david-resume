import Video from "../video/vid.mp4";

function Home() {
  return (
    <div class="grid-container">
      <div class="left_screen">
        <span id="hello"><b>Hello spy,</b> <br /> <b>I'm David</b></span> <br /><br />
        <b>Welcome to my portfolio! I'm so glad you're here. Let's take a journey through my past projects, achievements, and skills. 
          So sit back, grab a drink, and let's dive in together!</b>
      </div>
      <div class="right_screen">
        {/* <img src={ require("../image/photo_image_2.jpg") } alt="Photo Image" /> */}
        <video id="video_frame" controls autoplay>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
