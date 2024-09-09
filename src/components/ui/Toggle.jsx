export default function Toggle({ values, state, onClick }) {
  return (
    <div className="bg-gray-200 p-1 rounded-md flex cursor-pointer">
      {values.map((value) => {
        return (
          <div
            key={value}
            value={value}
            className={`rounded-md px-2 ${
              value === state ? "text-black bg-white" : "text-gray-500"
            }`}
            onClick={() => onClick(value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}
