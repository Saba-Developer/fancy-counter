import { ResetIcon } from "@radix-ui/react-icons";

export default function Button({setCount})
{
    return(
        <>
        <button className="reset-btn" onClick={()=> setCount(0)}>
            <ResetIcon className="reset-btn-icon "/></button>
        </>
    )
}