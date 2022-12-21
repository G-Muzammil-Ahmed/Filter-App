import React from 'react'
import { useRef } from 'react'
import './App.css' 

function Search(props) {

    const inputElement = useRef('')
    const selectElement = useRef('')

    const clickHanlder = (event)=>{
        event.preventDefault();
        props.onFilteredName(inputElement.current.value)
    }

    const changeHandler = (event)=>{
        
        props.onOrderChange(event.target.value)
    }
  return (
    <>
    <form onSubmit={clickHanlder}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={inputElement}/>
    </div>
   
    
    <div className='submitButton'><button type="submit"  className="btn btn-primary">Submit</button ></div>

</form>
<select className="form-select form-select-sm" aria-label="Default select example" onChange={changeHandler}>
  <option value='sort By'>Sort by</option>
  <option value="Name">Name</option>
  <option value="City">City</option>
</select>
</>
  )
}

export default Search
