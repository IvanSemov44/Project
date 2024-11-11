import { useState } from 'react';
import Category from './Category';
import ExpenseTracker from './ExpenseTracker';
import Table from './Table';
import { Todo } from './Types';

const Tracker = () => {
    const [table, setTable] = useState<Todo[]>([]);
    const [category, setCategory] = useState<string>("all")

    const handleTask = (data: Todo) =>
        setTable([...table, data]);

    const handleDelete = (description: string) =>
        setTable(table.filter(item => item.description !== description))

    const items = () => {
        if (category !== "all")
            return table.filter(item => item.category === category)
        return table;
    }

    return (
        <>
            <ExpenseTracker setTask={handleTask} />
            <Category category={category} setCategory={setCategory} />
            <Table items={items()} onDelete={handleDelete} />
        </>
    )
}

export default Tracker