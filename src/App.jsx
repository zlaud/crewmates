import "./styles/App.css";

import { useRoutes } from "react-router-dom";
import CreateMate from "./pages/CreateMate";
import ReadMate from "./pages/ReadMate";
import EditMate from "./pages/EditMate";
import ViewMate from "./pages/ViewMate";
import { Link } from "react-router-dom";

const App = () => {
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  // const posts = [
  //     {'id':'1',
  //     'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
  //     'author':'Harvey Milian',
  //     'description': descr},
  //     {'id':'2',
  //     'title': 'Love Lock in Paris 🔒',
  //     'author':'Beauford Delaney',
  //     'description':descr},
  //     {'id':'3',
  //     'title': 'Wear Pink on Fridays 🎀',
  //     'author':'Onika Tonya',
  //     'description':descr},
  //     {'id':'4',
  //     'title': 'Adopt a Dog 🐶',
  //     'author':'Denise Michelle',
  //     'description':descr},
  // ]

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadMate />,
    },
    {
      path: "/edit/:id",
      element: <EditMate />,
    },
    {
      path: "/new",
      element: <CreateMate />,
    },
    {
      path: "/:id",
      element: <ViewMate />,
    },
  ]);

  return (
    <div className="App">
      <div className="nav">
        <h1 className="text-3xl font-bold m-3 p-3">Team Management</h1>
        <Link to="/">
          <button className="headerBtn"> Current Members </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Add a member </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
