export default function Suggestions(){
    const suggestionsList = [
      {id: 1, profileName: "tralala", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {id: 2, profileName: "outroUser", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {id: 3, profileName: "Diferente", userImage:"./assets/barked 1.png", followingStatus: "Segue você"},
      {id: 4, profileName: "lalala", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {id: 5, profileName: "vrummm", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
    ];
    return (
        <div className="user-suggestions">
          <div>
            <p>Sugestões para você</p>
            <p><a href="#">Ver tudo</a></p>
          </div>
          {suggestionsList.map((s)=><SingleSuggestion key={s.id} profileName={s.profileName} userImage={s.userImage} followingStatus={s.followingStatus} />)}
        </div>
    );
}

function SingleSuggestion(props){
  const {profileName, userImage, followingStatus} = props;
  return (
    <div>
      <div>
        <a href="#"
          ><img src={userImage} alt=""
        /></a>
        <div>
          <a href="#">
            <p className="user-profile">{profileName}</p>
            <p className="following-status">{followingStatus}</p>
          </a>
        </div>
      </div>
      <a href="#" className="following-btn"><p>Seguir</p></a>
    </div>
  );
}