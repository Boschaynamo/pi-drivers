const SeleccionPagina = ({ cantidadPaginas }) => {
  const numerosDePagina = [];
  for (let i = 0; i < cantidadPaginas; i++) {
    numerosDePagina.push(<span key={i}>{i + 1}</span>);
  }

  return (
    <div>
      {cantidadPaginas > 0 ? (
        <>
          <button>Back</button>
          {numerosDePagina.map((pagina) => pagina)}
          <button>Next</button>
        </>
      ) : null}
    </div>
  );
};

export default SeleccionPagina;
