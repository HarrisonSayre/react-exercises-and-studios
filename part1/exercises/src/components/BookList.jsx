export default function BookList() {
   let pageTitle = "Recently Read";
   let book1 = "https://m.media-amazon.com/images/I/71JTyS3MNaL._SL1500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91Umg4YKVML._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://books.disney.com/content/uploads/2021/10/Star-Wars-Padawan-YA-JKT_02.08-FRONT.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Bacta War" />
         <img src={book2} alt="Crimson Climb" />
         <img src={book3} alt="Padawan" />
      </div>      
   );
}