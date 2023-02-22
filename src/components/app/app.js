import { Component} from "react"
import 'reset-css'
import Header from '../header/header';
import ShoppingList from '../shopping-list/shopping-list';

import './app.css';

class App extends Component {



  render() {
    const data = [
      { id: 1, name: 'Бананы', quantity: 50 },
      { id: 2, name: 'Яблоки', quantity: 30 },
      { id: 3, name: 'Апельсины', quantity: 40 },
      { id: 4, name: 'Ананасы', quantity: 20 },
      { id: 5, name: 'Клубника', quantity: 25 },
      { id: 6, name: 'Малина', quantity: 15 },
      { id: 7, name: 'Голубика', quantity: 10 },
      { id: 8, name: 'Черника', quantity: 12 },
      { id: 9, name: 'Абрикосы', quantity: 35 },
      { id: 10, name: 'Персики', quantity: 25 },
      { id: 11, name: 'Груши', quantity: 30 },
      { id: 12, name: 'Сливы', quantity: 20 },
      { id: 13, name: 'Виноград', quantity: 40 },
      { id: 14, name: 'Киви', quantity: 20 },
      { id: 15, name: 'Манго', quantity: 15 },
      { id: 16, name: 'Гранат', quantity: 10 },
      { id: 17, name: 'Фейхоа', quantity: 5 },
      { id: 18, name: 'Ангурия', quantity: 8 },
      { id: 19, name: 'Хурма', quantity: 12 },
      { id: 20, name: 'Клюква', quantity: 18 },
      { id: 21, name: 'Черешня', quantity: 20 },
      { id: 22, name: 'Вишня', quantity: 22 },
      { id: 23, name: 'Гранаты', quantity: 30 },
      { id: 24, name: 'Арбузы', quantity: 15 },
      { id: 25, name: 'Дыни', quantity: 25 },
      { id: 26, name: 'Тыква', quantity: 20 },
      { id: 27, name: 'Огурцы', quantity: 45 },
      { id: 28, name: 'Помидоры', quantity: 40 },
      { id: 29, name: 'Перец', quantity: 30 },
      { id: 30, name: 'Капуста', quantity: 50 }
    ]
    return (
    <div className="app">
      <Header />
      <ShoppingList data={data}/>
    </div>


  );
  }

}

export default App;
