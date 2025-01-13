import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";

function HomePage() {
    return (
        <>
             <header>
                 <NavRoot />
             </header>
             <main>
                 <HomeMainRoot />
             </main>
             <footer />
        </>
    )
}

export default HomePage;