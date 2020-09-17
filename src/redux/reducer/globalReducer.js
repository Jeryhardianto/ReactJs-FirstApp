import ActionType from './globalActionType'

//*3 Nilai Awal
const globalState = {
        totalOrder: 0
    }
    //*2. Reducer
const rootReducer = (state = globalState, action) => {
    //* Menggunakan IF
    if (action.type === ActionType.PLUS_OREDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type === ActionType.MINUS_OREDER) {
        let totalOrder = 0;
        if (state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: totalOrder

        }
    }
    return state;
}

export default rootReducer;