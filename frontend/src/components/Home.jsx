import React from "react";
import noteBook from "../components/img/NoteBook.jpg"

// import Form from "../components/Form"


import Footer from "./Footer";

export default function Home(props) {
    return <body>
    <header> 
        <h1>Instan Note</h1>
        
        </header>
    <section>
        <article>
        
        <p> This is designed to help you capture and organize your thoughts, ideas, and important information effortlessly. Whether you're a student, professional, or simply someone who wants to stay organized, Instan Note has got you covered.</p>
        </article>
        <article>
        
        <p>With Instan Note, note-taking has never been easier or more convenient. Say goodbye to the clutter of physical notebooks and embrace the future of digital note-taking. Download Instan Note today and start organizing your thoughts with ease.</p>
        </article>
        <article>
            <div>
                <button type="submit">Login</button>
                <button type="submit">Register</button>
                
                 <p>
                    <img className="note-book" src={noteBook} alt="note"/>
                </p>
            </div>
        </article>
     </section>
     
     <footer>
                <Footer/>
            </footer>
        
    </body>
}