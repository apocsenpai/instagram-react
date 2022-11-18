export default function Suggestions(){
    const suggestionsList = [
      {profileName: "tralala", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {profileName: "outroUser", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {profileName: "Diferente", userImage:"./assets/barked 1.png", followingStatus: "Segue você"},
      {profileName: "lalala", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
      {profileName: "vrummm", userImage:"./assets/chibirdart 1.svg", followingStatus: "Segue você"},
    ];
    return (
        <div class="user-suggestions">
          <div>
            <p>Sugestões para você</p>
            <p><a href="#">Ver tudo</a></p>
          </div>
          {suggestionsList.map((s)=><SingleSuggestion profileName={s.profileName} userImage={s.userImage} followingStatus={s.followingStatus} />)}
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
            <p class="user-profile">{profileName}</p>
            <p class="following-status">{followingStatus}</p>
          </a>
        </div>
      </div>
      <a href="#" class="following-btn"><p>Seguir</p></a>
    </div>
  );
}