import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

import {produce} from "immer";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

// //always return something in this reducer otherwise useReducer will put undefined in state
// const reducer = (state, action) => {

//     switch (action.type) {
//         case INCREMENT_COUNT: 
//             return {...state, count: state.count + 1};
            
//         case DECREMENT_COUNT:    
//                 return {...state, count: state.count - 1};
        
//         case SET_VALUE_TO_ADD: 
//             return {...state, valueToAdd: action.payload};

//         case ADD_VALUE_TO_COUNT:
//             return {
//                 ...state,
//                 count: state.count + state.valueToAdd,
//                 valueToAdd: 0
//             };

//         default: 
//             // throw new Error("unexpected action type: " + action.type );//can use either one of these two as default
//             return state;
//     }

// };

//reducer with immer library (not much useful)
const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT: 
            state.count = state.count + 1;
            return;
            
        case DECREMENT_COUNT:    
                state.count = state.count - 1;
                return;
        
        case SET_VALUE_TO_ADD: 
            state.valueToAdd = action.payload;
            return;

        case ADD_VALUE_TO_COUNT:
                state.count = state.count + state.valueToAdd;
                state.valueToAdd = 0;
            return;

        default: 
            // throw new Error("unexpected action type: " + action.type );//can use either one of these two as default
            return;
    }

};

function CounterUsingReducerPage({ initialCount}) {

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    // const [state, dispatch] = useReducer(reducer, {
    //     count: initialCount,
    //     valueToAdd: 0
    // });
    
    //using immer
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        //if type of input is "number" then do this
        const value = parseInt(event.target.value) || 0;

        // setValueToAdd(value);
        // setValueToAdd(event.target.value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        // setCount(count + valueToAdd);

        // setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    };

    return (<Panel className="m-3" >
        <h1 className="text-lg">
        {/* Count is {count} */}
        Count is {state.count}
        </h1>
        <div className="flex flex-row">
        <Button primary onClick={increment} >
            Increment
        </Button>
        <Button primary onClick={decrement} >
            Decrement
        </Button>
        </div>

        <form onSubmit={handleSumbit} >
            <label>Add a lot!</label>
            <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" 
                // value={valueToAdd || ""} 
                value={state.valueToAdd || ""}
                onChange={handleChange} />
            <Button secondary>Add it!</Button>
        </form>
    </Panel>);
}

export default CounterUsingReducerPage;