import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const items = [
    //     "New York",
    //     "San Francisco",
    //     "Tokyo",
    //     "London",
    //     "Paris"
    //   ];

    //   const handleSelectItem = (item: string) => {
    //     console.log(item);
    //   };



    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>Item Not Found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        key={item}
                        className={selectedIndex === index
                            ? "list-group-item active"
                            : "list-group-item"}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;
