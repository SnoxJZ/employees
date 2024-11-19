import './EmployeesList.css';
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                const {id, ...itemProps } = item;
                return <EmployeesListItem key={id} {...itemProps}/>
            })}
        </ul>
    );
};

export default EmployeesList;