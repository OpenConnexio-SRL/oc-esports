import '@/styles/globals.css'
import {useRouter} from "next/router";
import PublicLayoutMain from "@/components/LayoutPublic/Main/PublicLayoutMain";


const PublicPages = [
    "/",
    "/teams"
]


export default function App({ Component, pageProps }) {
  const routing = useRouter();
  if(PublicPages.some(page => routing.asPath === page)){
    return (
      <PublicLayoutMain>
        <Component {...pageProps}/>
      </PublicLayoutMain>
    )
  }else{
    return <Component {...pageProps} />
  }

}
