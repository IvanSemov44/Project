// import { BsCalendarFill } from "react-icons/bs";

import { useState } from "react";
import FormWithState from "./components/Forms/FormWithState";

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <FormWithState />
    // <FormWithRef />
    // <ShoppingCartApp />
    // <Button />
    // <Like onClick={() => console.log("clicked")} />
    // <Button
    //   color="secondary"
    //   onClick={() => setShowAlert(true)}
    // >
    //   Click Me
    // </Button>

    // <BsCalendarFill color="red" size="40" />
    // <ListGroup
    //   heading='New York'
    //   items={items}
    //   onSelectItem={handleSelectItem} />

    // <div>
    //   <Button
    //     color="secondary"
    //     onClick={() => setShowAlert(true)}
    //   >
    //     Click me
    //   </Button>

    //   {showAlert &&
    //     <Alert onClose={() => setShowAlert(false)}>
    //       My Alert
    //     </Alert>
    //   }
    // </div >
  );
};

export default App
