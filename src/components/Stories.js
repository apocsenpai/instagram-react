export default function Stories(){
    const userStories = [
        {id: 1, username:"9gag", image:"./assets/9gag 1.png"},
        {id: 2, username:"meowed", image:"./assets/meowed 1.png"},
        {id: 3, username:"barked", image:"./assets/barked 1.png"},
        {id: 4, username:"nathanwpyle...", image:"./assets/nathanwpylestrangeplanet 1.png"},
        {id: 5, username:"wawawivac...", image:"./assets/wawawiwacomicsa 1.png"},
        {id: 6, username:"respondeai", image:"./assets/respondeai 1.png"},
        {id: 7, username:"filomoderna", image:"./assets/filomoderna 1.png"},
        {id: 8, username:"memeriago.", image:"./assets/memeriagourmet 1.png"}
    ];
    return (
        <div className="stories-container">
            <div className="stories-content">
                
               {userStories.map((s)=> <Story key={s.id} image={s.image} username={s.username}/>)}
                
               
               
                
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