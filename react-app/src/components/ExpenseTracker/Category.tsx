interface Props {
    setCategory: (category: string) => void;
    category: string
}

const Category = ({ setCategory, category }: Props) => {
    return (
        <>
            <div className="mb5">
                <label htmlFor="category" className="form-label">Description</label>
                <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option className="dropdown-item" ></option>
                    <option className="dropdown-item" value="groceries">Groceries</option>
                    <option className="dropdown-item" value="utilities">Utilities</option>
                    <option className="dropdown-item" value="entertainment">Entertainment</option>
                </select>
            </div>
        </>
    )
}

export default Category