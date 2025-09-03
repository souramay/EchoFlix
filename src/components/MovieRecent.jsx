






const MovieRecent = ({title, overview}) => {
  

  return (
    <div>
      {title && (
        <div>
          
          <h2>{title}</h2>
          <p>{overview}</p>

        </div>
      )}
    </div>
  )
}

export default MovieRecent
