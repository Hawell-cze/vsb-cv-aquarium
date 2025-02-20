import React, { useEffect, useState } from "react";

function Aquarium({
  data,
  aquarium,
  setAquarium,
  tempAquarium,
  setTempAquarium,
}) {
  const [aquariumBoth, setAquariumBoth] = useState(0);
  const [fishSpaceReq, setFishSpaceReq] = useState({
    small: 10,
    large: 20,
  });
  const [validate, setValidate] = useState("danger disabled");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    handleVypocet();
  }, [tempAquarium]);

  useEffect(() => {
    validateAquarium();
  }, [aquariumBoth]);

  const handleAquarium = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    let updateAquarium;
    switch (name) {
      case "sirka": {
        updateAquarium = { ...tempAquarium, width: val };
        break;
      }
      case "vyska": {
        updateAquarium = { ...tempAquarium, height: val };
        break;
      }
      case "hloubka": {
        updateAquarium = { ...tempAquarium, depth: val };
        break;
      }
      default:
        break;
    }
    if (val > 0) {
      setTempAquarium(updateAquarium);
    }
  };

  const handleVypocet = () => {
    let vyska = parseFloat(tempAquarium.height);
    let sirka = parseFloat(tempAquarium.width);
    let hloubka = parseFloat(tempAquarium.depth);

    const vysledek = vyska * sirka * hloubka;
    setAquariumBoth(vysledek);
  };

  const validateAquarium = () => {
    const countSmall = data.filter((fish) => fish.size === "small").length;
    const countLarge = data.filter((fish) => fish.size === "large").length;
    const totalFishSpace =
      parseFloat(countSmall) * parseFloat(fishSpaceReq.small) +
      parseFloat(countLarge) * parseFloat(fishSpaceReq.large);

    if (totalFishSpace < aquariumBoth) {
      setValidate("success");
      setIsValid(true);
    } else {
      setValidate("danger disabled");
      setIsValid(false);
    }
  };

  const addData = () => {
    setAquarium(tempAquarium);
  };

  const loadCurrentSize = () => {
    setTempAquarium({
      width: aquarium.width.toFixed(2),
      height: aquarium.height.toFixed(2),
      depth: aquarium.depth.toFixed(2),
    });
  };

  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-md-6 p-3 border rounded">
          <div className="mb-3">
            <h2>Rozměry akvária</h2>
            <label htmlFor="vyska" className="form-label">
              Výška: {tempAquarium.height} dm
            </label>
            <input
              type="range"
              className="form-range"
              id="vyska"
              name="vyska"
              min="0"
              max="30"
              step="0.1"
              value={tempAquarium.height}
              onChange={handleAquarium}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sirka" className="form-label">
              Šířka: {tempAquarium.width} dm
            </label>
            <input
              type="range"
              className="form-range"
              id="sirka"
              name="sirka"
              min="0"
              max="30"
              step="0.1"
              value={tempAquarium.width}
              onChange={handleAquarium}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hloubka" className="form-label">
              Hloubka: {tempAquarium.depth} dm
            </label>
            <input
              type="range"
              className="form-range"
              id="hloubka"
              name="hloubka"
              min="0"
              max="30"
              step="0.1"
              value={tempAquarium.depth}
              onChange={handleAquarium}
            />
          </div>
          <button className={`btn btn-${validate} me-2`} onClick={addData}>
            Schválit rozměr
          </button>
          <button className="btn btn-outline-primary" onClick={loadCurrentSize}>
            Aktuální velikost akvária
          </button>
        </div>
        <div className="col-md-6">
          <div className="result-container p-3 border rounded">
            <h2>Výpočet objemu akvária</h2>
            <p>
              Potřebný objem akvária:{" "}
              {parseFloat(
                data.filter((fish) => fish.size === "small").length *
                  fishSpaceReq.small
              ) +
                parseFloat(
                  data.filter((fish) => fish.size === "large").length *
                    fishSpaceReq.large
                )}{" "}
              litrů
            </p>
            <p>
              Aktuální objem akvária: {aquariumBoth.toFixed(2)} dm³{" "}
              {isValid ? (
                <i className="fas fa-check-circle text-success"></i>
              ) : (
                <i className="fas fa-times-circle text-danger"></i>
              )}
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aquarium;
