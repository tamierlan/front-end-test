//Generic Redux Action used to get data
export const apiAction = ({
	url = '',
	method = 'GET',
	data = null,
	//Function to dispatch in Redux after sucess
	onSuccess = () => {},
	onSuccessMessage = null,
	//Function to process anything after success
	onSuccessProcess = () => {},
	//Function to dispatch in Redux after failure
	onFailure = () => {},
	//Function to dispatch in Redux after success
	onFailureProcess = () => {},
	responseType
}) => {
	return {
		type: 'API',
		payload: {
			url,
			method,
			data,
			onSuccess,
			onSuccessMessage,
			onSuccessProcess,
			onFailure,
			onFailureProcess,
			responseType
		}
	}
}
