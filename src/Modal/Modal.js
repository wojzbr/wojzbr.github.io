import React from "react";
import classes from './Modal.module.css';

class Modal extends React.Component {

  constructor() {
    super()
    this.state = {
      show: true,
      hideModalState: "",
      hideNameState: ""
    }
  }

  hideModal = () => {
      this.setState({ hideModalState: classes.hideModalClass, hideNameState: classes.hideNameClass });
  }
  
  render() {
    if (!this.state.show) return null;
    return(
      <div className={`${classes.modal} ${this.state.hideModalState}`} onClick={this.hideModal}>
        <h1 className={`${classes.myName} ${this.state.hideNameState}`}>Wojciech Zbrożek</h1>
      </div>
    )
  }
}

export default Modal;