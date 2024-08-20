import styles from './Description.module.css';

export default function RecipePhoto() {
    return(
        <img src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Chocolate-Chip-Cookies-21.jpg" alt="recipe photo" className = {styles.imageUpdates} />
    );
}