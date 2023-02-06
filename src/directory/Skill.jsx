function Skill() {
  return (
    <div class="grid-container">
        <div class="left_screen">
            <h5><span class="know_lv">Git: </span><a href="https://github.com/tuminhdat">https://github.com/dattuminh</a></h5>
            <table>
                <tr>
                    <td>Programming/languages</td>
                    <td>C++ (<span class="know_lv">3+</span>),  
                        Java (<span class="know_lv">3+</span>), CSS (<span class="know_lv">2+</span>), Python (<span class="know_lv">3+</span>), T-SQL (<span class="know_lv">3+</span>), JavaScript (<span class="know_lv">3+</span>)</td>
                </tr>
                <tr>
                    <td>Framework</td>
                    <td>Spring (<span class="know_lv">3+</span>), React (<span class="know_lv">3+</span>)</td>
                </tr>
                <tr>
                    <td>Tools</td>
                    <td>Git, Clion, Visual Studio, IntelliJ, Cmake, Oracle VM VirtualBox</td>
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
