import { connect } from 'react-redux';
import Header from '../ui/Header/Header';
import { getCategories } from '../../redux/actions/home';

const mapStateToProps = (state) => ({
    categories: state.home.categories
});

const mapDispatchToProps = ({
    getCategories
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
