import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); // configuracion de enzyme para react 16
global.fetch = require('jest-fetch-mock');
