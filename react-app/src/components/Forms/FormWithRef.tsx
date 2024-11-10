import { FormEvent, useRef } from "react";

const FormWithRef = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = { name: "", age: 0 };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null)
            person.name = nameRef.current.value
        if (ageRef.current !== null)
            person.age = parseInt(ageRef.current.value)
        console.log(person);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb5">
                <label htmlFor="name" className="form-lable" >Name</label>
                <input ref={nameRef} id="name" type="text" className="form-control" />
            </div>
            <div className="mb3">
                <label htmlFor="age" className="form-lable" >Age</label>
                <input ref={ageRef} id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit" >SUBMIT</button>

        </form>
    )
}

export default FormWithRef