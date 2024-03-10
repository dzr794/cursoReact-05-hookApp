

export const IsLoading = ( {counter} ) => {
  return (
    <section
      style={{ height:200 }}
      className="alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center"
    >
      <h1>Cargando información del Pokemon #{counter}</h1>
    </section>
  )
}
