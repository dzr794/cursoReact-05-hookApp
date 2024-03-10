
export const ShowIncrement = ({fn}) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        fn( 5 )
      }}
    >
      incrementar
    </button>
  )
}
