import { useEffect, useState } from "react";
import DialogDemo from "../../..//ui/component/dialog";
import Header from "../../..//ui/component/header";
import Dropdown from "../../../ui/component/select";

import EmployerForm from "./form";
// import { Button } from "../../../component/button";
// import { styled } from "../../../../theme/stitches";
import Table from "../../../ui/container/table";
import { styled } from "../../../theme/stitches";
import { Button } from "../../../ui/component/button";
import { employerData } from "../data";
import { connect } from "react-redux";
import { AppState } from "../../../store/reducer";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "../../../store/employee/actions";

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

const Employer = ({
  isLoading,
  employees,
  fetchEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
}: any) => {
  const [show, setShow] = useState<string>("");
  const [selectedData, setSelectedData] = useState();
  const [dialogTitle, setDialogTitle] = useState<string>("");

  useEffect(() => {
    fetchEmployees({ data: employerData });
  }, []);

  return (
    <>
      <StyledMain>
        <Button
          customStyle={{ float: "right" }}
          label="Create Employer"
          onClick={() => {
            setSelectedData(undefined);
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
                console.log(e);

                createEmployee({ data: e });
              }}
              onEdit={(e: any) => {
                updateEmployee({ data: e });
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
                  deleteEmployee({ data: selectedData.id });
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
            headers={["Email", "Status", "Action"]}
            columnStyle={{ gridTemplateColumns: "2fr 1fr 1fr" }}
          >
            {employees.map((item: any) => {
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
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Employer);

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
