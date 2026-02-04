import { algorithmInfo } from "../algorithms/algorithmInfo";

function InfoPanel({ algorithm }) {
  const info = algorithmInfo[algorithm];

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">{info.name}</h2>
      <p className="text-sm text-gray-300 mb-2">{info.description}</p>

      <div className="text-sm">
        <p>
          <strong>Time:</strong> {info.time}
        </p>
        <p>
          <strong>Space:</strong> {info.space}
        </p>
      </div>
    </div>
  );
}

export default InfoPanel;
