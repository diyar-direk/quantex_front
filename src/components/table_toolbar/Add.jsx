import IconButton from "../buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Add = ({ path, ...props }) => {
  const t = useTranslations();
  return (
    <Link href={path} {...props}>
      <IconButton color="secondry-color" title={t("actions.add")}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    </Link>
  );
};

export default Add;
