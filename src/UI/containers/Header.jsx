import { connect } from 'react-redux';
import Header from '../ui/Header/Header';
import { getCategories } from '../../redux/actions/header';
import { toggleAuthModal } from '../../redux/actions/auth';

const mapStateToProps = ({ header, auth }) => ({
    categories: header.categories,
    isLoggedIn: auth.isLoggedIn,
    showAuthModal: auth.showAuthModal
});

const mapDispatchToProps = ({
    getCategories,
    toggleAuthModal
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
