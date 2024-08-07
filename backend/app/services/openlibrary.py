import httpx
from app.models.book import Book
from typing import Any, Dict

class OpenLibrary:

    def __init__(self):
        self.search_url = "https://openlibrary.org/search.json?title={title}"

    async def search(self, book: Book) -> Dict[str, Any]:
        async with httpx.AsyncClient() as client:
            response = await client.get(self.search_url.format(title=book.title))
            response.raise_for_status()
            return response.json()
        
    def find_olid(self, olid_response: Dict[str, Any]) -> str | None:

        olid = None

        if olid_response['numFound'] > 0:
            for doc in olid_response['docs']:
                if 'cover_edition_key' in doc:
                    # Select the first cover edition key found
                    olid = doc['cover_edition_key']
                    break

        return olid