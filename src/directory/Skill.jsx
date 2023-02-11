function Skill() {
  return (
    <div class="grid-container">
        <div class="left_screen">
            <h5><span class="know_lv">Git: </span><a href="https://github.com/tuminhdat">https://github.com/dattuminh</a></h5>
            <table>
                <tr>
                    <td>Programming/languages</td>
                    <td>C++ (<span class="know_lv">7</span>),  
                        Java (<span class="know_lv">8</span>), 
                        CSS (<span class="know_lv">6</span>), 
                        Python (<span class="know_lv">4</span>), 
                        T-SQL (<span class="know_lv">8</span>),
                        PHP (<span class="know_lv">7</span>), 
                        JavaScript (<span class="know_lv">8</span>)</td>
                </tr>
                <tr>
                    <td>Framework</td>
                    <td>Spring (<span class="know_lv">7</span>),
                        .NET (<span class="know_lv">6</span>), 
                        React (<span class="know_lv">7</span>)</td>
                </tr>
                <tr>
                    <td>Tools</td>
                    <td>Git, Visual Studio, IntelliJ, Cmake, Oracle VM VirtualBox, Selenium IDE, Word, Excel, PPT</td>
                </tr>
                <tr>
                    <td>Operating Systems</td>
                    <td>Windows, Linux, and macOS</td>
                </tr>
                <tr>
                    <td>Concepts and Programming</td>
                    <td>MVC architecture, Object-Oriented Design, and more</td>
                </tr>
            </table>
        </div>

        

        <div class="right_screen">
            <img class="picture_image" src={ require("../image/skill.jpeg") } alt="Skill image" />
        </div>
    </div>
  );
}

export default Skill;
