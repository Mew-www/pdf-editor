import React, {Component} from "react";

export class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      paddingTop: 25,
      paddingBot: 25,
      paddingLeft: 25,
      paddingRight: 25
    };
  }

  appendCharacter(char) {
    this.setState({text: this.state.text+char});
  }

  render() {
    return (
      <div className="Editor">
        <div className="Editor__primary-controls">
          {"¬∧∨→↔".split('').map((char) => {
            return (
              [
                <button className="Editor__btn-char" onClick={(e) => {this.appendCharacter(char);}}>
                  {char}
                </button>,
                <br/>
              ]
            );
          })}
        </div>
        <div id={this.props.pdf_container_id} className="Editor__pdf-container">
          <textarea className="Editor__pdf-textarea"
                    placeholder="You can type anything in here..."
                    value={this.state.text}
                    onChange={(e) => {this.setState({text: e.target.value});}}
                    style={{
                      paddingTop: this.state.paddingTop ? this.state.paddingTop + 'px' : 0,
                      paddingBottom: this.state.paddingBot ? this.state.paddingBot + 'px' : 0,
                      paddingLeft: this.state.paddingLeft ? this.state.paddingLeft + 'px' : 0,
                      paddingRight: this.state.paddingRight ? this.state.paddingRight + 'px' : 0
                    }}>
          </textarea>
        </div>
        <div className="Editor__secondary-controls">
          <label>Top margin (px):&nbsp;
            <input type="text"
                   value={this.state.paddingTop}
                   onChange={(e) => {this.setState({paddingTop: e.target.value > 400 ? 400 : e.target.value})}}
            />
          </label>
          <br/>
          <label>Bottom margin (px):&nbsp;
            <input type="text"
                   value={this.state.paddingBot}
                   onChange={(e) => {this.setState({paddingBot: e.target.value > 400 ? 400 : e.target.value})}}
            />
          </label>
          <br/>
          <label>Left margin (px):&nbsp;
            <input type="text"
                   value={this.state.paddingLeft}
                   onChange={(e) => {this.setState({paddingLeft: e.target.value > 400 ? 400 : e.target.value})}}
            />
          </label>
          <br/>
          <label>Right margin (px):&nbsp;
            <input type="text"
                   value={this.state.paddingRight}
                   onChange={(e) => {this.setState({paddingRight: e.target.value > 400 ? 400 : e.target.value})}}
            />
          </label>
        </div>
      </div>
    );
  }
}