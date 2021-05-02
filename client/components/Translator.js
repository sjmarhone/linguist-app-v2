import React { Component }from "react";
import Languages from './Languages.json'


export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      language: "",
      outputText: ""
    };
  }

  render() {
    const { inputText } = this.state

    return (
      <div>
        <div>
          <h3>Text Translator</h3>
        </div>


        <form>
          <div>
            <label for="inputText">Write Text:</label>
                <textarea name="inputText" value={inputText}  id="" cols="30" rows="10" required></textarea>
          </div>

          <div class="form-group">
            <label for="format">Select Language of Voice:</label>
            <select class="form-control" name="language" id="">
                {Object.keys(Languages).map(key => (
                  <option key={Languages[key]} label={Languages[key]} value={key}>{Languages[key]}</option>
                   ))}
            </select>
          </div>

          <div>
            <label for="outputText"></label>
                <textarea name="outputText" value={outputText}  id="" cols="30" rows="10" ></textarea>
          </div>

        </form>






      </div>


    );
  }
}


export default Translator
