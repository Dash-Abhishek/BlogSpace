import { connect } from 'react-redux';
import { getTrendingBlogs } from '../../redux/actions/home';
import Home from '../ui/Home/Home';

const mapStateToProps = (state) => ({
    trendingBlogs: state.home.trendingBlogs
});

const mapDispatchToProps = {
    getTrendingBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
