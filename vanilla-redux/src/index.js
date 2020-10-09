import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    // ...modify states
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    // console.log("there was a change on the store");
    // console.log(countStore.getState());
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: ADD });
};
const handleMinus = () => {
    countStore.dispatch({type: MINUS });
};


countStore.subscribe(onChange);

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
/*
1 createStore 로 data의 store를 만들고 (create하고)
2 data의 modifier가 countModifier 라는 걸 store에 알려주고
3 하고싶은 동작. message를 store에 보내면 됨 (send하는 방법은 dispatch)
*/
