import { Injectable } from '@angular/core';
import { Ibook } from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  constructor() {}
  API_KEY = `https://669a424b9ba098ed61fef5da.mockapi.io/Books`
  getDataP(): Promise<Ibook[]> {
    return fetch(this.API_KEY).then(
      (res) => res.json()
    );
  }
  addBookP(newBook: Ibook) {
    return fetch(this.API_KEY, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  deleteBookP(book: Ibook) {
    return fetch(
      `${this.API_KEY}/${book.id}`,
      { method: 'DELETE' }
    ).then((res) => res.json());
  }
  getBookByIdP(bookId: string): Promise<Ibook> {
    return fetch(
      `${this.API_KEY}/${bookId}`
    ).then((res) => res.json());
  }

  editBookP(book: Ibook) {
    return fetch(
      `${this.API_KEY}/${book.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((res) => res.json());
  }
}
