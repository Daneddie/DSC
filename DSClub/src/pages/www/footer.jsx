import { dscLogo } from "../../assets/assets";


export default function FooterComponent() {
    
    return (
        <div 
            id="footer-content"
            className="flex flex-col md:flex-row items-start w-full 
            justify-around gap-7 md:gap-0
                p-[20px] bg-yellow-200">
        
            <div>
                <a 
                    href="/"
                    className="flex flex-row items-center gap-2 text-[20px] md:text-[20px] text-[#3d3d3d] font-black">
                    <img src={dscLogo} alt="DSC Logo" className=" w-[30px] md:w-[30px]" />
                    Daneddie Spanish Club
                </a>
            </div>
            
            <div>
                <h2 className=" font-bold">Support</h2>
                <div className="flex flex-col gap-3">
                    <a href="/faq">F.A.Q</a>
                    <a href="tel:2348166244186">Call us</a>
                    <a href="mailto:daneddiesc@gmail.com">Mail us</a>
                    <a href="/contact">Contact DSC</a>
                </div>
            </div>
            
            <div>
                <h2 className=" font-bold">Company</h2>
                <div className="flex flex-col gap-3">
                    <a href="#">About Us</a>
                    <a href="#">Schedule A Visit</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                </div>
            </div>
            
            <div>
                <h2 className=" font-bold">Terms and policies</h2>
                <div className="flex flex-col gap-3">
                    <a href="#">Policies</a>
                    <a href="#">Terms of use</a>
                    <a href="#">Code of conduct</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
            
        </div>
    );
}