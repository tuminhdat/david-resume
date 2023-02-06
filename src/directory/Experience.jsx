function Experience() {
  return (
    <div>
      <div class="change_background_color">
            <div id="skill_info_title">
                <img id="experience_image" src={ require("../image/experience.png") } alt="experience image" />
            </div>
        </div>

        <h4>These are the various projects I have been a part of as a software developer.</h4>

        <div class="skill_info_1">
            <h2>Coder's Cafe</h2>
            <p>Developed a kiosk application that streamlines the ordering process and reduces the need for in-person interaction. 
                The solution allows customers to place their orders on a touch screen, eliminating the need to wait in line or interact with a cashier. 
                The system integrates with a restaurant's existing menu and payment systems to provide a seamless, efficient ordering experience. 
                The user-friendly interface and quick ordering process improve customer satisfaction and help restaurants operate more efficiently.
            </p>
            <ul>
                <li>Utilized .NET Framework and MVC architecture. Created a user-friendly interface for customers to view menus, place orders, register information, track loyalty points and view payment options using WPF (XAML). 
                    Implemented form validation and authentication using C# functions and LINQ statements to verify data from the backend.
                </li>
            </ul>
        </div>
            
        <div class="skill_info_1">
            <h2>FitGain</h2>
            <p>Developed a fitness app to help users maintain a daily workout routine at home. 
                Offered certified professional workout sessions of 10 minutes to half an hour, 
                calculated calories burned and recorded caloric intake to provide net intake. 
                Enabled users to set body weight and fitness goals and provided customized workout plans and meal suggestions. 
                Helped users meet personal health goals with daily reminders and personalized support.
            </p>
            <ul>
                <li>Developed a full stack kiosk application for ordering food during COVID-19, using .NET Framework and MVC architecture. Implemented user-friendly UI with WPF (XAML) and form validation. 
                    Handled customer data with C# functions and LINQ statements.
                </li>
            </ul>
        </div>

        <div class="skill_info_1">
            <h2>Cooker Web Application</h2>
            <p>Developed 'Computing Cooker,' a web app that facilitates recipe search based on ingredients and enables recipe sharing among users. 
                Implemented user authentication and recipe creation/upload, along with recipe images and instructions. 
                Built a community of culinary enthusiasts who can interact and share cooking experiences.
            </p>
            <ul>
                <li>Designed and developed a recipe suggestion web app using Java Spring framework and MVC architecture pattern. 
                    Built database, web service, and user-friendly web pages. Deployed the application on Heroku for seamless user access. 
                    Ensured high-quality performance through manual unit testing and automated testing using Selenium IDE.</li>
            </ul>
        </div>
    </div>
  );
}

export default Experience;