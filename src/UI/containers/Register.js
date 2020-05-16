import {connect} from 'react-redux';
import Register from '../ui/Register';
import {register} from '../../redux/actions/auth';

const mapStateToProps = ({ auth, ownProps }) => ({
    loading: auth.loading,
    ...ownProps
});

export default connect(mapStateToProps, { register })(Register);