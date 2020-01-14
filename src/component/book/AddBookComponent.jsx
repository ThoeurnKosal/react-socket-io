import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddBookComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            author: '',
        }
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {name: this.state.name , author: this.state.author};
        ApiService.addBook(book)
            .then(res => {
                this.setState({message : 'Book added successfully.'});
                this.props.history.push('/books');
        });
        console.log(book);
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Book</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>

                    <TextField type="text" placeholder="author" fullWidth margin="normal" name="author" value={this.state.author} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveBook}>Save</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}
export default AddBookComponent;