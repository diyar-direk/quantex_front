import {
  faArrowRotateRight,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../buttons/Button";
import { extarctErrorMessage } from "@/utils/extarctErrorMessage";

const TabelError = ({ error, onRefetch }) => {
  return (
    <div className="table-error">
      <div className="table-error-content">
        <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
        <span>{extarctErrorMessage(error)}</span>
      </div>

      <Button onClick={onRefetch}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
        refetch data
      </Button>
    </div>
  );
};

export default TabelError;
