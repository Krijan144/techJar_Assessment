import { useEffect, useState } from "react";
import DialogDemo from "../../../ui/component/dialog";
import Dropdown from "../../../ui/component/select";

import EmployeeForm from "./form";
// import { Button } from "../../../component/button";
// import { styled } from "../../../../theme/stitches";
import Table from "../../../ui/container/table";
import { styled } from "../../../theme/stitches";
import { Button } from "../../../ui/component/button";
import { employeeData } from "../data";
import { connect } from "react-redux";
import { AppState } from "../../../store/reducer";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "../../../store/employee/actions";
import { setNotification } from "../../../store/app/actions";

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
interface EmployeeType {
  isLoading: boolean;
  employees: Array<{ email: string; firstname: string; id: string }>;
  fetchEmployees: (data: any) => void;
  createEmployee: (data: any) => void;
  deleteEmployee: (data: any) => void;
  updateEmployee: (data: any) => void;
  setNotification: (notification: {
    name: string;
    message: string;
    level: string;
  }) => void;
}
const Employee = ({
  isLoading,
  employees,
  fetchEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
  setNotification,
}: EmployeeType) => {
  const [show, setShow] = useState<string>("");
  const [selectedData, setSelectedData] = useState();
  const [dialogTitle, setDialogTitle] = useState<string>("");

  useEffect(() => {
    fetchEmployees({ data: employeeData });
  }, []);

  return (
    <>
      <StyledMain>
        <Button
          customStyle={{ float: "right" }}
          label="Create Employee"
          onClick={() => {
            setSelectedData(undefined);
            setDialogTitle("Create Employee");
            setShow("form");
          }}
        ></Button>
        {isLoading ? (
          <></>
        ) : (
          <>
            <DialogDemo
              open={show ? true : false}
              title={dialogTitle}
              onClose={() => {
                setShow("");
              }}
            >
              {show === "form" && (
                <EmployeeForm
                  formData={selectedData}
                  onCreate={async (e: any) => {
                    await createEmployee({ data: e });
                    setNotification({
                      name: "create",
                      message: "Employee Created Successfully!",
                      level: "success",
                    });
                    setShow("");
                  }}
                  onEdit={async (e: any) => {
                    await updateEmployee({ data: e });
                    setNotification({
                      name: "update",
                      message: "Employee Updated Successfully!",
                      level: "success",
                    });
                    setShow("");
                  }}
                />
              )}

              {show === "delete" && (
                <Flex>
                  <Button
                    label="Yes"
                    variant="secondary"
                    onClick={() => {
                      deleteEmployee({ data: selectedData.id });
                      setNotification({
                        name: "delete",
                        message: "Employee Deleted Successfully!",
                        level: "success",
                      });
                      setShow("");
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
            {employees.length && (
              <Table
                headers={["Email", "Firstname", "Action"]}
                columnStyle={{ gridTemplateColumns: "2fr 1fr  1fr" }}
              >
                {employees.map((item: any) => {
                  return (
                    <>
                      <StyledP>{item.email}</StyledP>
                      <StyledP>{item.firstname}</StyledP>

                      <div>
                        <Dropdown
                          data={actionData}
                          name="action"
                          labelShow={false}
                          label={"Select Action"}
                          changeText={false}
                          handleChange={(e: any) => {
                            setSelectedData(item);

                            if (e === "form") {
                              setDialogTitle("Edit Employee");
                            }

                            if (e === "delete") {
                              setDialogTitle(
                                "Are you sure you want to delete this employee?"
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
          </>
        )}
      </StyledMain>
    </>
  );
};

const mapStateToProps = ({
  employeeState: { isLoading, employees },
}: AppState) => ({
  isLoading,
  employees,
});

const mapDispatchToProps = {
  fetchEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
  setNotification,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Employee);

const StyledP = styled("span", {
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
