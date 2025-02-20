import { useState, useEffect } from "react";
import rawData from "./fishData.json";
import "./App.css";
import FishTable from "./components/FishTable/FishTable";
import Aquarium from "./components/Aquarium/Aquarium";

function App() {
  const [listOfFish, setListOfFish] = useState(rawData.fish);
  const [activeTab, setActiveTab] = useState(1);
  const [aquarium, setAquarium] = useState({
    width: 5,
    height: 4.5,
    depth: 3.5,
  });
  const [tempAquarium, setTempAquarium] = useState({
    width: 5,
    height: 4.5,
    depth: 3.5,
  });

  const handleDelete = (itemId) => {
    const temp = listOfFish.filter((fish) => fish.id !== itemId);
    setListOfFish(temp);
  };

  const handleAdd = (addFish) => {
    const changeFishList = [...listOfFish, addFish];
    setListOfFish(changeFishList);
  };

  return (
    <>
      <div class="container mt-3">
        <div class="btn-container">
          <button
            class={`btn me-2 ${
              activeTab === 1 ? "btn-primary" : "btn-outline-secondary"
            }`}
            id="fishList"
            onClick={() => setActiveTab(1)}
          >
            Rybičky
          </button>
          <button
            class={`btn me-2 ${
              activeTab === 2 ? "btn-primary" : "btn-outline-secondary"
            }`}
            id="aquarium"
            onClick={() => setActiveTab(2)}
          >
            Akvárium
          </button>
        </div>
        {activeTab === 1 && (
          <>
            <FishTable
              data={listOfFish}
              onDelete={handleDelete}
              onAdd={handleAdd}
            />
            {/* <FishForm data={listOfFish} onAdd={handleAdd} /> */}
          </>
        )}
        {activeTab === 2 && (
          <Aquarium
            data={listOfFish}
            aquarium={aquarium}
            setAquarium={setAquarium}
            tempAquarium={tempAquarium}
            setTempAquarium={setTempAquarium}
          />
        )}
      </div>
    </>
  );
}

export default App;
