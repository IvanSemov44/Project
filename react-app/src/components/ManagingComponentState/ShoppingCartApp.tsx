import { useState } from "react";
import Cart from "./Cart";
import ExtendableText from "./ExtendableText";
import NavBar from "./NavBar";

const ShoppingCartApp = () => {
    const text = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas, iste rem corrupti fuga eos beatae alias mollitia a voluptas facilis repellat quis deleniti, quo dolore vitae ratione dicta velit suscipit. Qui voluptates nisi, blanditiis quod tempore accusamus odio tempora asperiores repudiandae vel magnam sint ab modi natus commodi porro, assumenda magni ducimus a vitae? Blanditiis veniam ab a quaerat laboriosam cumque consectetur maxime perferendis voluptatum. Cupiditate asperiores, nihil velit quam nulla, commodi harum consequuntur pariatur assumenda facere suscipit. Eius in minima eligendi dolore officiis nisi odit obcaecati beatae impedit sint at qui dolorem, quam possimus tempora reiciendis exercitationem laborum asperiores consequatur ex, cumque unde amet! Et tempore maiores ducimus vel provident molestiae minima quaerat id natus eum excepturi, ut veniam, ullam numquam magnam, iure sint. Adipisci ab doloremque eligendi molestias non vero nihil sit quaerat nostrum doloribus! Iusto tenetur earum eaque saepe voluptas quia, minus perferendis velit ab provident. Dolores ad voluptatum nihil corrupti reiciendis repudiandae, soluta totam magnam esse labore consequuntur adipisci delectus, placeat molestias. Ipsum veritatis recusandae omnis ad expedita perspiciatis accusantium necessitatibus? Laborum fugit voluptatum, placeat corporis illum totam quos in recusandae tempora nam quisquam magni saepe officiis asperiores, consectetur autem eveniet nisi cupiditate quo laboriosam perspiciatis quae. Minima eligendi, fuga cum ipsam molestiae, rem quos doloremque illo dolores neque quod dolore, voluptatum nulla? Voluptatum a exercitationem numquam atque unde quas harum aperiam, aliquid aut odit enim animi reiciendis voluptas ab tenetur tempore autem dolorem, quidem iste. Quod autem nihil cum iusto repellendus exercitationem ea distinctio ad, temporibus eligendi eius ex."
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
    return (
        <div>
            <NavBar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
            <ExtendableText showLength={10} >
                {text}
            </ExtendableText>
        </div>
    )
}

export default ShoppingCartApp