import React from "react"; // Asegúrate de importar React primero
import { PopupModal } from "react-calendly";

class CustomButtonExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <button
          style={{ display: "block", margin: "0 auto" }}
          onClick={() => this.setState({ isOpen: true })}
          className="bg-purple-600 px-8 py-4 text-lg rounded-full font-semibold"
        >
          Custom Button
        </button>
        <PopupModal
          url="https://calendly.com/edinrandal98"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          rootElement={document.getElementById("root")}
        />
      </div>
    );
  }
}



export default CustomButtonExample;
