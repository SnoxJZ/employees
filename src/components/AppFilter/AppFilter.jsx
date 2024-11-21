import {Component} from "react";

import './AppFilter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btns: [
                {value: 'all', label: 'Все сотрудники'},
                {value: 'like', label: 'На повышение'},
                {value: 'salary', label: 'З/П больше 1000$'},
            ]
        }
    }

    render() {
        return (
            <div className="btn-group">
                {this.state.btns.map(item => {
                    const active = item.value === this.props.filter;
                    const className = active ? 'btn-light' : 'btn-outline-light';
                    return (
                        <button type="button"
                                className={`btn ${className}`}
                                key={item.value}
                                onClick={() => this.props.onFilter(item.value)}>
                            {item.label}
                        </button>
                    )
                })}
            </div>
        );
    }
};

export default AppFilter;