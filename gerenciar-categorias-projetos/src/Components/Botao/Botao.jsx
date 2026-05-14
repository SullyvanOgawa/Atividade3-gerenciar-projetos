export default function Button({ texto, tipo = 'button' }) {
  return (
    <button
      type={tipo}
      className="btn btn-dark"
    >
      {texto}
    </button>
  );
}