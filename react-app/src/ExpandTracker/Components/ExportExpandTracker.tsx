import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExportExpandTracker = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 5, category: "Utilities" },
        { id: 3, description: "bbb", amount: 5, category: "Groceries" },
        { id: 2, description: "ccc", amount: 5, category: "Utilities" },
        { id: 4, description: "dd", amount: 5, category: "Entertainment" },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses;

    return (
        <>
            <div className="mb-5">
                <ExpenseForm onSubmit={expense =>
                    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
            </div>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))} />
        </>
    )
}

export default ExportExpandTracker