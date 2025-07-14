import GreenCheckmark from "./GreenCheckmark";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function LessonControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <HiOutlineDotsVertical />
        </div>
    );
}