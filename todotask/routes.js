import { Route,Routes,Navigate} from "react-router-dom";
import App from "./App";

export default function Approutes() {
    return(
        <Routes>
            <Route path="/all" element={<App filter={"all"} />} />
            <Route path="/complete" element={<App filter={"complete"}/>} /> 
            <Route path="/inprogress" element={<App filter={"uncomplete"}/>} /> 
            <Route path="*" element={<Navigate to="/all" replace />}  />
        </Routes>
    )
}