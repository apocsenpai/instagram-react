export default function User(){
  const userData = {
    profileName: "catanacomics",
    username: "Catana",
    userImage: "./assets/catanacomics 1.svg"
  }
    return (
        <div class="user-info">
          <UserInfo profileName={userData.profileName} username={userData.username} userImage={userData.userImage}/>
        </div>
    );
}

function UserInfo(props){
  const {profileName, username, userImage} = props;
  return (
    <div>
      <img src={userImage} alt="" />
      <div>
        <p>{profileName}</p>
        <p>{username}</p>
      </div>
    </div>
  );
}