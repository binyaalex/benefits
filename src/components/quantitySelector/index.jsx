import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'; const QuantitySelector = ({ onChange, value, minValue = 0 }) => {
  const [count, setCount] = useState(0)

  const handleAddQuantity = e => {
    setCount(parseInt(count + 1))
    handleOnChange(e, count + 1)
  }

  const handleLessQuantity = e => {
    if (count > minValue) {
      setCount(count - 1)
      handleOnChange(e, count - 1)
    }
    else handleOnChange(e, count)
  };

  const handleOnChange = (e, count) => onChange({
    ...e,
    target: {
      ...e.target,
      value: count
    }
  })

  useEffect(() => {
    setCount(parseInt(minValue))
  }, [minValue])

  return (
    <div className="addItemDiv">
      <button onClick={handleLessQuantity} className="minusItem">
        <RemoveIcon />
      </button>
      <div className="numbersOfItems">{typeof value ? value : count}</div>
      <button onClick={handleAddQuantity} className="minusItem">
        <AddIcon />

      </button>
    </div>
  )
}

export default QuantitySelector