import React from 'react'
import {useState, useEffect} from 'react';
import './Data.css'
const myJson = require('./MyData.json')


function Data({filter, order}) {

    
    const[posts, setPosts] = useState([])

    useEffect(()=>{
        if(filter !== ''){
            setPosts(myJson.filter(post => post.name === filter))
        } else {
        setPosts(myJson)
     }
     if(order === 'City'){
        let tempJson = []
        let holder = {}
        let sortedCity = []
        console.log('order 2',order)
        for(let i of myJson){
            console.log(i.id,i.address.address2.split(',')[0])
            holder[i.address.address2.split(',')[0]] = i.id
            sortedCity.push(i.address.address2)
        }
        sortedCity = sortedCity.sort()
        console.log(sortedCity)
        console.log(holder)
     }
        console.log('filter',filter)
    },[filter,order])


  

    return (

   <div>

    {posts.map((e)=> (
         <div className='jsonData' key={e.id}>
        
         <div className='lbl'>
           
           <p className='bold'>{e.name}</p> 
           <p>{e.labels}</p>
         
         </div>
         <div>
            <p>{e.address.address1}</p>
            <p>{e.address.address2}</p>


            </div>
        
         <div className='mybtn'>
             <button >Show More</button>
         </div>
 
         </div>
        ))}
        
        
        
        </div>
        )
    }
export default Data


       
        

        
       
      
    
  

