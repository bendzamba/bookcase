import { Base } from "./base";
import {
  BookInterface,
  CreateOrUpdateBookshelfInterface,
} from "../interfaces/book_and_bookshelf";
import {
  BookshelfInterface,
  BookshelfWithBooksInterface,
} from "../interfaces/book_and_bookshelf";

export const GetBookshelves = async (): Promise<
  BookshelfInterface[] | boolean
> => {
  return await Base("/bookshelves/");
};

export const CreateBookshelf = async (
  data: CreateOrUpdateBookshelfInterface
): Promise<boolean> => {
  return await Base("/bookshelves/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const GetBookshelf = async (
  id: number
): Promise<BookshelfWithBooksInterface | boolean> => {
  return await Base(`/bookshelves/${id}`);
};

export const UpdateBookshelf = async (
  id: number,
  data: Partial<CreateOrUpdateBookshelfInterface>
): Promise<boolean> => {
  return await Base(`/bookshelves/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const DeleteBookshelf = async (id: number): Promise<boolean> => {
  return await Base(`/bookshelves/${id}`, {
    method: "DELETE",
  });
};

export const GetBooksNotOnBookshelf = async (
  id: number
): Promise<BookInterface[] | boolean> => {
  return await Base(`/bookshelves/${id}/books/exclude/`);
};

export const AddBooksToBookshelf = async (
  bookshelfId: number,
  bookIds: number[]
): Promise<boolean> => {
  return await Base(`/bookshelves/${bookshelfId}/books/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ book_ids: bookIds }),
  });
};

export const DeleteBookFromBookshelf = async (
  bookshelfId: number,
  bookId: number
): Promise<boolean> => {
  return await Base(`/bookshelves/${bookshelfId}/books/${bookId}`, {
    method: "DELETE",
  });
};
