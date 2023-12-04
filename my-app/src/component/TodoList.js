import { useState } from "react";

function TodoList() {
    // 작성한 todo를 기억할 List 상태 -> 배열
    const [todoList, setTodoList] = useState([]);  // { title : inputValue, isDone : false }     // react에서 사용하는 hook(모듈) // inputValue -> TodoList에 세팅할 것
    const [inputValue, setInputValue] = useState(""); // 사용자가 작성할 때마다 inputValue 안에 업데이트 되도록 할 것

    /* 이러한 형태로 하기 위함..
    [
        { title : "장보기", isDone : true },
        { title : "공부하기", isDone : false },
        { title : inputValue, isDone : false },
        { title : inputValue, isDone : false }
    ]
    */

    // Add Todo 버튼 클릭 시 todoList 상태에 업데이트
    const handleAddTodo = () => {
        // javascript spread 연산자 (...) : 기존 배열이나, 객체의 전체 또는 일부를 다른 배열이나 객체로 복사함
        // [장보기, {}, {}, { title : inputValue, isDone : false }]
        // 원래 상태에 변함이 없기 하기 위해서(react = 불변성의 법칙 준수) 하나를 복사한 것! 
        setTodoList([...todoList, { title : inputValue, isDone : false }]);
        setInputValue(""); // 이전의 상태 값 비워줌
    }

    // todoList에 있는 값 삭제하기
    const handleDeleteTodo = (index) => {
        // splice 함수 : mutates 함수라서 원본이 변경되는 함수이므로 state인 todoList에 직접적으로 사용 불가
        // todoList와 똑같은 배열 newTodoList를 만들어 splice 이용 후, setState함수 이용하여 상태 업데이트
        const newTodoList = [...todoList]; // todoList와 똑같은 배열 만들기 (복사)
        newTodoList.splice(index, 1); // 복사한 배열에서 index 번호부터 1개 잘라내기
        setTodoList(newTodoList);
    }
    
    // 완료/미완료 상태 업데이트
    const handleToggleTodo = (index) => {
        const newTodoList = [...todoList]; // 새로운 유사배열 생성
        newTodoList[index].isDone = !newTodoList[index].isDone; // 현재 있는 값에 반대로 세팅 true -> false, false -> true
        setTodoList(newTodoList);
    }
    
    return (
        <div>
            <h1>나의 Todo List</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {
                    todoList.map((todo, index) => ( // index : 옵션 -> 굳이 쓰지 않아도 되지만 여기선 필요해서 사용!
                                                    // {} -> () 준괄호를 소괄호로 바꾸면 return을 생략할 수 있음! 원래는 <ul></ul>을 return()으로 싸야 함..

                        // return 부분 최상위 부모한테 key를 주어야 함..! (문제는 없으나 작성해주면 좋음 -> 콘솔에 에러 없어짐)
                        <li key={index}>
                            <span style={{ textDecoration : todo.isDone ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => handleToggleTodo(index)}>{todo.isDone ? '미완료' : '완료'}</button>
                            <button onClick={() => handleDeleteTodo(index)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;