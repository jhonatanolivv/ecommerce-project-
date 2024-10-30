import './App.scss'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { NavBar } from './components/navBar/navBar'


export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bem-vindo à lista de itens!"}/>
    </>
  )
}