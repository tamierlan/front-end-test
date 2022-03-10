import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import axMiddleware from './util/axMiddleware'

const getMiddleware = () => {
	var isOpera =
		(!!window.opr && !!window.opr.addons) ||
		!!window.opera ||
		navigator.userAgent.indexOf(' OPR/') >= 0

	var isChrome =
		!!window.chrome &&
		(!!window.chrome.webstore || !!window.chrome.runtime)

	if (isChrome && !isOpera) {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		return composeEnhancers(applyMiddleware(axMiddleware))
	} else return applyMiddleware(axMiddleware)
}

const store = createStore(
	reducer,
	process.env.NODE_ENV === 'jest' ? getMiddleware : getMiddleware()
)

export default store