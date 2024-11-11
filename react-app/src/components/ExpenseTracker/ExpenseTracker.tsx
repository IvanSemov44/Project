import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "./Types";

const schema = z.object({
    description: z.string().
        min(3, { message: "Description must be at least 3 character!" }),
    amount: z.number({ invalid_type_error: "Amount field is required!" }),
    category: z.string().min(1, { message: "Required Field" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
    setTask: (data: Todo) => void
}

const ExpenseTracker = ({ setTask }: Props) => {
    const { register, handleSubmit, formState: { errors, isValid } }
        = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        setTask(data as Todo);
        // console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb5">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    id="description"
                    type="text"
                    className="form-control"
                    {...register("description")}
                />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb5">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input
                    id="amount"
                    type="number"
                    className="form-control"
                    {...register("amount", { valueAsNumber: true })}
                />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb5">
                <label htmlFor="category" className="form-label">Description</label>
                <select
                    className="form-select"
                    defaultValue=""
                    {...register("category")}
                >
                    <option className="dropdown-item" ></option>
                    <option className="dropdown-item" value="groceries">Groceries</option>
                    <option className="dropdown-item" value="utilities">Utilities</option>
                    <option className="dropdown-item" value="entertainment">Entertainment</option>
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button
                className="btn btn-primary"
                type="submit"
                disabled={!isValid}
            >SUBMIT</button>
        </form>
    )
}

export default ExpenseTracker;