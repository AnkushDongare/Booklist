import Book from "./Book";
import books from "./books";
const BookList = ()=>{
    return <>
    <h1>Best Selling Books List</h1>
    <section className="booklist">
        {books.map((book, index)=>{
            return <Book key={book.id} {...book} number={index} />
        })}
    </section>
        </>
}

export default BookList;