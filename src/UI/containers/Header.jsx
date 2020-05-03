import { connect } from 'react-redux';
import Header from '../ui/Header/Header';
import { getCategories } from '../../redux/actions/header';

const mapStateToProps = (state) => ({
    categories: state.header.categories
});

const mapDispatchToProps = ({
    getCategories
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
