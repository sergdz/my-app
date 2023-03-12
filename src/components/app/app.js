import { Component } from "react"
import Header from '../header/header';
import ShoppingList from '../shopping-list/shopping-list';
import AddProduct from "../add-product/add-product";
import SearchForm from "../searсh-form/searсh-form";


import './app.css';
import ShoppingFilter from "../shopping-filter/shopping-filter";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'Бананы', quantity: 5, bay: false },
        { id: 2, name: 'Яблоки', quantity: 3, bay: false },
        { id: 3, name: 'Апельсины', quantity: 4, bay: false },
        { id: 4, name: 'Ананасы', quantity: 20, bay: false },
        { id: 5, name: 'Клубника', quantity: 2, bay: false },
        { id: 6, name: 'Малина', quantity: 15, bay: false },
        { id: 7, name: 'Голубика', quantity: 10, bay: false }

      ],
      item: '',
      filter: '',
    }

    this.maxId = 8

  }

  onDelete = (id) => {
    this.setState(({ data }) => {

      return {
        data: data.filter(item => item.id !== id),
      }


    })
  }

  addItem = (name, quantity, bay) => {
    const newItem = {
      name,
      quantity,
      bay,

      id: this.maxId++

    }

    this.setState(({ data }) => {
      const newArray = [...data, newItem]
      return {
        data: newArray
      }
    })
  };

  onActive = (id, prop) => {
    /*  const bay = !this.state.data[id - 1].bay
     const i = this.state.data[id - 1].id
     localStorage.setItem('bay', bay)
     console.log(bay, i); */
    this.setState(({ data }) => ({

      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),


    }))

    const data1 = this.state.data[id - 1]
    return data1
  }

  onInputChange = (item) => {
    this.setState({ item })
  }

  onDataChange = (data, item) => {
    if (item.length === 0) {
      return data
    }

    return (
      data.filter(items => items.name.indexOf(item) > -1)
    )

  };

  filterProducts = (items, filter) => {
    switch (filter) {
      case 'productsOverTen':
        return items.filter(item => item.quantity > 10)
      case 'bay':
        return items.filter(item => item.bay === true)
      default:
        return items
    }


  }



  filterState = (e, filter) => {
    this.setState({ filter })
    console.log(e);

  }







  render() {
    const { data, item, filter } = this.state
    const visibleData = this.filterProducts(this.onDataChange(data, item), filter)
    return (
      <div className="app">
        <Header />
        <ShoppingFilter
          filter={filter}
          filterState={this.filterState}
        />
        <SearchForm
          onInputChange={this.onInputChange}
        />
        <ShoppingList
          data1={this.data1}
          onDelete={this.onDelete}
          onActive={this.onActive}
          data={visibleData} />
        <AddProduct
          addItem={this.addItem}
        />




      </div>


    );
  }

}



export default App;
