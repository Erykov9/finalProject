

const Pagination = (props) => {
  const nPages = props.nPages
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const currentPage = props.currentPage;

  const nextPage = () => {
    if(currentPage !==  nPages) 
      props.setCurrentPage(currentPage  + 1)
  }

  const prevPage = () => {
    if(currentPage !== 1)
      props.setCurrentPage(currentPage - 1)
  }
  
  return (
    <nav>
      <ul className='pagination  justify-content-center'>
        <li className="page-item">
          <a className="page-link"
            onClick={prevPage}
            href='#'>
              Previous
            </a>
        </li>
        {pageNumbers.map(pgNumber => (
          <li 
          key={pgNumber}
          className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}
          >
            <a 
            onClick={() => props.setCurrentPage(pgNumber)}
            className='page-link'
            href='#'
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href='#'>Next</a>
        </li>
      </ul>
    </nav>

  )
};

export default Pagination