import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const Form = () => {
    return (
        <form className='w-1/4 p-4 flex justify-around'>
            <input type="text" className='items-center border-inherit rounded-lg border-2 p-2' placeholder="Enter something to do..."/>
            <button type="submit"><FaPlusCircle color='green' fontSize="2em"/></button>
        </form>
    )
}

export default Form