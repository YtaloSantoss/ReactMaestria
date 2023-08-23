
import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ]

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    { id: 1, name: "Mateus", job: "Programador", age: 31 },
    { id: 2, name: "Maria", job: "Advogado", age: 27 },
    { id: 3, name: "Josias", job: "Repórter", age: 66 },
    { id: 4, name: "Miguel", job: "Estudante", age: 17 },
  ]
  return (
    <div className="App">
      <h1>Avançando em React </h1>
      <div>
        <img src="/img1.jpg" alt="img" />
      </div>
      <div>
        <img src={City} alt="img" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName nameN="João" />
      {cars.map((car) => (
        <ShowUserName
          key={car.id}
          nameN="Mateus"
          brand={car.brand}
          color={car.color}
          newCar={car.newCar}
          km={car.km} />
      ))}
      <Message
        msg={message}
      />
      <ChangeMessageState
        handleMessag={handleMessage}
      />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
