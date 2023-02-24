import '@/styles/globals.css'
import {useRouter} from "next/router";
import MainPublic from "@/components/LayoutPublic/MainPublic/MainPublic";
import MainPrivate from "@/components/LayoutPrivate/MainPrivate/MainPrivate";


const PublicNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Teams', href: '/teams' },
]

const PrivateNavigation = [
    { name: 'Dashboard',href:'/private'},
    { name: 'Profile', href: '/private/profile'}
]


export default function App({ Component, pageProps }) {
  const routing = useRouter();
  if(PublicNavigation.some(page => routing.asPath === page.href)){
    return (
      <MainPublic navigation={PublicNavigation}>
        <Component {...pageProps}/>
      </MainPublic>
    )
  }else if(PrivateNavigation.some(page => routing.asPath === page.href)){
      return (
          <MainPrivate>
              <Component {...pageProps}/>
          </MainPrivate>
      )
  }else{
    return <Component {...pageProps} />
  }

}
