import { useState, useEffect, useContext} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import FormEdit from '../components/FormEdit/FormEdit'
import MyModal from './../components/MyModal/MyModal'
import UserContext from '../context/User/userContext'
import './../styles/UsersPage.css'

const UsersPage = () => {
    const [modalShow, setModalShow] = useState(false);
    const {getUsers, getUser, deleteUser,users} = useContext(UserContext) 
    useEffect(() => {
        getUsers();
    }, [users])

    const handleDelete = (e)=>{
        e.preventDefault();
        deleteUser(e.target.parentElement.parentElement.id)
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        getUser(e.target.parentElement.parentElement.id)
        setModalShow(true)
    }
    
    return (
        <>
            <div className='ml-4 mt-4'>
                <h3>Listado de usuarios</h3>
                <p>Acá se listan los usuarios registrados, con los botones ubicados en la parte derecha puede editar sus datos o borrarlos</p>
            </div>
            <div className='my-container d-flex'>
                <div className='w-100'>
                    <Table striped bordered hover variant="dark" responsive='md'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>País</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan='4'>No hay usuarios registrados</td>
                                </tr>
                            ) :
                                users.map((user, index) => (
                                    <tr id={user._id} key={index}>
                                        <td>{index}</td>
                                        <td>{user.name}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.country}</td>
                                        <td>{user.email}</td>
                                        <td className='text-center'>
                                            <Button onClick={handleEdit}>Editar usuario</Button>
                                        </td>
                                        <td className='text-center'>
                                            <Button onClick={handleDelete}>Eliminar usuario</Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                body={FormEdit}
                modalTitle='Editar usuario'
            />
        </>
    )
}

export default UsersPage