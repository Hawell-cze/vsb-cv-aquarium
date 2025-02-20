import React, { useState } from "react";

function FishForm({ data, onAdd }) {
  const [newFish, setNewFish] = useState({
    id: data.length > 0 ? Math.max(...data.map((fish) => fish.id)) + 1 : 1,
    name: "",
    size: "",
  });

  const [valid, setValid] = useState();

  const handleChange = (e) => {
    const source = e.target.name;
    const val = e.target.value;
    let updateFish;

    switch (source) {
      case "name": {
        updateFish = { ...newFish, name: val };
        break;
      }
      case "size": {
        updateFish = { ...newFish, size: val };
        break;
      }
      default:
        break;
    }
    setNewFish(updateFish);
    validateData(updateFish);
  };

  const validateData = (fish) => {
    if (fish.name === "" || fish.size === "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const resetNewFish = () => {
    const temp = {
      id: newFish.id + 1,
      name: "",
      size: "",
    };
    setNewFish(temp);
    validateData(temp);
  };

  return (
    //   <div class=" row mt-3">
    //     <div class="col-5 mb-3">
    //       <label for="name" class="form-label">
    //         Jméno rybičky
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         name="name"
    //         id="name"
    //         required
    //         value={newFish.name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div class="col-5 mb-3">
    //       <label for="size" class="form-label">
    //         Velikost
    //       </label>

    //       <select
    //         class="form-select"
    //         id="size"
    //         name="size"
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="" selected={newFish.size === "" ? true : false}>
    //           --- vyberte ---
    //         </option>
    //         <option
    //           value="small"
    //           selected={newFish.size === "small" ? true : false}
    //         >
    //           Malá
    //         </option>
    //         <option
    //           value="large"
    //           selected={newFish.size === "large" ? true : false}
    //         >
    //           Velká
    //         </option>
    //       </select>
    //     </div>
    //     <div className="col-2 d-flex align-items-center">
    //       <button
    //         class={`btn ${
    //           valid === true ? "btn-success" : "btn-danger disabled"
    //         }`}
    //         onClick={() => {
    //           resetNewFish();
    //           onAdd(newFish);
    //         }}
    //       >
    //         Přidat rybičku
    //       </button>
    //     </div>
    //   </div>

    <>
      <tr>
        <td>
          <input
            type="text"
            class="form-control w-75"
            name="name"
            id="name"
            maxLength="20"
            required
            placeholder="Jméno"
            value={newFish.name}
            onChange={handleChange}
          />
        </td>
        <td>
          {" "}
          <select
            class="form-select "
            id="size"
            name="size"
            onChange={handleChange}
            required
          >
            <option value="" selected={newFish.size === "" ? true : false}>
              -velikost-
            </option>
            <option
              value="small"
              selected={newFish.size === "small" ? true : false}
            >
              Malá
            </option>
            <option
              value="large"
              selected={newFish.size === "large" ? true : false}
            >
              Velká
            </option>
          </select>
        </td>
        <td className="text-center">
          {" "}
          <button
            class={`btn ${
              valid === true ? "btn-success" : "btn-danger disabled"
            }`}
            onClick={() => {
              resetNewFish();
              onAdd(newFish);
            }}
          >
            Přidat rybičku
          </button>
        </td>
      </tr>
    </>
  );
}

export default FishForm;
