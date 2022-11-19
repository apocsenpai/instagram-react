import Post from "./Post";



export default function Posts(){
    const postList = [
        {
            id: 1,
            username:"barked",
            userImage:"./assets/barked 1.png",
            image:"./assets/dog 1.png",
            status:{
                lastUsernameLike:"adorable_animals",
                lastImageLike: "./assets/adorableanimals 2.png",
                likeCounter: 110
            },
            caption: "Ipsum dolor sit, amet consectetur adipisicingelit. Quis rerum dolores eligendi adipisci hic. Sequi iusto exercitationem corporis, nam saepe, unde molestias cum recusandaeobcaecati dolore deleniti nesciunt mollitia voluptatibus.", 
            commentList:[
                {
                    id: 1,
                    username:"vaquinha",
                    comment:"Ipsum dolor sit amet.",
                },
                {
                    id: 2,
                    username:"josevaldo",
                    comment:"Ipsum dolor sit amet.",
                }
            ]
        },
        {
            id: 2,
            username:"tralala",
            userImage:"https://cf.shopee.com.br/file/8eaa5ca5243ae5182f4618d0e327c315",
            image:"https://img.freepik.com/fotos-gratis/delicioso-copo-de-suco-de-laranja_144627-16581.jpg?w=2000",
            status:{
                lastUsernameLike:"adorable_animals",
                lastImageLike: "./assets/adorableanimals 2.png",
                likeCounter: 100
            },
            caption: "diferenciado muito diferente do outroeligendi adipisci hic. Sequi iusto exercitationem corporis, nam saepe, unde molestias cum recusandaeobcaecati dolore deleniti nesciunt mollitia voluptatibus.", 
            commentList:[
                {
                    id: 1,
                    username:"tralala",
                    comment:"asdlapsdl",
                },
                {
                    id: 2,
                    username:"josevaldo",
                    comment:"Ipsum dolor sit amet.",
                }
            ]
        },
        {
            id: 3,
            username:"ArcowIris",
            userImage:"https://images.vexels.com/media/users/3/167262/isolated/lists/25dfa062af281a6f07b49a64c3e01213-faixa-circular-bissexual-plana.png",
            image:"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2017/08/29/arco-iris-istock.jpg",
            status:{
                lastUsernameLike:"adorable_animals",
                lastImageLike: "./assets/adorableanima",
                lastImageLike: "./assets/adorableanimals 2.png",
                likeCounter: 1270
            },
            caption: " esse aqui também é diferentão adipisicingelit. Quis rerum dolores eligendi adipisci hic. Sequi iusto exercitationem corporis, nam saepe, unde molestias cum recusandaeobcaecati dolore deleniti nesciunt mollitia voluptatibus.", 
            commentList:[
                {
                    id: 1,
                    username:"Lista",
                    comment:"de objetos",
                },
                {
                    id: 2,
                    username:"de objetos",
                    comment:"de objetos",
                },
                {
                    id: 3,
                    username:"Cada comentário",
                    comment:"é um objeto",
                }
            ]
        },
        
    ];
    return (
        <div className="feed-content">
        
        {postList.map((p)=> <Post key={p.id} username={p.username} userImage={p.userImage} image={p.image} status={p.status} caption={p.caption} commentList={p.commentList}/>)}
            
        </div>
    );
}

