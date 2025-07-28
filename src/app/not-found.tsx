import Footer from "@/components/footer";
import Header from "@/components/navbar";

const Page = () => {
    return (  
        <>
            <Header/>
            <div className="mx-auto max-w-7xl space-y-6 px-3 py-6 text-center">
                <div className="grow">
<h1 className="text-6xl font-bold">Page Not Found</h1>
                <p>The Page you are looking for might have been removed, had its name changed or is not available.</p>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}
 
export default Page;