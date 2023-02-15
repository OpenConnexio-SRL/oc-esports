import PublicLayoutTopbar from "@/components/LayoutPublic/TopBar/PublicLayoutTopbar";
import PublicLayoutContent from "@/components/LayoutPublic/Content/PublicLayoutContent";


const PublicLayoutMain = ({children}) => {
    return (
        <>
            <PublicLayoutTopbar />
            <PublicLayoutContent content={children}/>
        </>
    )
}
export default PublicLayoutMain;