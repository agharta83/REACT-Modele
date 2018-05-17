/**
 * NPM import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import TrackUsage from './middlewares/TrackUsage';

/**
 * Code
 */

// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const exampleEnhancer = applyMiddleware(TrackUsage);
const enhancers = compose(exampleEnhancer, ...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
