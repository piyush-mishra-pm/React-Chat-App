// We maintian this history object, instead of using the history object in browser router.
// This gives us more control, to do programmatic navigation, with much lesser code. like => history.push('/')

// "history" automatically installed with react-router-dom
import { createBrowserHistory } from 'history';
export default createBrowserHistory();
