import { faInbox, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/buttons/Button";
import { Link } from "@/i18n/navigation";

const TableNoResults = ({ ...props }) => {
  return (
    <div className="table-actions table-no-data">
      <div className="no-data-content">
        <FontAwesomeIcon icon={faInbox} />
        <span>no results</span>
        <Link {...props}>
          <Button btnStyleType="transparent">
            <FontAwesomeIcon icon={faPlus} /> add
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TableNoResults;
