import { Todo } from "./Types";

interface Props {
    items: Todo[];
    onDelete: (description: string) => void
}

const Table = ({ items, onDelete }: Props) => {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>
                    <tr key={item.description}>
                        <td>{item.description}</td>
                        <td>${item.amount}</td>
                        <td>{item.category}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => onDelete(item.description)}
                            >
                                DELETE
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table