import React from "react";
import { connect } from "react-redux";
import Languages from "./Languages.json";
import { fetchTranslate } from "../store/translate";

const initialState = {
  inputText: "",
  language: "",
  outputText: "",
};

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearText = this.handleClearText.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.fetchTranslation(this.state);
    this.setState({ outputText: this.props.translation });
  }

  handleClearText(event) {
    //this.props.translation = "";
    event.preventDefault();
    this.setState(initialState);
  }

  render() {
    console.log("this.state -------->>>>>>>>> ", this.state);

    return (
      <div>
        <div>
          <h3>Text Translator</h3>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="inputText">Write Text:</label>
              <textarea
                onChange={this.handleChange}
                name="inputText"
                value={this.state.inputText}
                type="text"
                cols="30"
                rows="10"
              />
            </div>

            <div>
              <label htmlFor="format"></label>
              <select
                onChange={this.handleChange}
                name="language"
                value={this.state.language}
              >
                {Object.keys(Languages).map((key) => (
                  <option value={key} key={key}>
                    {Languages[key]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button type="submit">Translate</button>
            </div>
          </form>

          <div onClick={this.handleClearText}>
            <button type="clearText">Clear Text</button>
          </div>

          <div>
            <label htmlFor="outputText">Translation: </label>
            <textarea
              name="outputText"
              value={this.state.outputText}
              type="text"
              cols="30"
              rows="10"
              readOnly
            >
              {this.state.outputText}
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  translation: state.translator,
});

const mapDispatch = (dispatch) => ({
  fetchTranslation: (inputText) => dispatch(fetchTranslate(inputText)),
});

export default connect(mapState, mapDispatch)(Translator);
