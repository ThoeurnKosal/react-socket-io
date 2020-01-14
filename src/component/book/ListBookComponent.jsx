import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListBookComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            message: null
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    componentDidMount() {
        this.reloadBookList();
    }

    reloadBookList() {
        ApiService.fetchBooks()
            .then((res) => {
                this.setState({books: res.data.body.book})
                console.log(res.data.body.book);
            });
    }

    deleteBook(bookId) {
        ApiService.deleteBook(bookId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({book: this.state.book.filter(book => book.id !== bookId)});
           })

    }

    editBook(id) {
        window.localStorage.setItem("bookId", id);
        this.props.history.push('/edit-book');
    }

    addBook() {
        window.localStorage.removeItem("bookId");
        this.props.history.push('/add-book');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>User Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addBook()}>
                    Add User
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Book</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.books.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.book}</TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );


        // return (
        //     <div>
        //         <h2 className="text-center">User Details</h2>
        //         <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addBook()}> Add User</button>
        //         <table className="table table-striped">
        //             <thead>
        //                 <tr>
        //                     <th className="hidden">Id</th>
        //                     <th>name</th>
        //                     <th>author</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     this.state.books.map(
        //                 book =>
        //                             <tr key={book.id}>           
        //                                 <td>{book.id}</td>
        //                                 <td>{book.name}</td>
        //                                 <td>{book.author}</td>
        //                                 <td>
        //                                     <button className="btn btn-success" onClick={() => this.deleteUser(book.id)}> Delete</button>
        //                                     <button className="btn btn-success" onClick={() => this.editUser(book.id)} style={{marginLeft: '20px'}}> Edit</button>
        //                                 </td>
        //                             </tr>
        //                     )
        //                 }
        //             </tbody>
        //         </table>

        //     </div>
        // );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListBookComponent;