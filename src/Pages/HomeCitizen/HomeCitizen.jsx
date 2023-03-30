import SectionOne from '../../Components/SectionOne/SectionOne'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import SectionThree from '../../Components/SectionThree/SectionThree'


export default function HomeCitizen(){
    return <><h1>Este es el padre del checkout</h1>
    <p>Home ciudadano, aca seria el home principal. En donde se dividiran los distintos componentes dependiendo que se haga</p>
    <section><SectionOne/></section>
    <p>Si siguiente es true</p>
    <section><SectionTwo/></section>
    <p>Si siguiente es true </p>
    <section><SectionThree/></section>
    <p>vemos despues el ultimo paso si es un componente o lo hacemos aca, capaz es un boton no mas</p>
    <p>Se entiende? xd</p>
    </>
}