import { useRouter } from "next/router";
import MainContainer from "../app/components/MainContainer";

const Main = () => {
    const {query} = useRouter()
    console.log(query.id);
    
    return (
        <MainContainer>
            <div>123</div>
        </MainContainer>
    );
}

export default Main;