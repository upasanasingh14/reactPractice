function printHello() {
    console.log("Hello!");
}

function printBye() {
    console.log("Bye!");
}

function handleDoubleClick(){
    console.log("double clicked!");
}


export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Placeat, vitae. Ipsa aperiam laudantium hic perspiciatis animi enim excepturi, deserunt fugit voluptate corporis beatae. 
                Dolorem minima architecto omnis repellendus. 
                Optio, nisi.</p>
            <button onDoubleClick={handleDoubleClick}> Double click!</button>
        </div>
    )
}