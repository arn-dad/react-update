import { connect } from '../../utils/connect';
import Home from '../../components/Home/Home';
import { todos } from '../../store/store';


export default connect({ todos: todos })(Home);