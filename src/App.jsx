import {Component} from "react";

import './App.css'
import AppInfo from "./components/AppInfo/AppInfo";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AppFilter from "./components/AppFilter/AppFilter";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import EmployeesAddForm from "./components/EmployeesAddForm/EmployeesAddForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, like: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, like: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, like: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.state.data.length + 1
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {data: newArr}
        })
    //     Лучше как в onToggleLike
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    render() {
        const employeesCount = this.state.data.length;
        const employeesIncreased = this.state.data.filter(item => (item.increase)).length;

        return (
            <div className='app'>
                <AppInfo count={employeesCount} incr={employeesIncreased} />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}
                />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
};

export default App;