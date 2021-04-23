import PropTypes from 'prop-types';

import styles from './ContactItem.module.scss';

const ContactsItem = ({ name, number, id, onDeleteContact }) => (
  <li className={styles.contact__item}>
    <p className={styles.contact__text}>
      {name}: {number}
    </p>
    <button
      className={styles.contact__button}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
