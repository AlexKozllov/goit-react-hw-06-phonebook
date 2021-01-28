import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

import s from "./app.module.css";

import shiftAppear from "./animation/shiftAppear.module.css";

class App extends Component {
  state = {
    isExistContact: false,
  };

  render() {
    const { isExistContact } = this.state;
    return (
      <div className={s.wrapper}>
        <CSSTransition
          in={true}
          appear
          classNames={shiftAppear}
          timeout={500}
          unmountOnExit
        >
          <h1 className={s.headerPhoneboo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          handlerInput={this.handlerInput}
          onCheckUnique={this.onCheckUnique}
          isExistContact={isExistContact}
        />
        <ContactList />
      </div>
    );
  }
}

export default App;
