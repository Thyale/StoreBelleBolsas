import Apresentacao from "./Apresentacao";
import Banner from "./Banner";
import Destaques from "./Destaques";

export default function Home(){
    return(
        <div id="Home">
            <Apresentacao/>
            <Banner/>
            <Destaques/>
        </div>
    )
}