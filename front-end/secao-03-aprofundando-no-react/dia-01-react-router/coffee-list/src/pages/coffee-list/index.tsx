import { useNavigate } from 'react-router-dom';

function CoffeeList() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <h1>CoffeeList page</h1>
      <button onClick={ handleClick }>
        Página inicial
      </button>
    </>

  )
}

export default CoffeeList;