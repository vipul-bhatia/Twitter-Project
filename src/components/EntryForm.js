import React from 'react'
import styles from './PricingCardStyles.module.css'

export default function EntryForm({ onCategoryChange }) {
  return (
    <>
      <h3>Bring Tweets</h3>
      <form>
        <select 
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="energy">Energy</option>
          <option value="food">Food</option>
          <option value="medical">Medical</option>
          <option value="water">Water</option>
        </select>
        <br />
      </form>
    </>
  )
}

