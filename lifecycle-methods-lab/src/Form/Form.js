import React from 'react'

const Form = ({onSubmit}) => (


    <form action="submit" onSubmit={onSubmit}>
        <input type="text" name="todoItem" ></input>
    </form>
)

export default Form;