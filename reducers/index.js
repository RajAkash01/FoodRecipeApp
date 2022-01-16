import store from "./store";
import * as actions from './fortest'
// import store from "./customstore";
// import { stored, removed ,updated, removemultiple} from "./fortest";

// if(store.getState()&&store.getState().length===0){
//     store.dispatch(stored("true"));
// }
//   store.dispatch(updated(1,true));


// const unsubscribe =  store.subscribe(()=>{
//     console.log("store changed" ,store.getState());
// })
// unsubscribe();


// store.dispatch(removed(1));

  //  const test=store.getState();
 
      // store.dispatch(updated(1,"ashdbashb","sdf gsdg"));
  

  //  if(test.length==0){
  //   store.dispatch(stored("sffas","asf"));
  // }


  // store.dispatch(stored("sffas","asf"));
//  store.dispatch(actions.stored({firstlaunch:"sdf",login:"sdf",user:"asd"}));
  //  if(test.map(test=>test.firstlaunch=="true")){
  //    console.log("we should correct it to false")
  //  }
console.log(store.getState());
  // var a = [];
  // a.push(1, 2, 3,4,5);
  // console.log(a);
 // console.log(store.getState().map(test=>test.id));

// export default result; 