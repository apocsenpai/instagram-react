import { useState } from "react";

export default function Post({
  username,
  userImage,
  image,
  status,
  caption,
  commentList,
}) {
  const [postSave, setPostSave] = useState("bookmark-outline");
  const [postLike, setPostLike] = useState("heart-outline");
  const [colorRed, setColorRed] = useState("");
  const [likeCounter, setLikeCounter] = useState(status.likeCounter);
  const [animationHeart, setAnimationHeart] = useState(
    "heart-animation hidden"
  );
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
    const animationTime = 500;
    setAnimationHeart(
      postLike === "heart-outline"
        ? "heart-animation"
        : "heart-animation hidden"
    );
    setTimeout(() => {
      setAnimationHeart("heart-animation hidden");
    }, animationTime);
    setPostLike("heart");
    setColorRed("color-heart");
    setLikeCounter(
      postLike === "heart-outline" ? likeCounter + 1 : likeCounter
    );
  }
  return (
    <div className="single-post" data-test="post">
      <PostHeader userImage={userImage} username={username} />
      <div className="post-img">
        <img
          data-test="post-image"
          onDoubleClick={addHeartLike}
          src={image}
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
        <img src={status.lastImageLike} alt="" />
        <p>
          Curtido por <span>{status.lastUsernameLike}</span> e{" "}
          <span>
            outras <span data-test="likes-number">{likeCounter}</span> pessoas
          </span>
        </p>
      </div>
      <PostCaption username={username} caption={caption} />
      <PostComments commentList={commentList} />
      <div className="post-user-comments">
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Adicione um comentário..." />
        <a href="#">Publicar</a>
      </div>
    </div>
  );
}

function PostHeader({ userImage, username }) {
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

function PostCaption({ username, caption }) {
  return (
    <p className="post-caption">
      <span>{username}</span> {caption}
    </p>
  );
}

function PostComments({ commentList }) {
  return (
    <div className="post-followers-comments">
      {commentList.map((c) => (
        <SingleComment key={c.id} username={c.username} comment={c.comment} />
      ))}
    </div>
  );
}

function SingleComment({ username, comment }) {
  const [likeComment, setLikeComment] = useState("heart-outline");
  const [colorRed, setColorRed] = useState("");
  function toggleHeartLike() {
    setLikeComment(likeComment === "heart-outline" ? "heart" : "heart-outline");
    setColorRed(!colorRed ? "color-heart" : "");
  }
  return (
    <div>
      <div className="user-comments">
        <span> {username}</span> {comment}
      </div>
      <ion-icon
        onClick={toggleHeartLike}
        id={colorRed}
        name={likeComment}
      ></ion-icon>
    </div>
  );
}
