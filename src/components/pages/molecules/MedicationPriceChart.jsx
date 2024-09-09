import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Toggle from "../../ui/Toggle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MedicationPriceChart({ medications }) {
  const [selectedMedIndex, setSelectedMedIndex] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const currencies = ["USD", "EUR"];
  const options = {};
  const data = {
    labels: [...medications[selectedMedIndex].priceHistory.map((d) => d.date)],
    datasets: [
      {
        label: `Price history for ${medications[selectedMedIndex].name} in ${selectedCurrency}`,
        data: [
          ...medications[selectedMedIndex].priceHistory.map((med) => {
            return med[`price${selectedCurrency}`];
          }),
        ],
        borderColor: "teal",
      },
    ],
  };
  console.log(data);

  function handleMedChange(event) {
    setSelectedMedIndex(event.target.value);
  }

  function handleValueToggle(value) {
    setSelectedCurrency(value);
  }

  return (
    <div>
      <header className="flex gap-4 justify-between items-end">
        <menu className="flex gap-4 items-end">
          <select
            name="medication"
            className="border-2 border-teal-200 rounded-md p-2 text-2xl font-serif font-bold"
            onChange={handleMedChange}
          >
            {medications.map((medication, index) => {
              return (
                <option
                  key={index}
                  value={index}
                  className="text-xl font-serif"
                >
                  {medication.name}
                </option>
              );
            })}
          </select>
          <p>
            <u>Dosage:</u> {medications[selectedMedIndex].dosage}
          </p>
        </menu>
        <Toggle
          values={currencies}
          state={selectedCurrency}
          onClick={handleValueToggle}
        />
      </header>
      <Line options={options} data={data} />
    </div>
  );
}
