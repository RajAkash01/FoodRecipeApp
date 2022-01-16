import { createAction ,createSlice} from "@reduxjs/toolkit";


// actiontypes 
//  const STORE ='store';
//  const REMOVE='remove';
//  const UPDATE='update';
//  const REMOVEMULTIPLE='removemultiple';

 //action 

//  export function stored(desc,login){
//     return {
//         type:STORE,
//         payload:{
//             firstlaunch: desc,
//             login:login
//         }
//     };
// }

  // export const stored=createAction("stored");


// export function removed(id){
//     return {
//         type:REMOVE,
// payload:{
//     id,
// }
//     };
// }
 
// export const removed=createAction("removed");

// export function updated(id,desc,login){
//     return {
//         type:UPDATE,
// payload:{
//     id:id,
//     desc:desc,
//     login:login
// }
//     };
// }

// export const updated=createAction("updated");

// export function removemultiple(id){
//     return {
//         type:REMOVEMULTIPLE,
//         payload:{
//            id: id
//         }
//     };
// }
 
  // export const removemultiple=createAction("removemultiple");

 const slice= createSlice({
    name:"tostore",
    initialState: [],
    reducers:{
      stored:(state,action)=>  {
      state.push({
        id:++lastid,firstlaunch:action.payload.firstlaunch,login:action.payload.login,user1:action.payload.user1,
      });
    },
     storebottomnav:(state,action)=>{
     return action.payload.bottomnavvalue;
     },
      removed:(state,action)=>{
        return state.filter(test=>test.id !== action.payload.id);
      },
      updated:(state,action)=>{
       return state.map(test=>test.id!==action.payload.id?test:{...test,
          firstlaunch:action.payload.desc,
          login:action.payload.login
      })
      },
      // removemultiple:(state,action)=>{
      //   return state
      // }

    }
  })

// rootreducer

let lastid=0;
// export default function reducer(state=[],action){
//     switch(action.type){
//         case stored.type: return [...state,{id:++lastid,firstlaunch:action.payload.firstlaunch,login:action.payload.login}];
//         case removed.type: return state.filter(test=>test.id !== action.payload.id);
//         case updated.type:return state.map(test=>test.id!==action.payload.id?test:{...test,
//             firstlaunch:action.payload.desc,
//             login:action.payload.login
//         })
//         case removemultiple.type: return state;
//         default:return state;
//     }
// }
export const {stored,storebottomnav,removed,updated,removemultiple}=slice.actions;
export default slice.reducer
