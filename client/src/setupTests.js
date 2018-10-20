/**
 * See more: https://facebook.github.io/create-react-app/docs/running-tests#option-1-shallow-rendering
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
