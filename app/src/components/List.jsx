import React from 'react'
import Todo from './Todo'

const List = ({list, removeTodoListProp}) => {
    const renderedList = list.map((item) => <Todo title={item.title}
    completed={item.complete} 
    removeTodoListProp={(e) => removeTodoListProp(item.title)}
    key={item.title}/>)
    return (
        <>{renderedList}</>
    )
}

export default List