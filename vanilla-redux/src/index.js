import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");



const countModifier = (count = 0, action) => {
    // ...modify statess
    // console.log(count, action); 
    if(action.type == "ADD") {
        console.log("they are telling me to add one");
        return count +1;
    } else if(action.type == "MINUS") {
        return count -1;
    } else {
        return count;
    }
};

const countStore = createStore(countModifier);
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"MINUS"});

console.log(countStore.getState());

/*
1 createStore 로 data의 store를 만들고 (create하고)
2 data의 modifier가 countModifier 라는 걸 store에 알려주고
3 하고싶은 동작. message를 store에 보내면 됨 (send하는 방법은 dispatch)
*/
