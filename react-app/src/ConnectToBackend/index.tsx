import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

const ConnectToBackend = () => {
    const { users, error, isLoading, setError, setUsers } = useUsers();

    const deleteUser = (user: User) => {
        const originalUsers = [...users]
        setUsers(users.filter(u => u.id !== user.id))

        userService
            .delete(user.id)
            .catch(err => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }

    const addUser = () => {
        const originalUser = [...users];
        const newUser = { id: 0, name: "Mosh" };
        setUsers([newUser, ...users]);

        userService
            .create(newUser)
            .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
            .catch(err => {
                setError(err.message);
                setUsers(originalUser)
            });
    }
    const updateUser = (user: User) => {
        const originalUsers = users
        const updatedUser = { ...user, name: user.name + "!" };
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));

        userService
            .update(updatedUser)
            .catch(err => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }

    return (
        <div className="w-50">
            {error && <p className="text-danger"> {error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button
                className="btn btn-primary mb3"
                onClick={() => addUser()}
            >
                Add
            </button>
            <ul className="list-group">
                {users.map(user =>
                    <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {user.name}
                        <div >
                            <button
                                className="btn btn-outline-secondary mx-1"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>

                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteUser(user)}
                            >
                                DELETE
                            </button>
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default ConnectToBackend