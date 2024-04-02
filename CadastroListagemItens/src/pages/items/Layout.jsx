import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
    const { pathname } = useLocation()
    
 
    return (
        <main>
            <h1>Listagem de itens</h1>
            <div className="tabs">
                <Link 
                    to="/items" 
                    className={`tab ${pathname === "/items" ? "active" : ""}`}
                >
                    Todos os itens
                </Link>
                <Link 
                    to="/items/new" 
                    className={`tab ${pathname === "/items/new" ? "active" : ""}`}
                >
                   Cadastrar Item
                </Link>
            </div>
            <Outlet />
        </main>
    )
}