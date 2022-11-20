import { useState } from "react";

export default function Post(props) {
  const [postSave, setPostSave] = useState("bookmark-outline");
  const [postLike, setPostLike] = useState("heart-outline");
  const [colorRed, setColorRed] = useState("");
  let [likeCounter, setLikeCounter] = useState(props.status.likeCounter);
  let [animationHeart, setAnimationHeart] = useState("heart-animation hidden");

  function togglePostSave() {
    setPostSave(
      postSave === "bookmark-outline" ? "bookmark" : "bookmark-outline"
    );
  }

  function toggleHeartLike() {
    setPostLike(postLike === "heart-outline" ? "heart" : "heart-outline");
    setColorRed(!colorRed ? "color-heart" : "");
    setLikeCounter(
      postLike === "heart-outline" ? likeCounter + 1 : likeCounter - 1
    );
  }

  function addHeartLike() {
    setAnimationHeart(
      postLike === "heart-outline"
        ? "heart-animation"
        : "heart-animation hidden"
    );
    setTimeout(() => {
      setAnimationHeart("heart-animation hidden");
    }, 650);
    setPostLike("heart");
    setColorRed("color-heart");
    setLikeCounter(
      postLike === "heart-outline" ? likeCounter + 1 : likeCounter
    );
  }

  return (
    <div className="single-post" data-test="post">
      <PostHeader userImage={props.userImage} username={props.username} />
      <div className="post-img">
        <img
          data-test="post-image"
          onDoubleClick={addHeartLike}
          src={props.image}
          alt=""
        />
        <ion-icon name="chevron-forward-circle"></ion-icon>
        <div className={animationHeart}>
          <div className="heart"></div>
        </div>
      </div>
      <div className="post-interaction">
        <div className="interaction-user">
          <ion-icon
            data-test="like-post"
            onClick={toggleHeartLike}
            id={colorRed}
            name={postLike}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon
          data-test="save-post"
          onClick={togglePostSave}
          className="btn-savePost"
          name={postSave}
        ></ion-icon>
      </div>
      <div className="post-status">
        <img src={props.status.lastImageLike} alt="" />
        <p>
          Curtido por <span>{props.status.lastUsernameLike}</span> e{" "}
          <span>
            outras <span data-test="likes-number">{likeCounter}</span> pessoas
          </span>
        </p>
      </div>
      <PostCaption username={props.username} caption={props.caption} />
      <PostComments commentList={props.commentList} />
      <div className="post-user-comments">
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Adicione um comentário..." />
        <a href="#">Publicar</a>
      </div>
    </div>
  );
}

function PostHeader(props) {
  const { userImage, username } = props;
  return (
    <header className="post-header">
      <div className="user-info">
        <a href="#">
          <img src={userImage} alt="" />
          <p>{username}</p>
        </a>
      </div>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </header>
  );
}

function PostCaption(props) {
  const { username, caption } = props;
  return (
    <p className="post-caption">
      <span>{username}</span> {caption}
    </p>
  );
}

function PostComments(props) {
  const { commentList } = props;
  return (
    <div className="post-followers-comments">
      {commentList.map((c) => (
        <SingleComment key={c.id} username={c.username} comment={c.comment} />
      ))}
    </div>
  );
}

function SingleComment(props) {
  const { username, comment } = props;
  return (
    <div>
      <div className="user-comments">
        <span> {username}</span> {comment}
      </div>
      <ion-icon name="heart-outline"></ion-icon>
    </div>
  );
}
