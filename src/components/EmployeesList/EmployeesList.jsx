import './EmployeesList.css';
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                const {id, ...itemProps } = item;
                return (<EmployeesListItem
                            key={id}
                            {...itemProps}
                            onDelete={() => onDelete(id)}
                            onToggleIncrease={() => onToggleIncrease(id)}
                            onToggleLike={() => onToggleLike(id)}
                />)
            })}
        </ul>
    );
};

export default EmployeesList;