export default function HobbyLinks  () {

    let hobbyLinks = [
        "https://www.dndbeyond.com/",
        "https://savaged.us/" 
    ];

    return(
        <div>
            <h3>Hobby Links</h3>
            <a href = {hobbyLinks[0]}>D&D Beyond</a>
            <br></br>
            <a href = {hobbyLinks[1]}>Savaged.us</a>
        </div>
    );
}