import { Component } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Ibook } from '../ibook';
// import { error } from 'console';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
deleteOneBook(_t4: Ibook) {
throw new Error('Method not implemented.');
}
  allBooks: Array<Ibook> = [];
  isLoading: boolean = true;
  msg = '';
  constructor(private bookdataService: BookDataService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookdataService
      .getDataP()
      .then((data) => {
                this.allBooks = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
  trackById(index: number, book: Ibook): string {
    return book.id;
  }

}