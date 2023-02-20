import '@/styles/globals.css'
import {useRouter} from "next/router";
import PublicLayoutMain from "@/components/LayoutPublic/Main/PublicLayoutMain";


const PublicNavigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Teams', href: '/teams' },
]


export default function App({ Component, pageProps }) {
  const routing = useRouter();
  if(PublicNavigation.some(page => routing.asPath === page.href)){
    return (
      <PublicLayoutMain navigation={PublicNavigation}>
        <Component {...pageProps}/>
      </PublicLayoutMain>
    )
  }else{
    return <Component {...pageProps} />
  }

}
