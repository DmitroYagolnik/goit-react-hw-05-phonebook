import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ContactForm from '../ContactForm/ContactForm';
import ScoleTransition from '../../transition/ScoleTransition/ScoleTransition';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import defaultContacts from '../../services/contacts.json';
import errorMessageObj from '../../services/errorMessage';
import './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    errorMessage: errorMessageObj.DEFAULT_MESSAGE,
  };

  componentDidMount() {
    const persistContacts = localStorage.getItem('contacts');
    this.setState({
      contacts: persistContacts ? JSON.parse(persistContacts) : defaultContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  SearchContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(elem =>
      elem.name.toUpperCase().includes(filter.toUpperCase()),
    );
  };

  findContact = contactName => {
    const { contacts } = this.state;
    return contacts.find(elem => elem.name === contactName);
  };

  deleteContact = e => {
    const { id } = e.target.parentNode;
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(elem => elem.id !== id),
    });
  };

  // deleteContact = (id) => {
  //   this.setState((state) => ({
  //     contacts: state.contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  changeErrorMessage = errorText => {
    this.setState({
      errorMessage: errorText,
    });
  };

  render() {
    const { contacts, filter, errorMessage } = this.state;
    const isShowFilter = contacts.length > 2;
    const filterLength = filter.length;
    const filteredContacts = this.SearchContacts();

    return (
      <>
        <HeaderComponent
          logoTitle="Phonebook"
          errorMessage={errorMessage}
          changeErrorMessage={this.changeErrorMessage}
        />
        <main>
          <ContactForm
            addNewContact={this.addNewContact}
            findContact={this.findContact}
            changeErrorMessage={this.changeErrorMessage}
          />
          <ScoleTransition isShow={isShowFilter}>
            <Filter handleFilter={this.changeFilter} />
          </ScoleTransition>

          {filterLength > 0 ? (
            <ContactList
              contacts={filteredContacts}
              handleDelete={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={contacts}
              handleDelete={this.deleteContact}
            />
          )}
        </main>
      </>
    );
  }
}

export default App;
