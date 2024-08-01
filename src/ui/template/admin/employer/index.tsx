import { useState } from "react";
import { setValue } from "@/store/input/slice";
import {
  useCreateEmployerMutation,
  useDeleteEmployerMutation,
  useUpdateEmployerMutation,
} from "@/store/services";
import { styled } from "@/theme/stitches";
import DialogDemo from "@/ui/component/dialog";
import Header from "@/ui/component/header";
import Dropdown from "@/ui/component/select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@/ui/container/table";
import { useGetEmployer } from "@/store/employer";

import EmployerForm from "./form";
import { Button } from "@/ui/component/button";
import {
  deleteEmployerData,
  setNewEmployerData,
  updateEmployerData,
} from "@/store/employer/slice";
import { toast } from "react-toastify";
import ToastContainer from "@/ui/component/toast";

const actionData = [
  {
    _id: 1,
    name: "Edit",
    value: "form",
  },
  {
    _id: 2,
    name: "Delete",
    value: "delete",
  },
];

const EmployerTemplate = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState<string>("");
  const [selectedData, setSelectedData] = useState();
  const [dialogTitle, setDialogTitle] = useState<string>("");

  useGetEmployer();

  //mutation
  const [createEmployer, { isLoading: createLoading, isError: createError }] =
    useCreateEmployerMutation();
  const [updateEmployer, { isLoading: updateLoading, isError: updateError }] =
    useUpdateEmployerMutation();
  const [deleteEmployer, { isLoading: deleteLoading, isError: deleteError }] =
    useDeleteEmployerMutation();
  //selectors
  const employerData = useSelector((state: any) => state.employer.data);
  const handleSubmit = (e: any) => {
    createEmployer(e)
      .unwrap()
      .then((res) => {
        if (res.msg === "employer created") {
          dispatch(setNewEmployerData(res.result));
          toast.success("Employer Created Successfully");
          setShow("");
        } else {
          toast.warning(res.msg);
        }
      })
      .catch((err) => {
        toast.warn(err.data.msg);

        console.log(err, "error");
      });
  };
  const handleEdit = (e: any) => {
    updateEmployer({ value: e, id: selectedData && selectedData?._id })
      .unwrap()
      .then((res) => {
        if (res.msg === "employer updates") {
          dispatch(updateEmployerData(res.result));
          toast.success("Employer Created Successfully");
          setShow("");
        } else {
          toast.warning(res.msg);
        }
      })
      .catch((err) => {
        toast.warn(err.data.msg);

        console.log(err, "error");
      });
  };
  const handleDelete = (e: string) => {
    deleteEmployer({ id: e })
      .unwrap()
      .then((res) => {
        if (res.msg === "employer deleted") {
          dispatch(deleteEmployerData(e));
          dispatch(updateEmployerData(e));
          toast.success("Employer Deleted Successfully");
          setShow("");
        } else {
          toast.warning(res.msg);
        }
      })
      .catch((err) => {
        toast.warn(err.data.msg);
        console.log({ err });
      });

    setShow("");
  };
  return (
    <>
      <StyledMain>
        <Button
          customStyle={{ float: "right" }}
          label="Create Employer"
          onClick={() => {
            setSelectedData();
            setDialogTitle("Create Employer");
            setShow("form");
          }}
        ></Button>
        <DialogDemo
          open={show ? true : false}
          title={dialogTitle}
          onClose={() => {
            setShow("");
          }}
        >
          {show === "form" && (
            <EmployerForm
              formData={selectedData}
              onCreate={(e: any) => {
                handleSubmit(e);
              }}
              onEdit={(e: any) => {
                handleEdit(e);
              }}
            />
          )}

          {show === "view" && <>View</>}
          {show === "delete" && (
            <Flex>
              <Button
                label="Yes"
                variant="secondary"
                onClick={() => {
                  handleDelete(selectedData._id);
                }}
              ></Button>
              <Button
                label="No"
                onClick={() => {
                  setShow("");
                }}
              ></Button>
            </Flex>
          )}
        </DialogDemo>
        {employerData.length && (
          <Table
            headers={["Email", "Status", "Action"]}
            columnStyle={{ gridTemplateColumns: "2fr 1fr 1fr" }}
          >
            {employerData.map((item: any) => {
              return (
                <>
                  <StyledP>{item.email}</StyledP>
                  <StyledP>{item.status}</StyledP>
                  <div>
                    <Dropdown
                      data={actionData}
                      name="action"
                      labelShow={false}
                      label={"Select Action"}
                      changeText={false}
                      handleChange={(e) => {
                        setSelectedData(item);

                        if (e === "form") {
                          setDialogTitle("Edit Employer");
                        }

                        if (e === "delete") {
                          setDialogTitle(
                            "Are you sure you want to delete this employer?"
                          );
                        }
                        setShow(e);
                      }}
                    />
                  </div>
                </>
              );
            })}
          </Table>
        )}
      </StyledMain>
    </>
  );
};

export default EmployerTemplate;
const StyledP = styled("span", {
  fontSize: "$normal",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});
const StyledMain = styled("div", {
  boxShadow: "0px 0px 20px 0px rgba(76, 87, 125, 0.02)",
  padding: "1rem",
  borderRadius: 10,
  background: "$white",
});

export const StyledTrigger = styled("div", {
  padding: "1rem",
  background: "$primary",
  width: "fit-content",
  color: "$white",
  borderRadius: "8px",
  transition: "0.2s",
  float: "right",
  "&:hover": {
    scale: "0.91",
  },
});

const Flex = styled("div", {
  paddingTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
});
