import { workTypes } from "../Types/workTypes";

export const workReducer = ( state = [], action ) => {
    switch (action.type) {
        case workTypes.add:
        console.log(action.payload,"hi")   
        return [...state, action.payload ];

        case workTypes.read:
            return action.payload

        case workTypes.delete:
            return state.filter( date => date.email !== action.payload )

        case workTypes.edit:
            const stateNew = state.filter( date => date.email !== action.payload.email )
            return [...stateNew, action.payload]
            
        default:
            return state;
    }
}