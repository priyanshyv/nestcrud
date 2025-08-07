import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
@Injectable()
export class BookService{
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
      ) {}

      async addBook(book: Book): Promise<string> {
        await this.bookRepository.save(book);
        return 'Book added successfully';
      }
    
      async updateBook(id: string, book: Book): Promise<string> {
        await this.bookRepository.update(id, book);
        return 'Book updated successfully';
      }
    
      async deleteBook(id: string): Promise<string> {
        await this.bookRepository.delete(id);
        return 'Book deleted successfully';
      }
    
      async findAllBooks(): Promise<Book[]> {
        return this.bookRepository.find();
      }
}