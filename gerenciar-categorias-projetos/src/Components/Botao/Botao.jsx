export default function Button({texto, tipo = 'button'}) {

  return (

    <button
      type={tipo}
      className="btn text-white px-4 py-2 fw-semibold"
      style={{
        backgroundColor: '#045148',
        border: 'none',
        borderRadius: '8px'
      }}
    >
      {texto}
    </button>

  );
}