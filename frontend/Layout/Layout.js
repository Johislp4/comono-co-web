import * as React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import CallToAction from '../components/CallToAction'
import { sanityClient} from "../lib/sanity";

const Layout = ({children}) => {

    const [dataFooter, setDataFooter] = React.useState(null);

    const queryFooter = `*[_type == 'infoCompany']{
        _id,
        address,
        city,
        country,
        email,
        name,
        phone,
        socialmedia{
            twitter,
            instagram,
            facebook
        } 
      }`

    React.useEffect(async() => {
        const dataFetch = await sanityClient.fetch(queryFooter)
        setDataFooter(dataFetch)
    }, [])




    return (
        <div className="base-layout">
        <NavBar />
        <CallToAction />
            {children}
        <Footer data={dataFooter}/>
        </div>
    )
}

export default Layout



