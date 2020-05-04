import { connect } from 'react-redux';
import { getlandingPageContent } from '../../redux/actions/home';
import Home from '../ui/Home/Home';

const mapStateToProps = (state) => ({
    landingPageContent: state.home.landingPageContent

});

const mapDispatchToProps = {
    getlandingPageContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
