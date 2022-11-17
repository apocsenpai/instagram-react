import SideBar from "./SideBar";
import Posts from "./Posts";

export default function Corpo(){
    return (
        <main class="main-content">
            <Posts/>
            <SideBar/>
        </main>
    );
}