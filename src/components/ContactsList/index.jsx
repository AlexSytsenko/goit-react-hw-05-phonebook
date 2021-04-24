import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactsItem from '../ContactItem';
import styles from './ContactsList.module.scss';


const ContactsList = ({ contacts, filter }) => {

  const getVisibleContacts = () => {
   
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul className={styles.contacts__list}>
      {getVisibleContacts().map(({ id }) => (
        <ContactsItem key={id} value={id} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});


export default connect(mapStateToProps)(ContactsList);