

const ChangeMessageState = ({ handleMessag }) => {
  const messages = ["oi", "olá", "tudo bem?"]

  return (
    <div>
      <button onClick={() => handleMessag(messages[0])}>1</button>
      <button onClick={() => handleMessag(messages[1])}>2</button>
      <button onClick={() => handleMessag(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState