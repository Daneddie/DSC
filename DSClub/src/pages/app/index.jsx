import Button from "../../components/button";


export default function AppPage() {
    
    return (
        <div className="text-[40px]">
            Daneddie Spanish Club (A workbook for spanish student)
            
            <Button
                message={'Click Me'} 
                background={'bg-[#ff0000]'}
                color={'text-[#00ff00]'}/>
            <Button message={'Cancel'} />
        </div>
    );
}