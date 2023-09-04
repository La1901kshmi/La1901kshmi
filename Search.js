import React,{useState} from 'react'

function Search() {
    const list=[
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
     ]
     const [filterList,setFilterList]=useState(list)
     const handleSearch=(event)=>{
        if(event.target.value===""){
            setFilterList(list)
            return
        }
     const filteredvalue=list.filter((item)=>
     item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1)
      setFilterList(filteredvalue)



      
     }
  return (
    <div>
        Search: &nbsp;
        <input name="query" type="text" onChange={handleSearch}/>
        {filterList && filterList.map((item,index)=>(
            <div key={index}>{item}</div>
        ))}
    </div>
  )
}

export default Search