import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import categories from "../Categories";


const schema = z.object({
    description: z.string().min(3, { message: "Description should be at least 3 characters" }).max(50),
    amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category is required" })
    })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset
    } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset();
        })}>
            <div className="md-3">
                <label htmlFor="description" className="form-label"></label>
                <input
                    id="description"
                    type="text"
                    className="form-control"
                    {...register("description")}
                />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="md-3">
                <label htmlFor="amount" className="form-label"></label>
                <input
                    id="amount"
                    type="number"
                    className="form-control"
                    {...register("amount", { valueAsNumber: true })}
                />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

            </div>
            <div className="md-3">
                <label htmlFor="category" className="form-label"></label>
                <select
                    id="category"
                    className="form-select"
                    {...register("category")}
                >
                    <option value="">All Categories</option>
                    {categories.map(category =>
                        <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}

            </div>
            <button className="btn btn-primary">SUBMIT</button>
        </form>
    )
}

export default ExpenseForm