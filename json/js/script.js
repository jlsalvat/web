`use strict`;

let books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
console.log(books);
for (book of books) {
  console.log(book.title);
}
const monpremierlivre = books[0];
function test() {
  const [firstBook, secondBook] = books;
  console.log(firstBook.keywords);
}

test();
console.log("***************");
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
for (rating of ratings) {
  const [, value] = rating;
  console.log(value);
}
console.log("***************");
const ratingStars = [63405, 1808];
let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
console.log("***************");
const { title: titre, author: auteur, ISBN: isbn } = monpremierlivre;
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);
console.log(titre, auteur, isbn);
console.log("***************");
const tag = monpremierlivre.keywords[0];
console.log(tag);
const { keywords: tags } = monpremierlivre;
console.log(tags);
console.log("***************");
const { langage, programmingLanguage = "unknown" } = books[6];
console.log(langage, programmingLanguage);
console.log("***************");
let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(books[0]);
console.log("***************");
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);
console.log("***************");
function printBookInfo1(object) {
  console.log(`${object.title} by ${object.author} , ${object.year}`);
}
function printBookInfo2({ title, author, year = "unknown" }) {
  console.log(`${title} by ${author} , ${year}`);
}
printBookInfo1({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});
printBookInfo2({ title: "Algorithms", author: "Robert Sedgewick" });
console.log("***************");
const authors = [...books[0].author, ...books[1].author];
console.log(authors);
console.log("***************");
spellWord1 = (word) => {
  for (let letter of word) {
    console.log(letter + "-");
  }
};

function spellWord(word) {
  console.log(...word);
}
spellWord1("JavaScript");
spellWord("JavaScript");
console.log("***************");
const [a, b, c] = [1, 2, 3, 4, 5];
console.log(a, b, c);
const [x, y, ...z] = [1, 2, 3, 4, 5];
console.log(x, y, z);
console.log("***************");
const [firstKeyword, ...otherkeyWords] = books[0].keywords;
console.log(firstKeyword, otherkeyWords);
console.log("***************");
({ publisher: bookPublisher = "unknown", ...restOfTheBook } = books[1]);
console.log(bookPublisher);
console.log(restOfTheBook);
console.log("***************");
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
console.log("***************");
function hasExamplesInJava(book) {
  const { programmingLanguage } = book;
  return programmingLanguage === "Java" || "no data available";
  // return programmingLanguage === "Java" ? true : false;
  //return book.programmingLanguage === "Java" || "no data available";
}
console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));
console.log("***************");
const onlineContent = (books) => {
  for (let book of books) {
    if (book.onlineContent) {
      console.log(`${book.title} provides online content`);
    }
    book.onlineContent && console.log(`${book.title} provides online content`);
  }
};
onlineContent(books);
console.log("***************");
const onlineContentEmpty = (books) => {
  for (let book of books) {
    book.onlineContent ??
      console.log(`${book.title} provides no data about its online content`);
  }
};
onlineContentEmpty(books);
console.log("***************");
allAuthors = (books) => {
  let authors = [];
  for (let book of books) {
    if (Array.isArray(book.author)) {
      authors.push(...book.author);
    } else {
      authors.push(book.author);
    }
  }
  return authors;
};
console.log(allAuthors(books));
console.log("***************");
function allAuthors1(books) {
  let authors = [];
  for (let [i, book] of books.entries()) {
    if (typeof book.author === "string")
      authors.push({
        num: i + 1,
        author: book.author,
      });
    else
      authors.push({
        num: i + 1,
        authors: book.author,
      });
    console.log(authors[i]);
  }
  return authors;
}
const mesAuteurs = allAuthors1(books);
console.log("***************");
const lesAuteurs = [];
for (const book of books) {
  if (typeof book.author === "string") {
    lesAuteurs.push(book.author);
  } else {
    for (const author of book.author) {
      lesAuteurs.push(author);
    }
  }
}
let i = 1;
for (const author of lesAuteurs) {
  console.log(i++, author);
}
console.log("***************");
books = [...books, { title: "new book", author: "new author" }];
console.log(books);
const getFirstKeyword = (book) => book.keywords?.[0] ?? "no keywords";
for (const [i, book] of books.entries()) {
  console.log(i + 1, getFirstKeyword(book));
}
console.log("***************");
goodreads = Object.keys(books[0].thirdParty.goodreads);
console.log(goodreads);
console.log("***************");
let allKeywords = [];
for (let book of books) {
  if (Array.isArray(book.keywords)) allKeywords.push(...book.keywords);
}
console.log(allKeywords);
console.log("***************");
let uniqueKeywords = new Set(allKeywords);
uniqueKeywords.add("new keyword1").add("new keyword2");
console.log(uniqueKeywords);
uniqueKeywords.delete("new keyword1");
let uniqueKeywordsArray = [...uniqueKeywords];
console.log(uniqueKeywordsArray);
uniqueKeywords.delete();
console.log("***************");
let bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
bookMap.set("page", 464);
for (let [key, value] of bookMap.entries()) {
  console.log(key, " : " + value);
}
console.log(`"${bookMap.get("title")}" by ${bookMap.get("author")}`);
console.log("TAILLE : " + bookMap.size);
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);
for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key);
}
console.log("***************");
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
let indexOfMe = quote.indexOf("me");
console.log(indexOfMe);
let lastIndexOfMe = quote.lastIndexOf("me");
console.log(lastIndexOfMe);
console.log(quote.replace("me", "you"));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));
function normalizeAuthorName(author) {
  const strs = author.trim().split(" ");
  let str = [];

  for (let i = 0; i < 2; i++) {
    if (strs[i]) {
      // Check if the element exists
      str[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1).toLowerCase();
    }
  }

  return str.join(" "); // Joins the normalized names together
}

// Example usage:
console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"));
const str = "This  is  a  test.";
const updatedStr = str.replace(/  /g, ":"); //remplace tous les espaces par : , g pour global
console.log(updatedStr);
function upperFirstWord(str) {
  const [firstWord, ...otherWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...otherWords].join(" ");
}
console.log(upperFirstWord("this is a test"));
