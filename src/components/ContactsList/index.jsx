import PropTypes from 'prop-types';

import ContactsItem from '../ContactItem';
import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem
        key={id}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
