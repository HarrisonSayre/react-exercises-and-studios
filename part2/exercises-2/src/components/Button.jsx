import './styles.css';

function Button() {

   function onLearnMore (){
        alert("Water's Fine!");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;