import axios from 'axios'

const axMiddleware = ({ dispatch }) => (next) => (action) => {
	next(action)
	if (action.type !== 'API' || typeof action.payload === 'undefined') return
	const {
		url,
		method,
		data,
		onSuccess,
		onSuccessProcess
	} = action.payload

	axios.defaults.headers.common['Content-Type'] = 'application/json'

	axios
		.request({
			url,
			method,
			data
		})
		.then(({ data, ...props }) => {
      dispatch(onSuccess(data))
      onSuccessProcess(data, props)
		})
		.catch(() => {

    })
}

export default axMiddleware
