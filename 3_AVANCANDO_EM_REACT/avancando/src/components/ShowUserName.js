

const ShowUserName = ({ nome, brand, nameN, color, newCar, km }) => {
  return (
    <div>
      <h2>O nome do usuário: {nameN} </h2>
      <h3>{nome}</h3>
      <h3>{brand}</h3>
      <h3>{color}</h3>
      <h3>{newCar}</h3>
      <h3>{km}</h3>
    </div>
  )
}

export default ShowUserName