import React from "react"; // Asegúrate de importar React primero
import { PopupModal } from "react-calendly";

const { useState, useEffect } = require("react");

class CustomButtonExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      rootElement: null,
    };
  }

  componentDidMount(){
    this.setState({rootElement:document.getElementById("root")});
  }

  render() {
    const { appointmentInfo } = this.state;
    return (
      <div>
        <button
          onClick={() => this.setState({ isOpen: true })}
          className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20"
        >
          Seleccione el día y hora para su prueba
        </button>
        <PopupModal
          url="https://calendly.com/edinrandal98"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          rootElement={this.state.rootElement}
        />
      </div>
    );
  }
}

export default CustomButtonExample;


