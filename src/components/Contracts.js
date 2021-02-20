import React, { Component } from 'react';
import Contact from './Contact';

class Contracts extends Component {
  state = {
    contacts: [
      {
        firstName: 'Барней',
        lastName: 'Стинсовський',
        phone: '+380956319521',
        gender: 'male',
      },
      {
        firstName: 'Робін',
        lastName: 'Щербатська',
        phone: '+380931460123',
        gender: 'female',
      },
      {
        firstName: 'Анонімний',
        lastName: 'Анонімус',
        phone: '+380666666666',
      },
      {
        firstName: 'Лілія',
        lastName: 'Олдровна',
        phone: '+380504691254',
        gender: 'female',
      },
      {
        firstName: 'Маршен',
        lastName: 'Еріксонян',
        phone: '+380739432123',
        gender: 'male',
      },
      {
        firstName: 'Теодор',
        lastName: 'Мотсбес',
        phone: '+380956319521',
        gender: 'male',
      },
    ],
    search: '',
    filterContacts: [],
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
    this.setState({
      filterContacts: this.state.contacts.filter(
        (c) =>
          c.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          c.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          c.phone.includes(e.target.value)
      ),
    });
  };
  render() {
    return (
      <div>
        <div className="input-box">
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="Search"
          />
        </div>
        <div className="contact-block">
          {this.state.search === ''
            ? this.state.contacts.map((contact, i) => (
                <Contact contact={contact} key={i} />
              ))
            : this.state.filterContacts.map((contact, i) => (
                <Contact contact={contact} key={i} />
              ))}
        </div>
      </div>
    );
  }
}

export default Contracts;
