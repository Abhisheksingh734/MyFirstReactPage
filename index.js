// ReactDOM.render(<h1>Hii guys</h1>,document.getElementById("root"))
// function MainContent(){
//     return (
//         <h1>This is inside a function</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//     <MainContent/>
//     </div>,
//     document.getElementById("root")
// )

// --------------------This is imperative way of doing things----------------------------------------


// const h1=document.createElement("h1");
// h1.textContent="Hii this is imperative way ";
// h1.className="header";

// document.getElementById("root").append(h1)


// ----------------------------Now this is cool (Declarative)---------------------------------------------
// ReactDOM.render(<h1>Hi this is Declarative way</h1>,document.getElementById("root"))





/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//     <nav>
//     <h1>FashionVerse</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar,document.getElementById("root"))

// ---------------------------OR------------------------------------------

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
                        //  |
                        //  |  you can also use this method
                        //  |
                        //  |-------------> 
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(navbar)





/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */


// const page = (
//     <div>
//     <h1>My Awesome Website</h1>
//     <h3>Reasons i love React</h3>
//     <nav>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </nav>
//     </div>
// )

// // document.getElementById("root").append(JSON.stringify(page))
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(page)


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */


// function MyReasons(){
//     return(
//     <div>
//         <h1>Fun facts about React</h1>
//         <ol>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ol>
//     </div>

//     )
// }

// ReactDOM.render(<MyReasons />,document.getElementById("root"))

 





/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */


// function Header(){
//     return(
//         <header>
//             <nav>
//             <img src="react-logo.png" />
//             </nav>
//         </header>
//     )
// }           
    

// function Mypage(){
//     return(
//         <div>
//             <Header/>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's popular library, so I'll be using to fit in cool kids category</li>
//                 <li>I'm more likely to get a job as a developer of i know React</li>
//                 <li>Reason 3</li>
//                 <li>Reason 4</li>
//             </ol>
//             <footer><small>"© 2023 Singh's development. All rights reserved."</small></footer>
//         </div>
//     )
// }



// ReactDOM.render(<Mypage/>,document.getElementById("root"))












/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/


function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="Maincontent">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the fdg  cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
                <li>It's a popular fdg  library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get thr tdk  a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))