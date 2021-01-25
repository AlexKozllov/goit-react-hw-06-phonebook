import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./contactList.module.css";
import shiftAnimation from "../animation/shiftAnimation.module.css";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import { revoveContact } from "../../redux/actions/phBookActions";

import scaleAnimation from "../animation/scaleAnimation.module.css";

const ContactList = ({ listContacts, filter, revoveContact }) => {
  console.log("listContacts", listContacts);

  const getVisibleContacts = (filter) => {
    console.log("filter", filter);
    if (!!filter) {
      return listContacts.filter((contact) =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    } else return listContacts;
  };

  const visibleContacts = getVisibleContacts(filter);
  return (
    <>
      <CSSTransition
        in={listContacts.length > 1}
        classNames={scaleAnimation}
        timeout={250}
        unmountOnExit
      >
        <Filter filterValue={filter} />
      </CSSTransition>

      <TransitionGroup component="ul">
        {visibleContacts.map((item) => (
          <CSSTransition
            classNames={shiftAnimation}
            timeout={250}
            key={item.id}
          >
            <li className={s.listItem}>
              <span className={s.itemName}>{item.name}</span>{" "}
              <span>{item.number}</span>
              <button
                type="button"
                onClick={() => {
                  revoveContact(item.id);
                }}
              >
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  listContacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = { revoveContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
