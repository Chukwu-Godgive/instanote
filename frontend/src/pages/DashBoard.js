import Footer from "../components/Footer"

export default function DashBoard (){
    return <div> <section class="container">
    <aside>
        <button id="sidebar-toggle">My Account</button>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Notes</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    </aside>
    </section>
    <footer>
        <Footer/>
    </footer> </div>
}