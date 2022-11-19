import { useState } from "react";

export default function User() {
  const userData = {
    profileName: "catanacomics",
    username: "Catana",
    userImage: "./assets/catanacomics 1.svg",
  };
  return (
    <div className="user-info">
      <UserInfo
        profileName={userData.profileName}
        username={userData.username}
        userImage={userData.userImage}
      />
    </div>
  );
}

function UserInfo({ profileName, username, userImage }) {
  const [name, setName] = useState(username);
  const [image, setImage] = useState(userImage);

  function changeImage() {
    setImage(prompt("Coloque o link da imagem aí mané: "));
  }

  function changeName() {
    setName(prompt("Digita teu nome aí mané: "));
  }

  return (
    <div>
      <div className="img-wrap">
        <img onClick={changeImage} src={image} alt="" />
      </div>
      <div>
        <p>{profileName}</p>
        <p>
          {name} <ion-icon onClick={changeName} name="pencil"></ion-icon>
        </p>
      </div>
    </div>
  );
}
