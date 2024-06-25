import { useRecoilValue } from "recoil"
import { sessionAtom } from "../atoms/sessionData";

export const useBalance = () => {
    const value = useRecoilValue(sessionAtom);
    return value;
}