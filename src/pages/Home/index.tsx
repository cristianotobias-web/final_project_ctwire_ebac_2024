import { useGetRestaurantsQuery } from '../../services/api' // Importa a query para obter os restaurantes da API
import RestaurantsList from '../../components/RestaurantsList' // Importa o componente de lista de restaurantes
import Header from '../../components/Header' // Importa o componente de cabeçalho
import Loader from '../../Loaders' // Importa o componente de loader
import HomeContent from '../../components/Home'

/**
 * Página inicial da aplicação.
 * Exibe um cabeçalho, a lista de restaurantes carregada da API, ou um loader enquanto os dados estão sendo buscados.
 */
const Home = () => {
  return (
    <>
      <div className="container">
        <HomeContent />
      </div>
    </>
  )
}

export default Home
