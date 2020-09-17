//* Redux
//* Import
const redux = require('redux');
const createStroe = redux.createStore;

//*Inisial Object / State Global
const initialState = {
    value: 0,
    age: 17
}

//*1 Reducer => fungsi yang mana store merupakan value/state bisa diupadte hanya oleh reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action);

    // if (action.type === 'ADD_AGE') {
    //     return {
    //         //! ... => merupakan fungsi copy
    //         //!ketika ...state tidak diinisilkan maka akan menimpah object
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // return state;

    //*swicth
    switch (action.type) {
        case 'ADD_AGE':
            return {
                //! ... => merupakan fungsi copy
                //!ketika ...state tidak diinisilkan maka akan menimpah object
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

//*2 Store => digunakan utk menyimpan value atau state secara global
const store = createStroe(rootReducer);
console.log(store.getState());


//*3 Subscription => proses pemanggilan store yang kita perlukan / mirip dengan kerja dengan tombol subscribe pada youtube
store.subscribe(() => {
    console.log('Store change: ', store.getState());
})

//*4 Dispatch Action => proses pemanggilan sebuah instruksi yang disediakan oleh reducer
//* Pemanggilan list-list yang ada direducer
store.dispatch({
    type: 'ADD_AGE'
})
store.dispatch({
    type: 'CHANGE_VALUE',
    newValue: 12
})

console.log(store.getState());

//TODO REDUX
//* Store -> Subscription (Fungsi ini dijalankan ketika ada perubahan) 
//* Dispatch Action -> Subscription (Fungsi ini dijalankan ketika ada perubahan)