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
		case 'COLORS': 
		    return {
				...state,
				colorValues: action.data
			}
		case 'STYLES': 
		    return {
				...state,
				styleValues: action.data
			}		
		default:
			return state
	}
}
