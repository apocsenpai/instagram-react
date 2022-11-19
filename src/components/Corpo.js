import SideBar from "./SideBar";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Corpo(){
    return (
        <main className="main-content">
            <section className="section-posts">
                <Stories/>
                <Posts/>
            </section>
            
            <SideBar/>
        </main>
    );
}