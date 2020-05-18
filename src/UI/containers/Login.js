import { connect } from 'react-redux';
import Login from '../ui/Login';
import { login } from '../../redux/actions/auth';

const mapStateToProps = ({ auth, ownProps }) => ({
    loading: auth.loading,
    ...ownProps
});

export default connect(
    mapStateToProps, { login }
)(Login);