import { Link } from "@remix-run/react";

export default function BooksHome () {

    return (
        <p className="m-5 p-3 text-center text-xx1">
            <Link to="/books/home" className="bg-green-100 p-2">Home</Link>
            <Link to="/books/add-book" className="bg-green-100 p-2 ms-2">Add New Book</Link>
        </p>
    );
}