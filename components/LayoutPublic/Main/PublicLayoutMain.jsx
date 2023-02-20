import PublicLayoutTopbar from "@/components/LayoutPublic/TopBar/PublicLayoutTopbar";
import PublicLayoutContent from "@/components/LayoutPublic/Content/PublicLayoutContent";


const PublicLayoutMain = ({navigation,children}) => {
    return (
        <>
            <PublicLayoutTopbar navigation={navigation}/>
            <PublicLayoutContent content={children}/>
        </>
    )
}
export default PublicLayoutMain;