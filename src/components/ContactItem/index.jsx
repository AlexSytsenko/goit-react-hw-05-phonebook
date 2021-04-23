import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/actions';
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


const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(actions.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);

