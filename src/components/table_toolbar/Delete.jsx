import { useCallback, useState } from "react";
import ConfirmPopUp from "../popup/ConfirmPopUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import IconButton from "./../buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIClient from "@/utils/ApiClient";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { endPoints } from "@/constants/endPoints";
import { useTranslations } from "next-intl";

const Delete = ({
  setSelectedItems,
  queryKey,
  selectedItems,
  setPage,
  data,
  endPoint,
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleDeletePopUpClose = useCallback(() => {
    setSelectedItems(new Set());
    setIsPopUpOpen(false);
  }, [setSelectedItems]);

  const queryclient = useQueryClient();
  const apiClient = new APIClient(`${endPoint}${endPoints.deleteMany}`);

  const handleDelete = useMutation({
    mutationFn: (ids) => apiClient.deleteAll({ ids }),
    onSuccess: () => {
      if (data?.length === selectedItems?.size) {
        setPage((prev) => Math.max(1, prev - 1));
      }
      setIsPopUpOpen(false);
      setSelectedItems(new Set());
      queryclient.invalidateQueries([queryKey || endPoint]);
    },
  });

  const handleConfirmDelete = useCallback(() => {
    handleDelete.mutate([...selectedItems]);
  }, [handleDelete, selectedItems]);

  const t = useTranslations();

  return (
    <>
      <IconButton
        color="secondry-color"
        title={t("actions.delete")}
        disabled={!selectedItems?.size}
        onClick={() => selectedItems?.size && setIsPopUpOpen(true)}
      >
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: selectedItems?.size ? "red" : "inherit" }}
        />
      </IconButton>
      <ConfirmPopUp
        isOpen={isPopUpOpen}
        onClose={handleDeletePopUpClose}
        onConfirm={handleConfirmDelete}
        confirmButtonProps={{ isSending: handleDelete.isLoading }}
      />
    </>
  );
};

export default Delete;
