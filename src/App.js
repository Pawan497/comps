import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import CounterUsingReducerPage from "./pages/CounterUsingReducerPage";

function App() {
    
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={10} />
                </Route>
                <Route path="/counter-using-reducer">
                    <CounterUsingReducerPage initialCount={10} />
                </Route>
            </div>    
        </div>
        );
}

export default App;