import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
import "./ListGroup.css";

const List = styled.ul`
   list-style: none;
    padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding:5px 0;
background:${props => props.active ? "blue" : null}
`

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>Item Not Found</p>}
            {/* <ul
                // className={[styles.listGroup, styles.container].join(" ")}
                className="list-group container"
            > */}
            <List>
                {items.map((item, index) =>
                    <ListItem
                        active={index === selectedIndex}
                        key={item}
                        // className={selectedIndex === index
                        //     ? "list-group-item active"
                        //     : "list-group-item"}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default ListGroup;
