import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (<div>
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>)
    }
}

  function RecipeAuthor(){
    const authorLink = "https://pinchofyum.com/about";
    const authorPhoto = "https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg"; 
    const authorName = "Lindsay Mostrom";


   
        return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Pic of Lindsay Mostrom" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Pinch of Yum  </a> 
               </div>
            </div>
         );


         
}





export default RecipeDescription;
