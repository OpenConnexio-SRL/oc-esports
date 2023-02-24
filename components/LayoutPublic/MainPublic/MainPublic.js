import TopBarPublic from "@/components/LayoutPublic/TopBarPublic/TopBarPublic";
import ContentPublic from "@/components/LayoutPublic/ContentPublic/ContentPublic";


const MainPublic = ({navigation,children}) => {
    return (
        <>
            <div className="min-h-full">
                <TopBarPublic/>
                <ContentPublic content={children}/>
            </div>
        </>
    )
}

export default MainPublic;