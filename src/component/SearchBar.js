import React from 'react'

export default function SearchBar({

    value,
    isLoading,
    handleSubmit,
    onChange
}
) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                disabled={isLoading}
                onChange={onChange}
                placeholder="Search Recipe"
                className='form-control'
            />
            <input 
            disabled={isLoading || !value}
            type="submit"
            className='btn'
            value="Search"
            />
        </form>
    </div>
  )
} 
