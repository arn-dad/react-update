import { connect } from '../../utils/connect';
import Dashboard from '../../components/Dashboard/Dashboard';
import { todos } from '../../store/store';


export default connect({ todos: todos })(Dashboard);