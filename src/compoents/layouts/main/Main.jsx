// @ts-nocheck
import { Headline } from "../../Headline";
import { Links } from "../../Links";

export const Main = (props) => {
    return (
      <main>
        <Headline title={props.title}/>
        <Links />
      </main>
    );
}
