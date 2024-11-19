import './App.css'
import AppInfo from "./components/AppInfo/AppInfo";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AppFilter from "./components/AppFilter/AppFilter";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import EmployeesAddForm from "./components/EmployeesAddForm/EmployeesAddForm";

const App = () => {
    const data = [
        {name: "John C.", salary: 800, increase: true, id: 1},
        {name: "Alex M.", salary: 3000, increase: false, id: 2},
        {name: "Carl W.", salary: 5000, increase: false, id: 3},
    ]

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    );
};

export default App;