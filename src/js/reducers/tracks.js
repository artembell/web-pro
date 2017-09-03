
const initialState = [
	"Cola",
	"Young and Beautiful"
];

export default function playlist(state = initialState, action){
	if(action.type == "ADD_TRACK"){
		return [
			...state,
			action.value
		];
	}
	return state;
};