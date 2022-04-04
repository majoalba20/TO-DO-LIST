import { useState } from 'react';
import Form from './components/Form'
import List from './components/List';

function App() {

  const apptitle = 'TO-DO-APP';

  const list = [{title: 'Test #1', complete: false},
    {title: 'Test #2'},{title: 'Test #3'}]

  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };

  const removeTodo = (id) => {
    setTodoList((oldlist)=> oldlist.filter((item)=> item.title !== id))
  };

  return (
    <div className='p-11 w-full'>
      <section className='flex flex-col items-center'>
        <h1>{apptitle}</h1>
        <Form addTodo={addTodo}/>
      </section>
      <section className='w-1/4 m-auto'><List list={todoList} removeTodoListProp={removeTodo}/></section>
    </div>
  )
}

export default App


