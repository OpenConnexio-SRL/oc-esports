import SidebarPrivate from "@/components/LayoutPrivate/SidebarPrivate/SidebarPrivate";
import ContentPrivate from "@/components/LayoutPrivate/ContentPrivate/ContentPrivate";


const MainPrivate = ({navigation,children}) => {
    return(
        <div className="min-h-full">
            <SidebarPrivate/>
            <ContentPrivate content={children}/>
        </div>
    )
}

export default MainPrivate;