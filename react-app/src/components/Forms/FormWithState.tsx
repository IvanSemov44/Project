import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    name: z.string().
        min(3, { message: "Name must be at least 3 character!" }),
    age: z.number({ invalid_type_error: "Age field is required!" })
        .min(18, { message: "Age must be at least 18" })
});

type FormData = z.infer<typeof schema>;

const FormWithState = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb5">
                <label htmlFor="name" className="form-lable" >Name</label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    {...register("name",)}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>

            <div className="mb3">
                <label htmlFor="age" className="form-lable" >Age</label>
                <input
                    id="age"
                    type="number"
                    className="form-control"
                    {...register("age", { valueAsNumber: true })}
                />
                {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
            <button className="btn btn-primary" type="submit" disabled={!isValid}>SUBMIT</button>

        </form >
    )
}

export default FormWithState