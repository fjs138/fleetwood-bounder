import React, { useState } from 'react'

export default function Search({ getQuery }){
  const [text, setText] = useState('')

  const onChange = (query) => {
    setText(query)
    getQuery(query)
  }

  return (
      <section className='search'>
        <form>
          <input
              type='text'
              className='form-control'
              placeholder='Character name...'
              value={text}
              onChange={(e) => onChange(e.target.value)}
              autoFocus
          />
        </form>
      </section>
  )
}

// export default Search