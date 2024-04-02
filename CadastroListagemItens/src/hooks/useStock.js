import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export default function useStock() {
    const { stock } = useContext(StockContext)
    return stock
    
}

