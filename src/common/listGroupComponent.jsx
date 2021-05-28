import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProerty, onItemSelected, selectedItem } = props;
    return (
        <div>
            <div className="col-md">
                <h4 className="text-warning mx-4">Filter Genres</h4>
                <ul className="list-group mt-2">
                    {items.map((item) => {
                        return <li key={item[valueProerty]} className={item === selectedItem ? "list-group-item active  bg-dark text-light" : "list-group-item "} onClick={() => onItemSelected(item)} >{item[textProperty]}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProerty: "_id"
}
export default ListGroup;