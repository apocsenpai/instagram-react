export default function NavBar(){
    return (
    <header class="header-content">
        <section class="logo">
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <section class="vertical-line"></section>
            <a href="#"><img src="./assets/logo.png" alt="instagram" /></a>
        </section>
        <a href="#"><img src="./assets/logo.png" alt="instagram" /></a>
        <section class="searchInput">
            <form action="">
                <input type="search" name="" id="" placeholder="Pesquisar" />
            </form>
        </section>
        <section class="button-group">
            <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
            <a href="#"><ion-icon name="compass-outline"></ion-icon></a>
            <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
            <a href="#"><ion-icon name="person-outline"></ion-icon></a>
        </section>
    </header>
  );
}    