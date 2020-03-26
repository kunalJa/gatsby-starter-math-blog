import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(currentCount => currentCount + 1)

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="f6 link ph3 pv2 mb2 dib"
      >
        Count: {count}
      </button>
    </>
  )
}

export default Counter
