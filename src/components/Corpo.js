import SideBar from "./SideBar";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Corpo(){
    return (
        <main class="main-content">
            <section class="section-posts">
                <Stories/>
                <Posts/>
            </section>
            
            <SideBar/>
        </main>
    );
}