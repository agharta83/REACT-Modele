/**
 * NPM import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import TrackUsage from './middlewares/TrackUsage';

/**
 * Code
 */

// DevTools - optionnels
const devTools = [];
if (window.devToolsExtension) {
  // On configure l'extension Redux pour Chrome/Firefox.
  devTools.push(window.devToolsExtension());
}

// Middlewares - optionnels
const TrackUsageMW = applyMiddleware(TrackUsage);

// On prépare tous les enhancers pour notre Store.
const enhancers = compose(TrackUsageMW, ...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
