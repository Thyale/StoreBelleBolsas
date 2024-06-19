import Apresentacao from "./Apresentacao";
import Apresentacao2 from "./Apresentacao2";
import Banner from "./Banner";
import Destaques from "./Destaques";
import Infos from "./Infos";

export default function Home(){
    return(
        <div id="Home">
            <Apresentacao/>
            <Banner/>
            <Destaques/>
            <Apresentacao2/>
            <Infos/>
        </div>
    )
}