export default function Post(props){
    return(
        <div class="single-post">
                <PostHeader userImage={props.userImage} username={props.username}/>
                <PostImage image={props.image}/>
                <div class="post-interaction">
                    <div class="interaction-user">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <PostStatus status={props.status} />
                <PostCaption username={props.username} caption={props.caption}/>
                <PostComments commentList={props.commentList}/>
                <div class="post-user-comments">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentário..." />
                    <a href="#">Publicar</a>
                </div>
            </div>
    );
}

function PostHeader(props){
    const {userImage, username} = props;
    return (
        <header class="post-header">
            <div class="user-info">
                <a href="#"><img src={userImage} alt="" />
                <p>{username}</p></a>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </header> 
    );
}

function PostImage(props){
    const {image} = props;
    return (
        <div class="post-img">
            <img src={image} alt="" />
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function PostStatus(props){
    
    const {lastUsernameLike, lastImageLike, likeCounter} = props.status;
    return (
        <div class="post-status">
            <img src={lastImageLike} alt="" />
            <p>
                Curtido por <span>{lastUsernameLike}</span> e <span>outras {likeCounter} pessoas</span>
            </p>
        </div>
    );
}

function PostCaption(props){
    const {username, caption} = props;
    return (
        <p class="post-caption">
                <span>{username}</span> {caption}
        </p>
    );
}

function PostComments(props){
    const {commentList} = props;
    return (
        <div class="post-followers-comments">
            {commentList.map((c)=><SingleComment username={c.username} comment={c.comment}/>)}
        </div> 
    );
}

function SingleComment(props){
    const {username, comment} = props;
    return (
        <div>
                <div class="user-comments">
                <span> {username}</span> {comment}
                </div>
                <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
}