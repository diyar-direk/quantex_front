import { faInbox, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/buttons/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const TableNoResults = ({ ...props }) => {
  const t = useTranslations();

  return (
    <div className="table-actions table-no-data">
      <div className="no-data-content">
        <FontAwesomeIcon icon={faInbox} />
        <span>{t("actions.no_results_yet")}</span>
        <Link {...props}>
          <Button btnStyleType="transparent">
            <FontAwesomeIcon icon={faPlus} /> {t("actions.add")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TableNoResults;
