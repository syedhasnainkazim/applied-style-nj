import { useEffect, useState } from "react";

export default function VehicleSelector({ onSelect }) {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  /* =========================
     Fetch Makes
  ========================= */
  useEffect(() => {
    if (!year) return;

    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then((res) => res.json())
      .then((data) => {
        const list = data.Results.map((m) => m.MakeName);
        setMakes(list.sort());
      })
      .catch(() => setMakes([]));
  }, [year]);

  /* =========================
     Fetch Models
  ========================= */
  useEffect(() => {
    if (!year || !make) return;

    fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const list = data.Results.map((m) => m.Model_Name);
        setModels(list.sort());
      })
      .catch(() => setModels([]));
  }, [year, make]);

  /* =========================
     Emit Selection
  ========================= */
  useEffect(() => {
    if (year && make && model) {
      onSelect?.({
        year,
        make,
        model,
        trim,
      });
    }
  }, [year, make, model, trim, onSelect]);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {/* YEAR */}
      <input
        type="number"
        placeholder="Year"
        value={year}
        min="1980"
        max={new Date().getFullYear() + 1}
        onChange={(e) => {
          setYear(e.target.value);
          setMake("");
          setModel("");
          setTrim("");
        }}
        className="input"
      />

      {/* MAKE */}
      <input
        list="vehicle-makes"
        placeholder="Make"
        value={make}
        disabled={!year}
        onChange={(e) => {
          setMake(e.target.value);
          setModel("");
          setTrim("");
        }}
        className="input disabled:opacity-50"
      />
      <datalist id="vehicle-makes">
        {makes.map((m) => (
          <option key={m} value={m} />
        ))}
      </datalist>

      {/* MODEL */}
      <input
        list="vehicle-models"
        placeholder="Model"
        value={model}
        disabled={!make}
        onChange={(e) => {
          setModel(e.target.value);
          setTrim("");
        }}
        className="input disabled:opacity-50"
      />
      <datalist id="vehicle-models">
        {models.map((m) => (
          <option key={m} value={m} />
        ))}
      </datalist>

      {/* TRIM (OPTIONAL) */}
      <input
        type="text"
        placeholder="Trim (optional)"
        value={trim}
        disabled={!model}
        onChange={(e) => setTrim(e.target.value)}
        className="input disabled:opacity-50"
      />
    </div>
  );
}