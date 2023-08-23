import { useState } from "react"

const ManageData = () => {
  let someData = 10;
  console.log(someData)

  const [number, setnumber] = useState(15)
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setnumber(20)}>Mudar variável useState</button>
      </div>
    </div>
  )
}

export default ManageData