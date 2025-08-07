import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./entities/book.entity";



//agar mai saara code ismey rakhu toh mera code kaafi bulky ho jayega->debug karna bahut muskil ho jayega
//so for that we use sevice to seprate the functionality
@Controller("book")
export class BookController{
    //abb hamey harr jagah yei object banana padd raha hai 
    //if we want ki vo service ka object banale and vo harr jagah avb ho toh best option---> @Injectable() in service
    //coz dikkat yei hai ki object space leta hai
    //public bookService : BookService = new BookService();


    constructor(private bookService: BookService){}

    //add book
    @Post("/add")
    async addBook(@Body() book: Book): Promise<string> {
      return this.bookService.addBook(book);
    }
  
    @Delete("/delete/:id")
    async deleteBook(@Param("id") id: string): Promise<string> {
      return this.bookService.deleteBook(id);
    }
  
    @Put("/update/:id")
    async updateBook(
      @Param("id") id: string,
      @Body() book: Book,
    ): Promise<string> {
      return this.bookService.updateBook(id, book);
    }
  
    @Get("/findAll")
    async findAllBook(): Promise<Book[]> {
      return this.bookService.findAllBooks();
    }
}