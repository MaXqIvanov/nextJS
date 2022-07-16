import Header from "./Header"

const MainContainer = ({children}:any) => {
    return (
        <>
            <Header />
            <>
                {children}
            </>
        </>
    );
}

export default MainContainer;