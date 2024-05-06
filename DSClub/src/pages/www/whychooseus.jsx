import { dscLogo } from "../../assets/assets";
import { teachers } from "../../assets/assets";
import { students } from "../../assets/assets";
import { tourists } from "../../assets/assets";


export default function WhyChooseUsSection() {
    
    return (
        <div 
            id="why_choose_us"
            className="flex flex-col md:flex-row items-center w-full 
            justify-around md: gap-7 md:gap-0
                p-[20px] bg-pink-500">

            <div id="threedivs" className="  bg-slate-600 rounded-lg flex flex-col gap-3 align-middle w-[50%]">

                    <div className=" bg-yellow-200 rounded-lg w-[60%] p-8 mt-10">
                        {/* <div>
                            <img src={students} alt="student" className="w-[30px] md:w-[90px]"></img>
                        </div> */}
                        <h1 className=" font-semibold font-inknut text-red-700">For Students</h1>
                        <p>Learn the language and speak like an indigene. Learning and speaking Spanish has never been easier. With this workbook, it will just be a breeze.</p>
                    </div>

                    {/* <div className=" bg-yellow-200 rounded-lg w-[60%] p-8">
                        <div>
                            <img src={teachers} alt="teacher" className="w-[30px] md:w-[90px]"></img>
                        </div>
                        <h2 className=" font-semibold font-inknut text-red-700"> For Teachers</h2>
                        <p>This will simplify your teaching work. Your students will assimilate the language with speed.</p>
                    </div> */}

                    {/* <div className=" bg-yellow-200 rounded-lg w-[60%] p-8 mb-10">
                    <div>
                            <img src={tourists} alt="tourist" className="w-[30px] md:w-[90px]"></img>
                        </div>
                        <h1 className=" font-semibold font-inknut text-red-700">For Tourists</h1>
                        <p>This is every tourist's dream-come-true. You will be immersed in the rich spanish culture like you were physically in Spain!</p>
                    </div> */}
            </div>
        
            <div>
                <a 
                    href="/"
                    className="flex flex-col items-center gap-2 text-[20px] md:text-[40px] text-[#3d3d3d] font-black">
                    <img src={dscLogo} alt="DSC Logo" className=" w-[30px] md:w-[120px]" />
                    Daneddie Spanish Club
                </a>
            </div>
            
                        
        </div>
    );
}