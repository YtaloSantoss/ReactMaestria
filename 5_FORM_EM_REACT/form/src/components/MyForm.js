import './MyForm.css'
import { useState } from 'react';

const MyForm = ({ user }) => {
  // 3- gerenciamento de dados 
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState(user ? user.bio : "")

  const handleName = (e) => {
    setName(e.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(name)
    console.log(email)
    console.log(bio)

    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <div>
      {/*1 - criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        <label >
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span >Bio:</span>
          <textarea
            name="bio"
            placeholder="Discrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <input
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  )
}

export default MyForm