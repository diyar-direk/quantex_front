import Link from "next/link";
import IconButton from "../buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Add = ({ path, ...props }) => {
  return (
    <Link href={path} {...props}>
      <IconButton color="secondry-color" title="Add">
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    </Link>
  );
};

export default Add;
