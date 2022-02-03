export default function (
	state = {
		formValues: {}
	},
	action) {
	switch (action.type) {
		case 'FORM':
			return {
				...state,
				formValues: action.data
			}
		default:
			return state
	}
}
