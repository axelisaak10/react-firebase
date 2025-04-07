import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = async () => {
    if (name && age) {
      try {
        await addDoc(usersCollectionRef, { name, age: Number(age) });
        setName("");
        setAge("");
        getUsers(); // actualiza después de agregar
      } catch (error) {
        console.error("Error al agregar usuario:", error);
      }
    }
  };

  const updateUser = async (id, newAge) => {
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, { age: newAge });
      getUsers(); // actualiza después de actualizar
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      getUsers(); // actualiza después de eliminar
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const chartData = {
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: "Edad",
        data: users.map((user) => user.age),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <div>
      <h1>CRUD con Firebase</h1>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={createUser}>Agregar usuario</button>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Edad: {user.age}</p>
          <button onClick={() => updateUser(user.id, user.age + 1)}>+1 Año</button>
          <button onClick={() => deleteUser(user.id)}>Eliminar</button>
        </div>
      ))}

      <h2>Gráfico de Edades</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default App;
