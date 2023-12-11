import React from 'react'
import List from '../List/List'
import { data } from '../../StaticData/Data'
import { useState } from 'react'

function Home() {

    const [people, setpeopel] = useState(data)

  return (
    <main>
        <section className='container'>
            <h3>{people.length} Birthdays Today</h3>
            <List people={people}/>
            <button onClick={()=>{setpeopel([])}}>Clear All</button>


        </section>

    </main>
  )
}

export default Home