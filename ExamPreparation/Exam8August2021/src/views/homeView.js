import { html } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../services/bookService.js';

const homeTemplate = (books) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
    
        ${books.length > 0
        ? html`
        <ul class="other-books-list">
            ${books.map(bookTemplate)}
        </ul>`
        : html`<p class="no-books">No books in database!</p>`}
    </section>
`;

const bookTemplate = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;

export async function homeView(ctx) {
    const books = await bookService.getAllBooks();
    console.log(books);
    ctx.render(homeTemplate());
}