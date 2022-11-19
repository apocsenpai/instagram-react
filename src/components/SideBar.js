import Suggestions from "./Sugestoes";
import User from "./User";

export default function SideBar(){
    return (
        <section className="section-sideBar">
            <User/>
            <Suggestions/>
            <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </section>
    );
}