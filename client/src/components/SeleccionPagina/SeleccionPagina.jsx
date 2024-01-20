import style from "./SeleccionPagina.module.css";

const SeleccionPagina = ({
  cantidadPaginas,
  setPaginaActual,
  paginaActual,
}) => {
  const numerosDePagina = [];

  const handleClick = (event) => {
    const id = event.target.innerHTML;
    if (!isNaN(Number(id))) return setPaginaActual(id - 1);
    if (id === "Next" && paginaActual < cantidadPaginas - 1)
      return setPaginaActual(paginaActual + 1);
    if (id === "Back" && paginaActual > 0) {
      return setPaginaActual(paginaActual - 1);
    }
  };

  for (let i = paginaActual; i < cantidadPaginas; i++) {
    if (i < paginaActual + 20 && i < cantidadPaginas - 1)
      numerosDePagina.push(
        <button
          onClick={handleClick}
          className={style.button}
          key={`button_${i}`}
        >
          {i + 1}
        </button>
      );
    if (i === cantidadPaginas - 1) {
      if (!(cantidadPaginas - 2 < paginaActual + 20))
        numerosDePagina.push(
          <span className={style.suspensivos} key={i - 1}>
            ...
          </span>
        );
      numerosDePagina.push(
        <button onClick={handleClick} className={style.button} key={i}>
          {i + 1}
        </button>
      );
    }
  }

  return (
    <div>
      {cantidadPaginas > 0 ? (
        <>
          <button onClick={handleClick}>Back</button>
          {numerosDePagina.map((pagina) => pagina)}
          <button onClick={handleClick}>Next</button>
        </>
      ) : null}
    </div>
  );
};

export default SeleccionPagina;
