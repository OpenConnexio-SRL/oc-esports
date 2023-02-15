


const PublicLayoutContent = (props) => {
    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-4 sm:px-0">
                    {props.content}
                </div>
                {/* /End replace */}
            </div>
        </main>
    )
}

export default PublicLayoutContent;