import React, { Component, createContext } from 'react';


//* Global 
export const RootContetx = createContext();
//*Provider -> menyimpan state global
const Provider = RootContetx.Provider;

const globalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    // let totalOrder = 0;
                    if (this.state.totalOrder > 0) {
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                }

            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default globalProvider;

//* Consumer -> Pengguna

const Consumer = RootContetx.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class parentConsumer extends Component {
            render() {
                return (

                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )

            }
        }
    )
}
