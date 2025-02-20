import React from "react";
import "./FishTable.css";
import FishForm from "../FishForm/FishForm";

function FishTable({ data, onDelete, onAdd }) {
  const renameSize = (item) => {
    const sizeOriginal = item.size;
    switch (sizeOriginal) {
      case "small": {
        return "Malá";
        break;
      }
      case "large": {
        return "Velká";
        break;
      }
      default:
        break;
    }
  };
  return (
    <div id="tableSection" class="mt-3 mx-auto">
      <table class="table table-striped">
        <thead>
          <tr class="table-secondary ">
            <th scope="col">Jméno</th>
            <th scope="col">Velikost</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{renameSize(item)}</td>
              <td className="text-center">
                <button
                  class="btn btn-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          <FishForm data={data} onAdd={onAdd} />
        </tbody>
      </table>
    </div>
  );
}

export default FishTable;
