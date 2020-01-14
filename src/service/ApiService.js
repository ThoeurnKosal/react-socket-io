import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:4000/books';

class ApiService{

    fetchBooks(){
        return axios.get(BOOK_API_BASE_URL);
    }

    fetchBookById(bookId){
        return axios.get(BOOK_API_BASE_URL + '/' + bookId);
    }

    deleteBook(bookId){
        return axios.delete(BOOK_API_BASE_URL+ '/' + bookId);
    }

    addBook(book){
        return axios.post(""+BOOK_API_BASE_URL,book);
    }
    editBook(book){
        return axios.put(""+BOOK_API_BASE_URL,book);
    }
}

export default new ApiService();