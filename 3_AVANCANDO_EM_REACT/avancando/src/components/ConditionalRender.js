import { useState } from "react"


const ConditionalRender = () => {
  const [x] = useState(true)

  const [name] = useState("João")
  return (
    <>

      <hr />
      <h2>curto circuito</h2>
      <div>
        {x && <p>Se x for true, sim!</p>}
      </div>
      <hr />
      <h2>Ternário</h2>
      {name === "João" ?
        (
          <div>
            <p>O Nome é João</p>
          </div>
        ) :
        (
          <div>
            <p>O Nome não é João</p>
          </div>
        )}
    </>
  )
}

export default ConditionalRender