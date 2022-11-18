export default function Stories(){
    const userStories = [
        {username:"9gag", image:"./assets/9gag 1.png"},
        {username:"meowed", image:"./assets/meowed 1.png"},
        {username:"barked", image:"./assets/barked 1.png"},
        {username:"nathanwpyle...", image:"./assets/nathanwpylestrangeplanet 1.png"},
        {username:"wawawivac...", image:"./assets/wawawiwacomicsa 1.png"},
        {username:"respondeai", image:"./assets/respondeai 1.png"},
        {username:"filomoderna", image:"./assets/filomoderna 1.png"},
        {username:"memeriago.", image:"./assets/memeriagourmet 1.png"}
    ];
    return (
        <div class="stories-container">
            <div class="stories-content">
                
               {userStories.map((s)=> <Story image={s.image} username={s.username}/>)}
                
               
               
                
            </div>
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );

}

function Story(props){
   const {image, username} = props;
 
   return (
    <a href="#"
                ><div><img src={image} alt="" /></div>
                <p>{username}</p></a
                >
 );
}